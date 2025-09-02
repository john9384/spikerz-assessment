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

  private fallbackTranslations: TranslationData = {};

  constructor(private http: HttpClient) {
    this.translations = this.fallbackTranslations;
    this.translationsLoaded.next(true);

    // Load translations from JSON file
    this.loadTranslations(this.currentLanguage).subscribe();
  }

  /**
   * Load translations for a specific language
   */
  loadTranslations(lang: string): Observable<boolean> {
    this.currentLanguage = lang;
    console.log(`Loading translations for language: ${lang}`);

    return this.http.get<TranslationData>(`/assets/i18n/${lang}.json`).pipe(
      tap((data) => {
        console.log('Translations loaded successfully:', data);
        this.translations = data;
        this.translationsLoaded.next(true);
      }),
      map(() => true),
      catchError((error) => {
        console.error('Failed to load translations:', error);
        // Fallback to English if loading fails
        if (lang !== 'en') {
          return this.loadTranslations('en');
        }
        // If English also fails, use fallback translations
        console.log('Using fallback translations');
        this.translations = this.fallbackTranslations;
        this.translationsLoaded.next(true);
        return of(false);
      })
    );
  }

  /**
   * Get translation by key
   */
  translate(key: string, params?: Record<string, string | number>): string {
    console.log('Translating key:', key);
    console.log('Current translations:', this.translations);
    
    const keys = key.split('.');
    let value: unknown = this.translations;

    // Navigate through nested keys
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
        console.log(`Found key "${k}":`, value);
      } else {
        console.log(`Key "${k}" not found in:`, value);
        // Try fallback translations if main translations don't have the key
        value = this.getFallbackValue(keys);
        if (value === undefined) {
          console.log('Key not found in fallback either, returning key');
          return key; // Return key if translation not found anywhere
        }
        break;
      }
    }

    // If value is not a string, return the key
    if (typeof value !== 'string') {
      console.log('Value is not a string:', value);
      return key;
    }

    console.log('Final translation value:', value);
    // Replace parameters in the translation
    if (params) {
      return this.interpolate(value, params);
    }

    return value;
  }

  /**
   * Get fallback value for a key
   */
  private getFallbackValue(keys: string[]): unknown {
    let value: unknown = this.fallbackTranslations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return undefined;
      }
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
