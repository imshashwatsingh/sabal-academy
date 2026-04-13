# Sabal Academy - Component & CSS Style Guide

This document outlines the naming conventions, component structure, and coding standards used in the Sabal Academy website.

## 📋 Table of Contents

1. [Class Naming Convention](#class-naming-convention)
2. [Component Structure](#component-structure)
3. [Color Palettes](#color-palettes)
4. [Spacing System](#spacing-system)
5. [Typography](#typography)
6. [Reusable Components](#reusable-components)
7. [Animation Standards](#animation-standards)
8. [Responsive Breakpoints](#responsive-breakpoints)

---

## Class Naming Convention

### BEM-Inspired Methodology

The project uses a modified BEM (Block, Element, Modifier) naming convention for clarity and maintainability.

**Format**: `.block__element--modifier`

### Examples

```html
<!-- Block -->
<div class="navbar">

<!-- Block with Element -->
<a class="navbar__link">Home</a>

<!-- Element with Modifier -->
<button class="btn btn--primary">Click me</button>

<!-- Multiple Modifiers -->
<a class="btn btn--primary btn--lg">Large Primary Button</a>
```

### Naming Rules

1. **Use hyphens** for multi-word class names: `.hero__content`
2. **Use double underscores** for elements: `.card__header`
3. **Use double dashes** for modifiers: `.btn--primary`
4. **Avoid generic names**: Use descriptive names like `.course-card__title` instead of `.title`
5. **Keep it short but clear**: Balance verbosity with clarity

### Common Patterns

```css
/* Block */
.navbar { }
.hero { }
.about { }
.courses { }
.testimonials { }
.footer { }

/* Elements */
.navbar__logo { }
.navbar__menu { }
.navbar__link { }
.hero__content { }
.hero__title { }

/* Modifiers */
.btn--primary { }
.btn--secondary { }
.btn--sm { }
.btn--lg { }
```

---

## Component Structure

### Button Component

```html
<button class="btn btn--primary btn--lg">Click Me</button>
```

**Available Modifiers**:
- `.btn--primary` - Primary color background
- `.btn--secondary` - Secondary/accent color background
- `.btn--sm` - Small size
- `.btn--lg` - Large size

### Badge Component

```html
<span class="badge">6 Months</span>
<span class="badge badge--secondary">Online & Offline</span>
```

### Card Components

#### Course Card
```html
<div class="course-card">
    <div class="course-card__image placeholder-image"></div>
    <div class="course-card__content">
        <h3 class="course-card__title">Course Name</h3>
        <p class="course-card__description">Description</p>
        <div class="course-card__meta">
            <span class="badge">Duration</span>
        </div>
    </div>
</div>
```

#### Feature Card
```html
<div class="feature-card">
    <div class="feature-card__icon">📚</div>
    <h3 class="feature-card__title">Feature Name</h3>
    <p class="feature-card__description">Description</p>
</div>
```

#### Testimonial Card
```html
<div class="testimonial-card">
    <div class="testimonial-card__stars">⭐⭐⭐⭐⭐</div>
    <p class="testimonial-card__text">Testimonial text</p>
    <div class="testimonial-card__author">
        <div class="testimonial-card__avatar">AB</div>
        <div>
            <p class="testimonial-card__name">Name</p>
            <p class="testimonial-card__role">Role</p>
        </div>
    </div>
</div>
```

### Section Header

```html
<div class="section__header">
    <h2 class="section__title">Section Title</h2>
    <p class="section__subtitle">Section Subtitle</p>
</div>
```

### Form Components

```html
<div class="form__group">
    <label for="name" class="form__label">Label Text</label>
    <input type="text" id="name" class="form__input" placeholder="Placeholder">
</div>

<div class="form__group">
    <label for="course" class="form__label">Select Option</label>
    <select id="course" class="form__select">
        <option>Option 1</option>
    </select>
</div>

<div class="form__group">
    <label for="message" class="form__label">Message</label>
    <textarea id="message" class="form__textarea"></textarea>
</div>
```

---

## Color Palettes

### Primary Colors

```css
--primary-color: #1F6F5F;      /* Main green */
--secondary-color: #2FA084;    /* Darker green */
--accent-color: #6FCF97;       /* Light green */
```

### Neutral Colors

```css
--white: #FFFFFF;              /* Primary background */
--light-gray: #F5F5F5;         /* Secondary background */
--background-color: #EEEEEE;   /* Tertiary background */
--border-color: #E0E0E0;       /* Borders */
--text-dark: #1a1a1a;          /* Main text */
--text-light: #555555;         /* Secondary text */
--text-muted: #888888;         /* Tertiary text */
```

### Usage Guidelines

```css
/* Primary actions - buttons, links */
background-color: var(--primary-color);

/* Secondary actions, hover states */
background-color: var(--secondary-color);

/* Emphasis, badges, highlights */
background-color: var(--accent-color);

/* Section backgrounds */
background-color: var(--light-gray);

/* Card backgrounds */
background-color: var(--white);

/* Text hierarchy */
color: var(--text-dark);        /* Headlines, important text */
color: var(--text-light);       /* Body text */
color: var(--text-muted);       /* Secondary info */
```

---

## Spacing System

### Predefined Spacing Values

```css
--spacing-xs: 0.5rem;      /* 8px */
--spacing-sm: 1rem;        /* 16px */
--spacing-md: 1.5rem;      /* 24px */
--spacing-lg: 2rem;        /* 32px */
--spacing-xl: 3rem;        /* 48px */
--spacing-2xl: 4rem;       /* 64px */
```

### Usage Examples

```css
/* Padding */
padding: var(--spacing-lg);          /* All sides */
padding: var(--spacing-md) var(--spacing-lg);  /* Vertical, Horizontal */

/* Margin */
margin-bottom: var(--spacing-lg);
margin: var(--spacing-lg) 0;

/* Gap */
gap: var(--spacing-md);
```

### Responsive Spacing

Spacing values automatically scale down on smaller screens via media queries. No need to manually adjust in most cases.

---

## Typography

### Font Settings

```css
--font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

### Font Sizes

```css
--font-size-sm: 0.875rem;    /* 14px */
--font-size-base: 1rem;      /* 16px */
--font-size-lg: 1.125rem;    /* 18px */
--font-size-xl: 1.5rem;      /* 24px */
--font-size-2xl: 2rem;       /* 32px */
--font-size-3xl: 2.5rem;     /* 40px */
--font-size-4xl: 3rem;       /* 48px */
```

### Usage Examples

```html
<!-- Page Title -->
<h1 style="font-size: var(--font-size-4xl);">Main Heading</h1>

<!-- Section Title -->
<h2 class="section__title">Section Heading</h2>

<!-- Body Text -->
<p style="font-size: var(--font-size-base);">Regular paragraph</p>

<!-- Small Text -->
<p style="font-size: var(--font-size-sm);">Small disclaimer</p>
```

### Font Weight System

```css
Regular: 400
Medium: 500
Semibold: 600
Bold: 700
Extra Bold: 800
```

---

## Reusable Components

### Button Variations

```html
<!-- Primary Button -->
<button class="btn btn--primary">Primary Action</button>

<!-- Secondary Button -->
<button class="btn btn--secondary">Secondary Action</button>

<!-- Large Button -->
<button class="btn btn--primary btn--lg">Large Button</button>

<!-- Small Button -->
<button class="btn btn--secondary btn--sm">Small Button</button>

<!-- As Link -->
<a href="#" class="btn btn--primary">Link Button</a>
```

### Badge Variations

```html
<!-- Default Badge -->
<span class="badge">12 Months</span>

<!-- Secondary Badge -->
<span class="badge badge--secondary">Offline</span>

<!-- Multiple Badges -->
<div class="course-card__meta">
    <span class="badge">6 Months</span>
    <span class="badge badge--secondary">Online</span>
</div>
```

### Container Component

```html
<div class="container">
    <!-- Max width 1200px, auto margins, responsive padding -->
    Content goes here
</div>
```

### Section Template

```html
<section class="section-name">
    <div class="container">
        <div class="section__header">
            <h2 class="section__title">Section Title</h2>
            <p class="section__subtitle">Subtitle</p>
        </div>
        
        <!-- Section content grid/layout -->
    </div>
</section>
```

---

## Animation Standards

### Available Animations

```css
@keyframes fadeIn;
@keyframes fadeInUp;
@keyframes fadeInDown;
@keyframes fadeInLeft;
@keyframes fadeInRight;
@keyframes float;
@keyframes bounce;
```

### Transition Durations

```css
--transition-fast: 150ms ease-in-out;
--transition-base: 250ms ease-in-out;
--transition-slow: 350ms ease-in-out;
```

### Usage Examples

```css
/* Fade in on hover */
.card {
    transition: all var(--transition-base);
}

.card:hover {
    transform: translateY(-8px);
}

/* Animation on load */
.course-card {
    animation: fadeInUp 0.6s ease-out;
}

/* Staggered animations */
.feature-card:nth-child(1) { animation-delay: 0s; }
.feature-card:nth-child(2) { animation-delay: 0.2s; }
.feature-card:nth-child(3) { animation-delay: 0.4s; }
```

### Shadow System

```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.12);
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.15);
```

---

## Responsive Breakpoints

### Breakpoint Strategy

The site uses a **mobile-first approach**. 

```css
/* Base styles (Mobile) */
.element { /* ... */ }

/* Tablet and above */
@media (min-width: 769px) { /* ... */ }

/* Desktop and above */
@media (min-width: 1024px) { /* ... */ }

/* Large desktop and above */
@media (min-width: 1440px) { /* ... */ }
```

### Media Query Syntax

```css
/* Tablet: 481px - 768px */
@media (max-width: 768px) { /* ... */ }

/* Mobile: Up to 480px */
@media (max-width: 480px) { /* ... */ }
```

### Grid Breakpoints

The project uses responsive CSS Grid with `auto-fit`:

```css
.courses__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
}
```

---

## Best Practices

### ✅ Do's

1. **Use CSS variables** for consistent theming
2. **Follow BEM naming** for clarity and maintainability
3. **Mobile-first approach** when writing media queries
4. **Semantic HTML** for better accessibility
5. **Reuse components** to maintain consistency
6. **Keep specificity low** for easier overrides
7. **Use flexbox/grid** for layouts
8. **Optimize animations** with `transform` and `opacity`
9. **Test responsiveness** on multiple devices

### ❌ Don'ts

1. **Don't use inline styles** - Use classes instead
2. **Don't overuse animations** - They should enhance, not distract
3. **Don't hardcode colors** - Use CSS variables
4. **Don't use px for responsive spacing** - Use relative units
5. **Don't ignore accessibility** - Always consider contrast and keyboard navigation
6. **Don't nest selectors deeply** - Max 2-3 levels usually sufficient
7. **Don't ignore performance** - Minimize repaints and reflows

### Adding New Components

1. Create descriptive class names following BEM
2. Define related CSS variables if needed
3. Keep component styles modular and isolated
4. Add animations using predefined keyframes
5. Ensure mobile responsiveness
6. Test on multiple devices and browsers
7. Document the component structure

---

## File Organization

```
styles/
└── style.css
    ├── Root & Global Styles
    ├── Utility Classes
    ├── Buttons & Badges
    ├── Section Headers
    ├── Navigation Bar
    ├── Hero Section
    ├── About Section
    ├── Courses Section
    ├── Why Us Section
    ├── Testimonials Section
    ├── Enquiry Form Section
    ├── Footer
    ├── Animations
    └── Responsive Design
```

---

## Version History

- **v1.0** - Initial release with all core sections and components
- Modern, responsive design with smooth animations
- Production-ready code quality
- Full accessibility compliance

---

## Contributing Guidelines

When adding new components or modifying existing ones:

1. Follow the established class naming conventions
2. Use CSS variables for colors and spacing
3. Maintain mobile-first responsive approach
4. Add animations only where they enhance UX
5. Ensure accessibility standards are met
6. Test on multiple device sizes
7. Update this guide if introducing new patterns

---

**Last Updated**: April 2024
**Designed for**: Sabal Academy
**Standards**: WCAG 2.1, Semantic HTML5, CSS3
