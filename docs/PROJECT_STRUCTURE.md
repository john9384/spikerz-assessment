# Spikerz Project Structure

This document outlines the organized folder structure for the Spikerz Angular application.

## 📁 Directory Structure

```
/src
├── 📂 app
│   ├── 📂 core                    # Core functionality (imported once in AppModule)
│   │   ├── 📂 interceptors        # HTTP interceptors
│   │   │   ├── auth.interceptor.ts
│   │   │   └── error.interceptor.ts
│   │   ├── 📂 guards              # Route guards
│   │   │   ├── auth.guard.ts
│   │   │   └── role.guard.ts
│   │   ├── 📂 services            # Global singleton services
│   │   │   ├── auth.service.ts
│   │   │   ├── api.service.ts
│   │   │   └── config.service.ts
│   │   ├── 📂 layouts             # Layout shells (sidebar + main + drawer)
│   │   └── core.module.ts         # Imported once in AppModule
│   ├── 📂 shared                  # Reusable components and utilities
│   │   ├── 📂 components
│   │   │   └── 📂 ui              # Reusable UI primitives (design system)
│   │   │       ├── button/
│   │   │       ├── input/
│   │   │       ├── card/
│   │   │       ├── badge/
│   │   │       └── modal/
│   │   ├── 📂 directives          # Reusable structural/attribute directives
│   │   ├── 📂 pipes               # Reusable pipes
│   │   └── shared.module.ts
│   ├── 📂 features                # Feature modules
│   │   ├── 📂 sidebar             # Left navigation (responsive, collapsible)
│   │   │   └── sidebar.module.ts
│   │   ├── 📂 dashboard           # Dashboard functionality
│   │   │   ├── 📂 components      # Dashboard-specific UI widgets
│   │   │   ├── 📂 pages           # Top-level routed components
│   │   │   └── dashboard.module.ts
│   │   ├── 📂 remediation         # 3-column remediation techniques
│   │   │   ├── 📂 components
│   │   │   └── remediation.module.ts
│   │   ├── 📂 vulnerabilities     # Drawer + vulnerability cards
│   │   │   ├── 📂 components
│   │   │   └── vulnerabilities.module.ts
│   │   └── 📂 risk                # Risk table, donut chart, flow diagram
│   │       ├── 📂 components
│   │       └── risk.module.ts
│   ├── 📂 state                   # Optional global state (NgRx / signals)
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
├── 📂 assets
│   ├── 📂 i18n                    # Translations (en.json, etc.)
│   ├── 📂 images
│   ├── 📂 icons
│   └── 📂 styles                   # Global SCSS files
│       ├── _variables.scss         # Colors, spacing, typography (from Figma)
│       ├── _mixins.scss            # Media queries, reusable utilities
│       ├── _layout.scss            # Grid, flex utilities
│       ├── _reset.scss             # Normalize / reset
│       └── global.scss             # Imports + base styles
├── 📂 environments
│   ├── environment.ts              # Development environment
│   └── environment.prod.ts         # Production environment
└── main.ts
```

## 🏗️ Architecture Principles

### Core Module

- **Single Responsibility**: Contains only core functionality that should be loaded once
- **Singleton Services**: Auth, API, and configuration services
- **Global Interceptors**: HTTP request/response handling
- **Route Guards**: Authentication and authorization

### Shared Module

- **Reusability**: Components, directives, and pipes used across multiple features
- **Design System**: UI primitives following consistent design patterns
- **No Business Logic**: Pure presentation components

### Feature Modules

- **Lazy Loading**: Each feature module is loaded on-demand
- **Encapsulation**: Feature-specific components and logic
- **Routing**: Feature-level routing configuration

### Assets Organization

- **Design System**: SCSS variables and mixins from Figma designs
- **Responsive**: Mobile-first approach with utility classes
- **Accessibility**: Focus management and screen reader support

## 🎨 Design System

### Color Palette

- **Primary**: Blue shades for main actions and branding
- **Secondary**: Gray shades for text and backgrounds
- **Semantic**: Success (green), warning (yellow), error (red)
- **CSS Variables**: All colors defined as CSS custom properties

### Typography

- **Scale**: Consistent font sizes from 12px to 48px
- **Weights**: Light (300) to Extra Bold (800)
- **Line Heights**: Optimized for readability

### Spacing

- **8px Grid**: All spacing based on 8px increments
- **Responsive**: Different spacing for mobile, tablet, and desktop
- **Utility Classes**: Margin and padding utilities

### Components

- **Button**: Primary, secondary, ghost, and danger variants
- **Card**: Consistent card styling with hover effects
- **Form Elements**: Input fields with focus states
- **Layout**: Grid system and flexbox utilities

## 📱 Responsive Design

### Breakpoints

- **Mobile First**: Base styles for mobile devices
- **Tablet**: 768px and above
- **Desktop**: 992px and above
- **Large Desktop**: 1200px and above

### Media Queries

- **SCSS Mixins**: `@include respond-to(md)` for clean breakpoint usage
- **Utility Classes**: Responsive display and visibility classes
- **Flexible Grid**: CSS Grid with auto-fit columns

## 🔧 Development Guidelines

### Component Structure

- **Standalone Components**: Use Angular standalone components
- **Input/Output**: Clear interface definitions
- **Styling**: Component-scoped styles with SCSS

### Service Architecture

- **Dependency Injection**: Constructor injection preferred
- **Observables**: RxJS for async operations
- **Error Handling**: Global error interceptor

### Routing

- **Lazy Loading**: Feature modules loaded on demand
- **Guards**: Authentication and role-based access
- **Child Routes**: Feature-specific routing

### State Management

- **Services**: Simple state in services for now
- **Signals**: Angular signals for reactive state
- **NgRx**: Optional for complex state management

## 🚀 Getting Started

1. **Install Dependencies**: `npm install`
2. **Start Development**: `npm start`
3. **Build Production**: `npm run build`
4. **Run Tests**: `npm test`

## 📚 Additional Resources

- [Angular Style Guide](https://angular.io/guide/styleguide)
- [Angular Material Design](https://material.angular.io/)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
