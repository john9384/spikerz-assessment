import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

export interface AppConfig {
  apiUrl: string;
  appName: string;
  version: string;
  features: {
    dashboard: boolean;
    remediation: boolean;
    vulnerabilities: boolean;
    risk: boolean;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
    darkMode: boolean;
  };
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configSubject = new BehaviorSubject<AppConfig>(this.getDefaultConfig());
  public config$ = this.configSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadConfig();
  }

  get config(): AppConfig {
    return this.configSubject.value;
  }

  get apiUrl(): string {
    return this.config.apiUrl;
  }

  get appName(): string {
    return this.config.appName;
  }

  get version(): string {
    return this.config.version;
  }

  get features(): AppConfig['features'] {
    return this.config.features;
  }

  get theme(): AppConfig['theme'] {
    return this.config.theme;
  }

  get notifications(): AppConfig['notifications'] {
    return this.config.notifications;
  }

  isFeatureEnabled(feature: keyof AppConfig['features']): boolean {
    return this.config.features[feature] ?? false;
  }

  updateConfig(updates: Partial<AppConfig>): void {
    const newConfig = { ...this.config, ...updates };
    this.configSubject.next(newConfig);
    this.saveConfig(newConfig);
  }

  updateTheme(themeUpdates: Partial<AppConfig['theme']>): void {
    const newTheme = { ...this.config.theme, ...themeUpdates };
    this.updateConfig({ theme: newTheme });
  }

  updateNotifications(notificationUpdates: Partial<AppConfig['notifications']>): void {
    const newNotifications = { ...this.config.notifications, ...notificationUpdates };
    this.updateConfig({ notifications: newNotifications });
  }

  resetConfig(): void {
    const defaultConfig = this.getDefaultConfig();
    this.configSubject.next(defaultConfig);
    this.saveConfig(defaultConfig);
  }

  private loadConfig(): void {
    const storedConfig = localStorage.getItem('appConfig');
    if (storedConfig) {
      try {
        const config = JSON.parse(storedConfig);
        this.configSubject.next({ ...this.getDefaultConfig(), ...config });
      } catch {
        console.warn('Failed to parse stored config, using default');
      }
    }
  }

  private saveConfig(config: AppConfig): void {
    localStorage.setItem('appConfig', JSON.stringify(config));
  }

  private getDefaultConfig(): AppConfig {
    return {
      apiUrl: environment.apiUrl,
      appName: 'Spikerz',
      version: '1.0.0',
      features: {
        dashboard: true,
        remediation: true,
        vulnerabilities: true,
        risk: true
      },
      theme: {
        primaryColor: '#3b82f6',
        secondaryColor: '#64748b',
        darkMode: false
      },
      notifications: {
        email: true,
        push: false,
        sms: false
      }
    };
  }
}
