# Drink-Dose Website

A comprehensive water intake calculator website built with HTML, CSS, and JavaScript. This website helps users calculate their daily water needs and track their hydration throughout the day.

## 🆕 Latest Updates (November 8, 2025)

### Major Update: Kidney Health Calculator
- **NEW FEATURE**: Added comprehensive kidney health calculator based on urea and creatinine levels
- **Navigation Updated**: Replaced "Articles" menu with "Kidney Calculator" 
- **Color-Coded Assessment**: 
  - 🟢 Green: Normal kidney function (eGFR ≥ 90)
  - 🟡 Yellow: Mild to moderate kidney disease (eGFR 30-89)
  - 🔴 Red: Severe kidney disease (eGFR < 30)
- **eGFR Calculation**: Uses CKD-EPI equation for accurate kidney function assessment
- **Medical Information**: Provides detailed analysis of urea, creatinine, and eGFR levels
- **Health Cards**: Interactive information cards with color-coded status indicators
- **Medical Disclaimer**: Proper medical disclaimer and professional consultation recommendations

### Mobile Responsive Fix
- **Fixed Mobile Navigation**: Solved mobile menu issues where navigation links weren't properly positioned
- **Added Hamburger Menu**: Implemented responsive hamburger menu for mobile devices
- **Improved Breakpoints**: Enhanced responsive design for tablets (768px) and mobile (480px)
- **Touch-Friendly**: Optimized button sizes and spacing for mobile touch interaction
- **Smooth Animations**: Added smooth slide animations for mobile menu toggle
- **Cross-Device Testing**: Ensured proper display on all device sizes

### Google Analytics 4 Implementation
- **Added GA4 Tracking**: Implemented Google Analytics 4 tracking code on all pages
- **Complete Coverage**: Analytics added to all 7 HTML pages (index, kidney-calculator, about, contact, privacy-policy, terms, referensi)
- **User Behavior Tracking**: Will track page views, user journey, device info, and geographic data
- **Privacy Compliant**: GA4 setup follows GDPR guidelines and privacy best practices
- **Ready to Activate**: Simply replace `G-YOUR_TRACKING_ID` with your actual GA4 tracking ID
- **Documentation**: Complete implementation guide available in `GA4_Implementation_Guide.md`

### AdSense Configuration
- **Ad slots are now hidden** for development phase
- All 3 ad positions (top, middle, bottom) have been hidden with `style="display: none;"`
- Ready to activate once Google AdSense account is set up

### Content Updates
- **Replaced Hydration Tips** with WHO-based article: "The Importance of Adjusting Your Water Intake to Activity and Environment"
- Updated content based on WHO Principles – Nutrients in Drinking Water (2005)
- Enhanced educational content with environmental and activity factors

### Design Updates
- **New logo**: Updated from ice cream to water glass with water
- New water glass design with realistic water fill and wave effects
- Better visual representation of hydration theme

## Features

### Core Functionality
- **Water Calculator**: Calculate daily water needs based on weight, age, and activity level
- **Hourly Tracking**: Visual timeline to track water intake throughout the day
- **Smart Reminders**: Optional browser notifications for hourly hydration reminders
- **Kidney Health Calculator**: Assess kidney function using urea and creatinine levels
- **eGFR Assessment**: Calculate estimated Glomerular Filtration Rate using CKD-EPI equation
- **Color-Coded Results**: Visual kidney health status indicators (Green/Yellow/Red)
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **SEO Optimized**: Meta tags, descriptions, and structured content for search engines

### Educational Content
- 5 comprehensive articles about hydration and water intake
- WHO-based guidelines and recommendations
- Information about dehydration symptoms
- Benefits of proper hydration
- Activity-based water calculations
- Facts and myths about water consumption

### Technical Features
- **Google AdSense Ready**: Pre-configured ad slots (currently hidden during development)
- **Google Analytics 4**: Fully implemented and ready for activation
- **Privacy Compliant**: Comprehensive privacy policy and terms of service
- **Accessibility**: WCAG AA compliant color contrasts and responsive design
- **Modern Design**: Clean, professional interface with smooth animations

## File Structure

```
/
├── index.html              # Main calculator page
├── kidney-calculator.html  # Kidney health assessment calculator
├── about.html              # About the website and developer
├── contact.html            # Contact form and information
├── privacy-policy.html     # Privacy policy page
├── terms.html             # Terms of service page
├── style.css              # Main stylesheet (includes kidney calculator styles)
├── script.js              # JavaScript functionality
├── logo.png               # Website logo
├── logo.svg               # SVG version of logo
└── page/
    └── referensi.html     # Educational articles page (no longer in navigation)
```

## Installation & Setup

1. **Download all files** to your web server directory
2. **Configure Google Analytics 4**:
   - Replace `G-YOUR_TRACKING_ID` in all HTML files with your actual GA4 tracking ID
   - Test the implementation by visiting your website and checking GA4 Realtime reports
   - See `GA4_Implementation_Guide.md` for detailed instructions
3. **Configure Google AdSense**:
   - Replace `KODE_VERIFIKASI_GOOGLE_KAMU` in all HTML files with your verification code
   - Update `ca-pub-XXXX` with your actual AdSense publisher ID
   - Replace ad slot IDs (`1234567890`, `1234567891`, `1234567892`) with your actual slot IDs
4. **Update contact email** in `contact.html` and other pages
5. **Test all functionality** on different devices and browsers

## Website Pages

### 1. Home Page (index.html)
- Interactive water intake calculator
- Input fields for weight, age, and activity level
- Results display in liters and glasses
- Hourly tracking timeline
- Ad slots (3 positions)

### 2. About Page (about.html)
- Website mission and purpose
- Key features explanation
- Developer information
- How the calculator works

### 3. Contact Page (contact.html)
- Contact form (frontend only)
- Contact information
- FAQ section
- Response time expectations

### 4. Privacy Policy (privacy-policy.html)
- Data collection practices
- Third-party services (AdSense, Analytics)
- User rights and data protection
- Cookie policy

### 5. Terms of Service (terms.html)
- User agreements
- Disclaimers
- Limitation of liability
- Service usage rules

### 6. Articles Page (page/referensi.html)
- 5 educational articles about hydration
- Expandable content with "Read More" functionality
- WHO guidelines and health information
- Scientific facts and common myths

## Calculator Formula

The water calculator uses the following formula:
- **Base calculation**: 35ml per kg of body weight
- **Activity adjustments**:
  - Light: 90% of base
  - Moderate: 100% of base
  - Heavy: 120% of base
- **Age adjustments**:
  - Under 18: 110% of base
  - Over 55: 90% of base
  - 18-55: 100% of base

## Key Features

### Calculator Results
- Daily water requirement in liters
- Number of 250ml glasses needed
- Hourly intake targets
- Visual tracking timeline

### Tracking System
- 16-hour timeline (6 AM - 10 PM)
- Click-to-mark water intake
- Visual progress indicators
- Color-coded completion status

### Notification System
- Browser notifications for hourly reminders
- In-page notification alerts
- Customizable reminder timing
- Automatic pause when tab is inactive

### AdSense Integration
- 3 strategic ad placement positions:
  - Top: Below header navigation
  - Middle: After calculator results
  - Bottom: In footer section
- All ad slots currently hidden for development
- Ready to activate with proper AdSense configuration

## SEO Optimization

### Meta Tags
- Unique titles for each page
- Optimized meta descriptions
- Relevant keywords for each page
- Google site verification placeholder

### Content Structure
- Semantic HTML5 elements
- Proper heading hierarchy (H1-H4)
- Internal linking between pages
- Image alt attributes
- Structured content for articles

### Technical SEO
- Mobile-responsive design
- Fast loading times
- Clean URL structure
- Breadcrumb navigation ready
- Sitemap ready

## Browser Support

- **Modern browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Mobile browsers**: iOS Safari 12+, Chrome Mobile 60+
- **Features**: ES6 JavaScript, CSS Grid, Flexbox, CSS Custom Properties

## Dependencies

### External Resources
- **Google Fonts**: Poppins font family
- **Google AdSense**: JavaScript library for ad serving
- **Google Analytics**: Ready for implementation (not included)

### No Framework Dependencies
- Pure HTML5, CSS3, and JavaScript
- No jQuery or other JavaScript libraries
- No build process required
- Lightweight and fast loading

## Customization

### Colors
The color scheme can be easily modified by changing CSS custom properties in `style.css`:
- Primary colors: Blue theme (#007BFF)
- Neutral colors: Gray scale
- Success/Warning/Error states

### Content
- All text content can be easily modified
- Articles can be expanded or updated
- Contact information is centralized
- Calculator formula can be adjusted in `script.js`

### Branding
- Logo can be replaced in `logo.png`
- Brand name "Drink-Dose" can be changed throughout files
- Color scheme can be updated via CSS variables

## Performance Considerations

### Optimization Features
- Minified external resources
- Efficient CSS Grid and Flexbox layouts
- Optimized images and icons
- Minimal JavaScript bundle
- Lazy loading ready for future enhancements

### Loading Speed
- No external JavaScript frameworks
- Optimized CSS selectors
- Efficient DOM manipulation
- Minimal HTTP requests

## Future Enhancements

### Potential Additions
- User account system
- Data persistence (localStorage)
- Additional health calculators
- Social sharing features
- Progressive Web App (PWA) capabilities
- Multi-language support

### Analytics Integration
- Google Analytics 4 ready
- Custom event tracking
- Conversion tracking for AdSense
- User behavior analysis

## Support & Maintenance

### Regular Updates Needed
- Google AdSense code maintenance
- Privacy policy updates (annually)
- Terms of service review
- Content updates for accuracy
- Browser compatibility testing

### Monitoring
- AdSense performance tracking
- Website analytics monitoring
- User feedback collection
- Technical error monitoring

## License

This project is developed for Drink-Dose website. All rights reserved to HydroLife.

## Contact

For technical support or questions about this implementation:
- Email: contact@hydrolife.com
- Website: Drink-Dose.com

---

**Note**: This website is ready for production use but requires proper configuration of Google AdSense, analytics, and contact information before going live.
