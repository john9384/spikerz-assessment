import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface TranslationData {
  [key: string]: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLanguage = 'en';
  private translations: TranslationData = {};
  private translationsLoaded = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.loadTranslations(this.currentLanguage);
  }

  /**
   * Load translations for a specific language
   */
  loadTranslations(lang: string): Observable<boolean> {
    this.currentLanguage = lang;

    return this.http.get<TranslationData>(`/assets/i18n/${lang}.json`).pipe(
      tap((data) => {
        this.translations = data;
        this.translationsLoaded.next(true);
      }),
      map(() => true),
      catchError(() => {
        // Fallback to English if loading fails
        if (lang !== 'en') {
          return this.loadTranslations('en');
        }
        return of(false);
      })
    );
  }

  /**
   * Get translation by key
   */
  translate(key: string, params?: Record<string, string | number>): string {
    const keys = key.split('.');
    let value: unknown = this.translations;

    // Navigate through nested keys
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    // If value is not a string, return the key
    if (typeof value !== 'string') {
      return key;
    }

    // Replace parameters in the translation
    if (params) {
      return this.interpolate(value, params);
    }

    return value;
  }

  /**
   * Interpolate parameters in translation string
   */
  private interpolate(
    text: string,
    params: Record<string, string | number>
  ): string {
    return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return params[key] !== undefined ? String(params[key]) : match;
    });
  }

  /**
   * Get current language
   */
  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  /**
   * Check if translations are loaded
   */
  isTranslationsLoaded(): Observable<boolean> {
    return this.translationsLoaded.asObservable();
  }

  /**
   * Get all translations for current language
   */
  getAllTranslations(): TranslationData {
    return this.translations;
  }

  /**
   * Change language
   */
  changeLanguage(lang: string): Observable<boolean> {
    if (lang === this.currentLanguage) {
      return of(true);
    }
    return this.loadTranslations(lang);
  }
}
