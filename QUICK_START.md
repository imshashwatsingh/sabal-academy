# Quick Start Guide - Sabal Academy Website

## 🚀 Getting Started in 5 Minutes

### 1. Open the Website
- Locate `index.html` in the project folder
- Double-click or right-click → "Open with Browser"
- Website opens in your default browser

### 2. Test Responsiveness
- Press `F12` to open Developer Tools
- Click the mobile device icon (📱)
- Try different screen sizes: Mobile, Tablet, Desktop
- Or resize your browser window

### 3. Navigate the Site
- Click navigation links to jump to sections
- Click "Start Your Journey" button to go to enquiry form
- Try the mobile menu on small screens (hamburger ☰)

### 4. Fill the Contact Form
- Scroll to "Connect With Us" section
- Fill in all fields (validation enabled)
- Click "Send Enquiry"
- See success message appear

### 5. Explore Features
- Hover over buttons to see effects
- Scroll to see animations
- Check footer with social links
- Try keyboard navigation (Tab key)

---

## 📁 File Structure Quick Reference

```
sabal/
├── index.html          ← Main page (all sections)
├── index.js            ← Interactivity & animations
├── styles/
│   └── style.css       ← All styling
├── assets/
│   ├── images/         ← Image folder (currently empty)
│   ├── icons/          ← Icons folder (currently empty)
│   └── README.md       ← Asset guidelines
├── README.md           ← Comprehensive documentation
├── STYLE_GUIDE.md      ← BEM conventions & components
└── QUICK_START.md      ← This file
```

---

## 🎨 Quick Customization

### Change Colors

**File**: `styles/style.css` (top section)

```css
:root {
    --primary-color: #1F6F5F;      /* Change this color */
    --secondary-color: #2FA084;    /* And this */
    --accent-color: #6FCF97;       /* And this */
}
```

**What it affects:**
- Buttons and links
- Navbar background
- Hero section
- Badges and highlights

### Update Contact Info

**File**: `index.html` (Search for "Connect With Us" section)

Find and replace:
- `+91 98765 43210` → Your phone
- `info@sabalisacademy.com` → Your email
- `123 Education Plaza, New Delhi` → Your location
- `Mon - Sat: 9:00 AM - 6:00 PM` → Your hours

### Change Course Names

**File**: `index.html` (Search for "Our Courses" section)

```html
<h3 class="course-card__title">YOUR COURSE NAME HERE</h3>
<p class="course-card__description">YOUR DESCRIPTION HERE</p>
```

### Update Company Name

**File**: `index.html`

Replace `Sabal Academy` with your company name:
- Line 6: Page title
- Navbar (line ~31)
- Hero section (line ~48)
- About section (line ~63)
- Footer (multiple locations)

### Modify Text Content

Find sections by their names:
- Hero Section (line ~46)
- About Section (line ~59)
- Courses Section (line ~97)
- Why Choose Us (line ~173)
- Testimonials (line ~206)
- Enquiry Form (line ~254)
- Contact Section (line ~274)
- Footer (line ~306)

---

## 🎯 Common Tasks

### Add a New Course Card

1. Find the "Our Courses" section in `index.html`
2. Copy this template:

```html
<div class="course-card">
    <div class="course-card__image placeholder-image"></div>
    <div class="course-card__content">
        <h3 class="course-card__title">New Course Name</h3>
        <p class="course-card__description">Course description goes here.</p>
        <div class="course-card__meta">
            <span class="badge">Duration</span>
            <span class="badge badge--secondary">Mode</span>
        </div>
        <button class="btn btn--secondary btn--sm">Know More</button>
    </div>
</div>
```

3. Paste before closing `</div>` of `courses__grid`

### Add a New Feature

1. Find "Why Choose Us" section
2. Copy this template:

```html
<div class="feature-card">
    <div class="feature-card__icon">EMOJI_HERE</div>
    <h3 class="feature-card__title">Feature Name</h3>
    <p class="feature-card__description">Feature description.</p>
</div>
```

3. Paste in the `features__grid`
4. Replace emoji and text

### Add a New Testimonial

1. Find "Student Testimonials" section
2. Copy this template:

```html
<div class="testimonial-card">
    <div class="testimonial-card__stars">⭐⭐⭐⭐⭐</div>
    <p class="testimonial-card__text">
        "Testimonial text here..."
    </p>
    <div class="testimonial-card__author">
        <div class="testimonial-card__avatar">AB</div>
        <div>
            <p class="testimonial-card__name">Full Name</p>
            <p class="testimonial-card__role">Position/Achievement</p>
        </div>
    </div>
</div>
```

3. Paste in `testimonials__grid`
4. Update name, role, and text

### Replace Placeholder Images

1. Save your image to `assets/images/`
2. Find the placeholder in HTML:

```html
<!-- Old -->
<div class="course-card__image placeholder-image"></div>

<!-- New -->
<img src="assets/images/your-image.jpg" 
     alt="Course name" 
     class="course-card__image">
```

3. Update the `src` and `alt` attributes

### Change Button Colors

**File**: `styles/style.css`

```css
/* Primary button (green) */
.btn--primary {
    background-color: var(--primary-color);
}

.btn--primary:hover {
    background-color: var(--secondary-color);
}

/* Secondary button (light green) */
.btn--secondary {
    background-color: var(--accent-color);
}

.btn--secondary:hover {
    background-color: var(--secondary-color);
}
```

---

## 🔍 Troubleshooting

### Styles Not Appearing
1. **Issue**: Website looks plain
2. **Solution**: Make sure `styles/style.css` is in the correct folder
3. **Fix**: Check file path - should be `styles/style.css`

### Mobile Menu Not Working
1. **Issue**: Hamburger menu doesn't respond
2. **Solution**: Check that `index.js` is loaded
3. **Fix**: Verify `<script src="index.js"></script>` at bottom of `index.html`

### Form Not Validating
1. **Issue**: Form doesn't show error messages
2. **Solution**: Check browser console for errors
3. **Press**: F12 → Console tab → Look for red errors

### Animations Too Fast/Slow
1. **File**: `styles/style.css` (CSS Variables section)
2. **Change**:
```css
--transition-base: 250ms ease-in-out;  /* 250ms = quarter second */
--transition-slow: 350ms ease-in-out;  /* 350ms = longer animation */
```

### Colors Look Wrong
1. **Solution**: Check CSS color variables
2. **File**: `styles/style.css` (`:root` section at top)
3. **Values**: Should be hex colors like `#1F6F5F`

### Responsive Design Not Working
1. **Issue**: Site doesn't adapt to screen size
2. **Solution**: Check viewport meta tag in `index.html` line 4
3. **Should be**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

---

## 💡 Pro Tips

### Tip 1: Use Browser DevTools
- Press `F12` to open Developer Tools
- Use Elements tab to inspect and modify HTML
- Use Console tab to run JavaScript commands
- Use Network tab to check loading performance

### Tip 2: Test All Screen Sizes
- Test on actual phone devices
- Test on tablet
- Test landscape and portrait orientation
- Test on high-resolution displays

### Tip 3: Optimize Images
- Compress images before adding
- Use WebP format for modern browsers
- Add alt text to all images
- Use responsive image techniques

### Tip 4: Improve Performance
- Minimize CSS and JS in production
- Use lazy loading for images
- Reduce animation complexity on mobile
- Test with Lighthouse audit tool

### Tip 5: SEO Optimization
- Update meta tags (description, keywords)
- Use descriptive heading hierarchy
- Add structured data (schema.org)
- Improve page speed
- Create XML sitemap

---

## 🚀 Next Steps for Production

### Before Going Live

✅ **Content**
- [ ] Replace all dummy data with actual content
- [ ] Add real company information
- [ ] Update course details and pricing
- [ ] Replace placeholder images
- [ ] Add real testimonials

✅ **Design**
- [ ] Customize colors to match brand
- [ ] Add company logo
- [ ] Optimize images
- [ ] Test on multiple browsers
- [ ] Check responsive design

✅ **Functionality**
- [ ] Set up email service for form submissions
- [ ] Add analytics tracking (Google Analytics)
- [ ] Set up contact form backend
- [ ] Enable HTTPS
- [ ] Test all links work

✅ **Performance**
- [ ] Minify CSS and JavaScript
- [ ] Optimize images (compress, WebP)
- [ ] Enable browser caching
- [ ] Test page speed
- [ ] Use CDN for assets

✅ **SEO**
- [ ] Update page title and meta description
- [ ] Add meta keywords
- [ ] Create robots.txt
- [ ] Create sitemap.xml
- [ ] Add Open Graph tags for social sharing

✅ **Security**
- [ ] Enable HTTPS
- [ ] Submit to Google Search Console
- [ ] Validate form inputs properly
- [ ] Sanitize user data
- [ ] Use security headers

✅ **Accessibility**
- [ ] Test with keyboard navigation
- [ ] Check color contrast ratios
- [ ] Verify ARIA labels
- [ ] Test with screen readers
- [ ] Validate HTML

---

## 📞 Support & Resources

### CSS References
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)

### JavaScript References
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)

### Design Resources
- [Unsplash - Free Images](https://unsplash.com/)
- [Pexels - Free Stock Photos](https://www.pexels.com/)
- [Font Awesome - Icons](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

### Tools
- [Lighthouse - Performance Audit](https://developers.google.com/web/tools/lighthouse)
- [WAVE - Accessibility Checker](https://wave.webaim.org/)
- [W3C Validator](https://validator.w3.org/)
- [TinyPNG - Image Compression](https://tinypng.com/)

---

## 📝 Version Info

**Current Version**: 1.0  
**Last Updated**: April 2024  
**Framework**: Vanilla HTML/CSS/JavaScript (No Dependencies)  
**Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)  
**Mobile Support**: Full responsive design (320px and up)

---

## 🎉 You're All Set!

Your Sabal Academy website is ready to go. Now you can:

1. **Customize** the content and colors
2. **Add** your images and branding
3. **Deploy** to a web hosting service
4. **Share** with your coaching institute
5. **Get feedback** and iterate

Good luck with your website! 🚀

---

**Need help?** Refer to:
- `README.md` - Full project documentation
- `STYLE_GUIDE.md` - CSS components and conventions
- HTML comments in `index.html` - Inline documentation
- Browser DevTools - For debugging and inspection

Happy coding! 💻
