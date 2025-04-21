# Asset Engineers Website Planning Document

## Primary Target Audience (Priority Order)
1. Facility Managers (esp. Programmed Facility Management)
2. Government Departments (for public tenders)
3. Builders and Construction Companies

## Website Goals (Refined)
1. Create an engaging, professional first impression
2. Clearly communicate core services and expertise
3. Make contact process simple and prominent
4. Showcase government/institutional project experience
5. Highlight professional accreditations and insurance coverage

## Implementation Progress

### ✅ 1. Hero Section
- Impactful structural engineering imagery
- Clear, concise value proposition (updated to focus on structural assets)
- Prominent contact button/form
- Professional, modern design
- Status: Completed with optimized video background and credentials overlay, subtitle refined

### ✅ 2. Core Services Overview
- Structural Inspections
- Design and Certification
- Asset Management
- Contract Administration
- Status: Completed with custom SVG icons and responsive grid layout

### ✅ 3. Key Projects Showcase
- Focus on government and facility management projects
- Brief case studies with visual impact
- Emphasis on Department of Education work
- Highlight long-term client relationships
- Status: Completed with all project images and descriptions
- Features:
  - Government & Education Projects
  - Bridge Projects
  - Commercial Projects
  - Forensic Structural Inspections
- Responsive 4-column grid layout
- Professional imagery for all sections

### ✅ 4. Credentials Section
- Professional registrations
  - Engineers Australia with registration number
  - National Engineering Register (NER)
- Insurance coverage
  - Professional Indemnity Insurance
  - Public Liability Insurance
  - Workers Compensation
- Key client logos
  - Programmed Facility Management
  - AWB
  - CBRE
  - Department of Finance
- Features:
  - Two-column responsive layout
  - Clean white cards with subtle shadows
  - Mobile-optimized stacking design
  - Professional logo display
  - Hover effects on client logos
- Status: Completed with all logos and responsive design

### ⏳ 5. Contact Section
- Simple contact form
- Direct phone number
- Professional email
- Office location
- Quick response guarantee
- Status: Not started

## Design Elements
- Color scheme: Professional greens and navy blues
- Clean, modern single-page layout
- Mobile-optimized
- Clear calls-to-action throughout
- Professional imagery from your portfolio
- Status: Implemented and consistent across completed sections

## Asset Organization
- ✅ Created '/assets' directory structure:
  - ✅ /images (for icons and general images)
  - ✅ /logos (for company and client logos)
  - ✅ /documents (for downloadable content)
  - ✅ /photos (for project photos)
  - ✅ /banners (for hero banners)
  - ✅ /video (for video content)

## Next Steps (Prioritized)
1. ✅ Expand Credentials Section [ACTIONED]
   - ✅ Create dedicated section below projects
   - ✅ Add insurance coverage details
   - ✅ Include key client logos slider
   - ✅ Add years of experience highlight

2. Version Control & Initial Technical Setup
   - ✅ Set up Git repository locally
   - ✅ Created .gitignore file
   - ✅ Made initial commit
   - ✅ Initialize project in GitHub
   - ✅ Push to GitHub completed
     - Created GitHub repository at github.com/owenkeenan/asset-engineers-website
     - Successfully pushed all files
     - Resolved video file size issue through compression
   - ✅ Added README.md with project documentation
   - Remaining tasks:
     - Set up branch protection rules

3. Static Site Deployment
   - ✅ Choose hosting provider (GitHub Pages)
   - ✅ Set up domain and DNS
     - Configured A records for GitHub Pages IPs
     - Added CNAME record for www subdomain
     - DNS propagation completed successfully
   - ✅ Configure SSL certificate (auto-provisioned by GitHub Pages)
   - ✅ Deploy static version of website
     - Site successfully deployed to assetengineers.com.au
     - Both www and non-www versions working
   - ✅ Set up backup system
     - Implemented daily automated backups via GitHub Actions
     - 30-day retention period
     - Manual trigger option available
   - ✅ Verify site is working on all devices
   - ✅ Set up monitoring
     - Implemented 15-minute interval checks via GitHub Actions
     - Automatic issue creation for downtime alerts
     - Manual check option available

4. SEO & Performance Optimization [IN PROGRESS]
   - Implement SEO best practices:
     - ✅ Add meta descriptions
     - ✅ Optimize image alt tags
     - ✅ Add sitemap.xml
     - ✅ Add robots.txt
   - Optimize performance:
     - ✅ Compress images and video
     - ✅ Minify CSS and JavaScript
       - Set up Node.js project with minification tools
       - Implemented CSS minification
       - Created minified styles.min.css
       - Updated HTML to use minified CSS
       - Added local development server for testing
     - Implement lazy loading for images
     - Configure browser caching
   - Set up Google Analytics
   - Set up Google Search Console

5. Contact Form Implementation
   - ✅ Set up form handling using Make.com webhook
   - ✅ Implemented form validation with JavaScript
   - ✅ Added form submission success/error messages
   - ✅ Created contact-form.js with:
     - Real-time field validation
     - Error message display
     - Loading state during submission
     - Success/failure notifications
     - Data collection (timestamp, userAgent, pageUrl)
   - ✅ Tested form submission to Make.com
   - ✅ Deployed and verified on live site
   Remaining tasks:
   - Set up auto-response email system
   - Add reCAPTCHA or similar spam protection

6. Testing & Quality Assurance
   - Cross-browser testing (Chrome, Firefox, Safari, Edge)
   - Mobile responsiveness verification
   - Form functionality testing
   - Load time optimization
   - Accessibility testing
   - Content review and spell check

7. Final Launch Tasks
   - Update DNS if needed for dynamic features
   - Deploy contact form functionality
   - Perform final testing
   - Monitor analytics and performance
   - Document maintenance procedures
   - Create backup schedule

## Git Best Practices
- ✅ Keep Git repositories on local drive, not in OneDrive
  - Prevents file locking issues
  - Improves Git performance
  - Avoids cloud sync conflicts
- ✅ Use feature branches for development
- ✅ Merge through pull requests
- ✅ Delete feature branches after merging

[Last Updated: April 21, 2024]