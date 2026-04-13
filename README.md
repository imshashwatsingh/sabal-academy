# Sabal Academy - Responsive Website

A modern, professional, and fully responsive website for Sabal Academy - a premier coaching institute for academic excellence.

## 🎨 Design Features

- **Modern UI**: Clean, professional design with excellent spacing and typography
- **Fully Responsive**: Seamless experience on mobile, tablet, and desktop devices
- **Green-Grey Cold Aesthetic**: Premium color scheme featuring primary (#1F6F5F), secondary (#2FA084), and accent colors (#6FCF97)
- **Smooth Animations**: Fade-in effects, hover transitions, and parallax scrolling
- **Interactive Elements**: Smooth buttons, form validation, and mobile menu

## 📱 Responsive Breakpoints

- **Mobile**: Up to 480px
- **Tablet**: 481px to 768px
- **Desktop**: 769px and above

## 🏗️ Project Structure

```
sabal/
├── index.html           # Main HTML file with all sections
├── index.js             # JavaScript for interactivity
├── styles/
│   └── style.css        # Complete styling with animations
├── assets/
│   ├── images/          # (Placeholder for images)
│   └── icons/           # (Placeholder for icons)
└── README.md            # This file
```

## 📄 Pages & Sections

### 1. **Navigation Bar**
- Sticky navbar with gradient logo
- Responsive hamburger menu for mobile
- Smooth navigation links with underline effect
- CTA button for "Enquire Now"

### 2. **Hero Section**
- Eye-catching headline and subtitle
- Call-to-action button
- Gradient background with floating animation
- Parallax effect on scroll

### 3. **About Section**
- Company introduction
- Key statistics (Students Trained, Success Rate, Expert Instructors)
- Hover effects on stat cards
- Responsive grid layout

### 4. **Courses Section**
- 6 course cards with descriptions
- Badge system for course duration and mode
- Hover lift animation
- Grid layout with auto-fit columns
- Know More buttons for each course

### 5. **Why Choose Us**
- 6 feature cards with icons
- Hover animations
- Bouncing emoji animations
- Benefits and features highlight

### 6. **Testimonials**
- Student reviews with 5-star ratings
- Avatar circles with initials
- Responsive carousel grid
- Hover lift effects

### 7. **Enquiry Form**
- Professional form with validation
- Field types: Text, Email, Phone, Select, Textarea
- Contact information display
- Success/error notifications
- Smooth form interactions

### 8. **Contact Section**
- Address, phone, email, and hours
- Styled contact information cards
- Icons for visual appeal

### 9. **Footer**
- Multi-column layout
- Social media links
- Course links
- Quick navigation
- Responsive grid

## 🎯 Color Scheme

```css
Primary Color:   #1F6F5F (rgb(31, 111, 95))
Secondary Color: #2FA084 (rgb(47, 160, 132))
Accent Color:    #6FCF97 (rgb(111, 207, 151))
Background:      #EEEEEE (rgb(238, 238, 238))
Dark Text:       #1a1a1a
Light Text:      #555555
```

## ✨ Key Features

### HTML
- Semantic HTML5 structure
- SEO meta tags
- Inline SVG favicon
- Proper heading hierarchy
- Accessible form labels

### CSS
- CSS Variables for theme colors and spacing
- Mobile-first responsive design
- Flexbox and CSS Grid layouts
- Smooth transitions and animations
- Proper color contrast for accessibility
- Modular class naming (BEM-inspired)

### JavaScript
- Mobile menu toggle functionality
- Smooth scroll behavior
- Form validation
- Notification system
- Intersection Observer for scroll animations
- Parallax scrolling effect
- Button ripple effect
- Keyboard navigation support
- Focus management for accessibility
- Debounced scroll events for performance

## 🚀 Animations & Effects

- **Fade In**: Smooth opacity transitions on scroll
- **Fade In Up/Down/Left/Right**: Directional entrance animations
- **Hover Effects**: Scale, lift, and color transitions
- **Float Animation**: Subtle floating effect in hero section
- **Bounce Animation**: Repeating bounce on feature icons
- **Ripple Effect**: Material Design ripple on button clicks
- **Parallax Scrolling**: Hero background moves slower on scroll

## 📋 Form Fields

### Enquiry Form

| Field | Type | Validation |
|-------|------|-----------|
| Full Name | Text | Required |
| Email | Email | Required, valid email |
| Phone | Tel | Required, 10+ digits |
| Course | Select | Required |
| Message | Textarea | Optional |

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Vanilla JS, no frameworks
- **Responsive Design**: Mobile-first approach

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Code Quality

- **DRY Principle**: Reusable components and CSS classes
- **Clean Architecture**: Organized folder structure
- **Semantic HTML**: Proper tag usage
- **Accessibility**: WCAG guidelines compliance
- **Performance**: Optimized animations and lazy loading
- **Best Practices**: Proper variable naming, comments, and documentation

## 🛠️ Customization

### Change Colors
Edit the CSS variables in `styles/style.css`:

```css
:root {
    --primary-color: #1F6F5F;
    --secondary-color: #2FA084;
    --accent-color: #6FCF97;
    /* ... other variables ... */
}
```

### Add Images
Replace placeholder images by adding actual images to `/assets/images/` folder and updating image references in `index.html`.

### Update Content
Edit the dummy data in `index.html` sections:
- Course names and descriptions
- Testimonial text and names
- Contact information
- Company details

## 📊 Performance Optimization

- Minimal CSS and JS file sizes
- Debounced scroll events
- Passive event listeners
- CSS Grid and Flexbox for layout
- Hardware-accelerated animations
- Optimized font loading

## ♿ Accessibility Features

- Semantic HTML structure
- Proper color contrast (WCAG AA)
- Keyboard navigation support
- Tab focus indicators
- Form label associations
- ARIA attributes where needed
- Alt text structures in CSS

## 📝 Dummy Data

All content is placeholder data for demonstration purposes:
- Course names and details are examples
- Student testimonials are fictional
- Contact information is fictional
- All images use gradient placeholders

## 🔐 Security Notes

- Form submission is UI-only (no backend)
- In production, implement proper server-side validation
- Use HTTPS for all communications
- Sanitize and validate all user inputs
- Store sensitive data securely

## 📞 Contact Information (Dummy)

- **Address**: 123 Education Plaza, New Delhi - 110001, India
- **Phone**: +91 98765 43210
- **Email**: info@sabalisacademy.com
- **Hours**: Mon - Sat: 9:00 AM - 6:00 PM

## 📄 License

This website template is created for educational purposes. Feel free to customize and use for your own coaching institute.

## 🎉 Getting Started

1. Open `index.html` in a web browser
2. Navigate through different sections using the navigation bar
3. Test responsive design by resizing the browser window
4. Try the mobile menu on small screens
5. Fill the enquiry form to see validation

## 📈 Future Enhancements

- Backend integration for form submission
- Student portal functionality
- Payment gateway integration
- Blog section
- Alumni network
- Live chat support
- Video player for course previews
- Admin dashboard

---

**Created with ❤️ for Sabal Academy**

Modern, professional, and production-ready coaching institute website.
