# Assets Folder

This folder contains all static assets for the Sabal Academy website.

## Folder Structure

```
assets/
├── images/
│   ├── hero-banner.jpg
│   ├── about-section.jpg
│   ├── course-*.jpg
│   └── testimonial-avatars/
├── icons/
│   ├── social-*.svg
│   ├── feature-*.svg
│   └── ui-icons/
└── README.md
```

## Images

### Hero Section
- `hero-banner.jpg` - Main hero banner image

### About Section
- `about-section.jpg` - About section illustration or company photo

### Course Section
- `course-jee.jpg` - JEE course card image
- `course-neet.jpg` - NEET course card image
- `course-commerce.jpg` - Commerce course card image
- `course-foundation.jpg` - Foundation course card image
- `course-upsc.jpg` - UPSC course card image
- `course-skills.jpg` - Skill development course card image

### Testimonials
- `testimonial-avatars/` - Avatar images for student testimonials

## Icons

### Social Media
- `social-facebook.svg`
- `social-twitter.svg`
- `social-linkedin.svg`
- `social-instagram.svg`

### Features
- `feature-expert.svg` - Expert faculty icon
- `feature-personalized.svg` - Personalized learning icon
- `feature-infrastructure.svg` - Modern infrastructure icon
- `feature-tracking.svg` - Progress tracking icon
- `feature-mentorship.svg` - Mentorship icon
- `feature-results.svg` - Proven results icon

## Image Specifications

### Recommended Sizes

| Image | Recommended Size | Format |
|-------|-----------------|--------|
| Hero Banner | 1920 x 1080 px | JPG/WebP |
| Course Card | 400 x 300 px | JPG/WebP |
| Feature Icon | 200 x 200 px | SVG/PNG |
| Social Icon | 32 x 32 px | SVG/PNG |
| Avatar | 100 x 100 px | JPG/WebP |

## Usage

Currently, the website uses CSS gradient placeholders for all images. To add real images:

1. Add image files to appropriate subfolders
2. Update HTML `<img>` tags or CSS `background-image` properties
3. Update image filenames in the HTML

### Example: Adding a Course Image

```html
<!-- Current placeholder approach -->
<div class="course-card__image placeholder-image"></div>

<!-- With actual image -->
<img src="assets/images/course-jee.jpg" alt="JEE Main & Advanced Course" class="course-card__image">
```

## Placeholder Guidelines

Current website uses gradient placeholders:
- Primary gradient: Secondary → Accent colors
- Dimensions: Responsive (4:3 ratio for course cards, 1:1 for avatars)
- All placeholders are CSS-based for fast loading

## Optimization Tips

1. **Compress Images**: Use tools like TinyPNG or ImageOptim
2. **Format**: Use WebP for modern browsers, JPG as fallback
3. **Responsive Images**: Use `srcset` for different screen sizes
4. **Icons**: Prefer SVG for crisp scaling and small file sizes
5. **Lazy Loading**: Consider lazy loading for images below the fold

## Current Implementation

All images currently use CSS gradients:
- `.placeholder-image` class creates gradient backgrounds
- No actual image files needed for basic functionality
- Easy to replace with real images later

## Future Enhancements

- Add responsive image sets (srcset)
- Implement lazy loading with Intersection Observer
- Add image optimization pipeline
- Create WebP versions for modern browsers
- Add alt text and image descriptions for accessibility

---

Replace these placeholder images with actual images to complete the website design.
