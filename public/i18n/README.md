# Translation System

This directory contains translation files for the Spikerz application.

## Structure

- `en.json` - English translations (default language)
- `es.json` - Spanish translations (to be added)
- `fr.json` - French translations (to be added)
- `de.json` - German translations (to be added)

## Usage

### In Templates

Use the `translate` pipe in your Angular templates:

```html
<h1>{{ 'dashboard.title' | translate }}</h1>
<p>{{ 'app.welcome' | translate }}</p>
```

### With Parameters

For translations with interpolation:

```html
<p>{{ 'validation.min_length' | translate: { min: 8 } }}</p>
```

### In Components

Inject the `TranslationService` in your components:

```typescript
import { TranslationService } from '../../core/services/translation.service';

constructor(private translationService: TranslationService) {}

// Get translation
const title = this.translationService.translate('dashboard.title');

// Get translation with parameters
const message = this.translationService.translate('validation.min_length', { min: 8 });

// Change language
this.translationService.changeLanguage('es').subscribe();
```

## Adding New Languages

1. Create a new JSON file (e.g., `es.json`)
2. Copy the structure from `en.json`
3. Translate all values to the target language
4. The language will automatically appear in the language switcher

## Translation Keys

Follow these naming conventions:

- Use lowercase with underscores: `dashboard.title`
- Group related translations: `auth.login`, `auth.logout`
- Use descriptive names: `validation.email_invalid`

## Best Practices

1. **Never hardcode text** - Always use translation keys
2. **Keep keys organized** - Group related translations logically
3. **Use parameters sparingly** - Only for dynamic content
4. **Test all languages** - Ensure translations fit in UI elements
5. **Maintain consistency** - Use the same terminology across the app

## Example Translation File

```json
{
  "dashboard": {
    "title": "Dashboard",
    "welcome": "Welcome to the application"
  },
  "common": {
    "save": "Save",
    "cancel": "Cancel"
  }
}
```
