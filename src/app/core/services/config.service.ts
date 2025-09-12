import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
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
  providedIn: 'root',
})
export class ConfigService {
  private configSignal = signal<AppConfig>(this.getDefaultConfig());
  public config = this.configSignal.asReadonly();

  constructor(private http: HttpClient) {
    this.loadConfig();
  }

  get configValue(): AppConfig {
    return this.configSignal();
  }

  get apiUrl(): string {
    return this.configSignal().apiUrl;
  }

  get appName(): string {
    return this.configSignal().appName;
  }

  get version(): string {
    return this.configSignal().version;
  }

  get features(): AppConfig['features'] {
    return this.configSignal().features;
  }

  get theme(): AppConfig['theme'] {
    return this.configSignal().theme;
  }

  get notifications(): AppConfig['notifications'] {
    return this.configSignal().notifications;
  }

  isFeatureEnabled(feature: keyof AppConfig['features']): boolean {
    return this.configSignal().features[feature] ?? false;
  }

  updateConfig(updates: Partial<AppConfig>): void {
    const newConfig = { ...this.configSignal(), ...updates };
    this.configSignal.set(newConfig);
    this.saveConfig(newConfig);
  }

  updateTheme(themeUpdates: Partial<AppConfig['theme']>): void {
    const newTheme = { ...this.configSignal().theme, ...themeUpdates };
    this.updateConfig({ theme: newTheme });
  }

  updateNotifications(
    notificationUpdates: Partial<AppConfig['notifications']>
  ): void {
    const newNotifications = {
      ...this.configSignal().notifications,
      ...notificationUpdates,
    };
    this.updateConfig({ notifications: newNotifications });
  }

  resetConfig(): void {
    const defaultConfig = this.getDefaultConfig();
    this.configSignal.set(defaultConfig);
    this.saveConfig(defaultConfig);
  }

  private loadConfig(): void {
    const storedConfig = localStorage.getItem('appConfig');
    if (storedConfig) {
      try {
        const config = JSON.parse(storedConfig);
        this.configSignal.set({ ...this.getDefaultConfig(), ...config });
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
        risk: true,
      },
      theme: {
        primaryColor: '#3b82f6',
        secondaryColor: '#64748b',
        darkMode: false,
      },
      notifications: {
        email: true,
        push: false,
        sms: false,
      },
    };
  }
}
