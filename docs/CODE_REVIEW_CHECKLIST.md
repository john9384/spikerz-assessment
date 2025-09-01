# Spikerz UI Code Review Checklist

## 📋 Self-Review Guidelines

### 📸 Screenshots in PR

- Include a comparison between the Figma design and the developed UI through screenshots for:
  - 📱 Mobile (iPhone SE)
  - 🖥️ Desktop

### ✅ Merge Readiness

- Ensure the PR is ready to merge (No conflicts)
- CI/CD pipeline must be green

### 💬 Communication

- Resolve all conversations in the PR
- Review your own code before submitting:
  - Remove comments / TODOs
  - Remove unused files / functions / variables

### 🛣️ Additional Resources

For more insights into how we approach code reviews and best practices, check out this guide: [Code Review Best Practices](link-to-guide)

## 🧹 Clean Code Principles

### 🏷️ Meaningful Names

- Use clear and descriptive variable, function, and component names
- Avoid abbreviations and shortcuts (e.g., avoid `dashSvc`, `let l`, `let tOps`)
- Good code should describe itself with meaningful names and functions
- Don't add comments unless it is heavy logic

### 🔢 Avoid Magic Numbers/Strings

- Use constants for all hard-coded numbers and strings
- Create config const objects instead of magic numbers

### 📝 No Comments for Clarification

- Replace explanatory comments with well-named functions
- Comments should only be used for complex business logic

### 🚫 No TODOs in Code

- Do not leave TODO comments
- Instead, create a ticket in Linear for follow-up tasks

### 🏕️ Boy Scout Rule

- If you encounter small issues that are easy to fix, address them immediately

### 🧩 Component/Function Division

- Ensure meaningful separation of components and functions for clarity and maintainability

### 🚫 No Duplicate Code

- Avoid redundancy and duplication in code
- Duplication is a critical issue

## 🌐 Internationalization & Localization

### Translation Keys and Files

- Always use translation keys instead of raw English text in the UI
- This ensures consistency and supports localization
- Keys should be in `lower_snake_case`
- Don't use raw text without translation

## 🔧 TypeScript Best Practices

### Variable Initialization

- Init variables with `null` instead of `undefined`
- Init variables at the top of the file

### Comparison Operators

- Use `===` and not `==`
- Prefer using `??` rather than `||` when dealing with `null` / `undefined`

### Type Usage

- Don't use `any`
- Don't use `enum`, instead create object and a type for it
- Use clear type names (e.g., use `Metric` instead of `TMetric`)
- Use `'hello' as Type` rather than `<Type>'hello'` (cast only in rare cases)
- Generic types should be expressive and prefixed with `T` (e.g., `TData` instead of `T` / `D`)
- If interface has only properties, use `type` instead

### HTTP Status Codes

- Use `HttpStatusCode` for HTTP status, not magic numbers

## 🎨 UI/UX Standards

### Design System Compliance

- Use colors and font-sizes from our design system
- Use `color(--var(x))` instead of hardcoded values
- Don't use colors/font-size not from our design system

### Figma Alignment

- Make sure alignment to Figma with the smallest details
- Ensure mobile works on small mobile screens
- Pay attention to precise spacing, gaps, and proportions

### Component Structure

- Clear component division
- Properties should be on the top, not the bottom

## ❌ Don't Do Examples

### Template and Styling

```typescript
// ❌ Don't use raw template (scss, html), export to file
// ❌ Don't inject syntax. ✅ Prefer to use constructor injection
// ❌ Don't inline style. ✅ Use classes
// ❌ Don't add filename as a comment
```

### Naming Conventions

```typescript
// ❌ Don't use raw strings for types ✅ Use const / enum (with strings)
// ❌ No need to specify it's a list in the name ✅ ACCOUNT_METRICS is enough
// ❌ Don't create magic numbers ✅ Create config const object
```

### Code Organization

```typescript
// ✅ Const should be in a const file, as well as types should be in a types file
// ❌ Don't do this inline
```

### Type Definitions

```typescript
// ❌ Don't use enum, enums are not recommended in TypeScript, use const instead
// ✅ Create const object with type
```

## ✅ Do Examples

### Meaningful Names

```typescript
// ✅ Clear component division
// ✅ Use UserSocialAccount instead of UserSocialAccount
```

### Configuration

```typescript
// ✅ Create config const object
const CONFIG = {
  TIMEOUT: 5000,
  RETRY_ATTEMPTS: 3,
};
```

### Type Definitions

```typescript
// ✅ Use const instead of enum
const STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending',
} as const;

type Status = (typeof STATUS)[keyof typeof STATUS];
```

## 🔍 Review Checklist

Before submitting your PR, ensure you have:

- [ ] ✅ Included screenshots for both mobile and desktop
- [ ] ✅ Resolved all PR conversations
- [ ] ✅ Removed all TODO comments
- [ ] ✅ Removed unused files/functions/variables
- [ ] ✅ Used meaningful names throughout
- [ ] ✅ Replaced magic numbers with constants
- [ ] ✅ Used translation keys instead of raw text
- [ ] ✅ Initialized variables with `null` instead of `undefined`
- [ ] ✅ Used `===` instead of `==`
- [ ] ✅ Used `??` instead of `||` for null/undefined
- [ ] ✅ Avoided `any` types
- [ ] ✅ Used `const` objects instead of `enum`
- [ ] ✅ Used `HttpStatusCode` instead of magic numbers
- [ ] ✅ Used design system colors and fonts
- [ ] ✅ Aligned UI with Figma design
- [ ] ✅ Tested on small mobile screens
- [ ] ✅ No duplicate code
- [ ] ✅ No inline styles
- [ ] ✅ Proper component separation
- [ ] ✅ CI/CD pipeline is green
- [ ] ✅ No merge conflicts

## 📚 Additional Resources

- [Angular Style Guide](https://angular.io/guide/styleguide)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/)
- [Clean Code Principles](https://clean-code-developer.com/)
