# School Website PRD v1.1
## Product Requirements Document — Premium Static School Website

---

> **Document Version:** 1.1
> **Status:** Ready for Development
> **Target Build Environment:** Windsurf (AI-powered IDE)
> **Stack:** HTML5 + CSS3 + Vanilla JS (or Astro/Next.js static export — see Deployment section)
> **Last Updated:** June 2026

---

## Table of Contents

1. [Product Vision](#1-product-vision)
2. [Business Goals](#2-business-goals)
3. [User Personas](#3-user-personas)
4. [Scope](#4-scope)
5. [Non-Goals](#5-non-goals)
6. [Sitemap / Page Structure](#6-sitemap--page-structure)
7. [Homepage — Section-by-Section Requirements](#7-homepage--section-by-section-requirements)
8. [Required Pages and Sections](#8-required-pages-and-sections)
9. [Design Direction](#9-design-direction)
10. [Functional Requirements](#10-functional-requirements)
11. [Content Requirements](#11-content-requirements)
12. [SEO Requirements](#12-seo-requirements)
13. [Accessibility Requirements](#13-accessibility-requirements)
14. [Performance Requirements](#14-performance-requirements)
15. [Responsive Behavior](#15-responsive-behavior)
16. [Deployment Assumptions](#16-deployment-assumptions)
17. [Phase-Wise Roadmap](#17-phase-wise-roadmap)
18. [Acceptance Criteria](#18-acceptance-criteria)
19. [Risks and Dependencies](#19-risks-and-dependencies)
20. [Final Implementation Notes for Windsurf](#20-final-implementation-notes-for-windsurf)
21. [Windsurf Build Plan](#21-windsurf-build-plan)

---

## 1. Product Vision

Build a **premium, modern, and trustworthy static informational website** for a small-to-medium Indian school that:

- Instills immediate trust and credibility with parents and students visiting for the first time
- Clearly communicates the school's academic strengths, values, facilities, and admission process
- Converts admissions-curious visitors into inquiry submissions or phone calls
- Requires zero ongoing technical maintenance beyond basic content updates
- Is fast, accessible, mobile-first, and SEO-optimised from day one

The website is the school's **primary digital front door**. It must feel premium — on par with top-tier private schools — while remaining practical to build and maintain for a small institution.

---

## 2. Business Goals

| # | Goal | Success Metric |
|---|------|----------------|
| BG-01 | Increase admissions inquiries | ≥ 20% more form submissions or calls within 3 months of launch |
| BG-02 | Establish online credibility | Positive first impression; bounce rate < 55% |
| BG-03 | Reduce repetitive parent queries | FAQs and notice board reduce front-desk calls |
| BG-04 | Improve local search discoverability | Rank on page 1 for "[School Name] [City]" within 60 days |
| BG-05 | Zero downtime, low maintenance | Static hosting; no server to manage |
| BG-06 | Bilingual-ready structure | Content structured so Hindi/regional language can be added later |

---

## 3. User Personas

### Persona 1 — Priya (Prospective Parent)
- **Age:** 32–45
- **Device:** Mobile (Android, mid-range) primarily; desktop occasionally
- **Goal:** Evaluate the school before calling or visiting for admission
- **Pain point:** Needs quick answers — fees, curriculum, distance, facilities — without hunting
- **Behavior:** Skims hero, looks for photos, reads reviews/testimonials, looks for phone number
- **Key pages:** Homepage, Admissions, Gallery, Contact

### Persona 2 — Rohan (Class 10 Student, Self-Researching)
- **Age:** 14–17
- **Device:** Mobile (smartphone)
- **Goal:** Check if the school has good sports facilities, labs, or a specific stream
- **Pain point:** Generic content that sounds copy-pasted
- **Key pages:** Academics, Facilities, Gallery, Events

### Persona 3 — Admissions Officer / Staff
- **Goal:** Share a credible web link with interested families; point them to the notice board
- **Key pages:** Notice Board, Contact, Admissions

### Persona 4 — First-Time Visitor (via Google Search)
- **Device:** Mobile
- **Goal:** Find the school's address, phone number, fee structure, affiliation
- **Behavior:** Likely arrived via a "school near me" search; very short attention span
- **Key pages:** Homepage, Contact, Location

### Persona 5 — Parent of Current Student
- **Goal:** Check events, notices, holidays, exam schedules
- **Key pages:** Notice Board, Events, Footer (quick links)

---

## 4. Scope

### In Scope

- **Static informational website** with no user accounts or login
- All pages listed in the sitemap (Section 6)
- Fully responsive design (mobile, tablet, desktop)
- Contact form with static form handler (e.g., Formspree or Netlify Forms)
- Embedded Google Map for location
- Google Analytics integration
- WhatsApp chat button (floating)
- Image gallery (lightbox, static)
- Downloadable PDFs (prospectus, fee structure — optional)
- Basic SEO meta tags, Open Graph, sitemap.xml, robots.txt
- Notice board section (static, updated by editing HTML/Markdown)
- Print-friendly stylesheet for key pages (optional, Phase 3)

### Out of Scope (see Section 5)

- Student portal, parent login, LMS
- Online fee payment
- Live chat beyond WhatsApp redirect
- CMS backend (Contentful, Strapi, WordPress, etc.)
- Backend APIs or databases

---

## 5. Non-Goals

| Non-Goal | Reason |
|----------|--------|
| Student/parent login portal | Requires backend; out of budget and scope |
| Online fee payment gateway | Regulatory and backend complexity |
| Live attendance or report card system | Requires SIS integration |
| Blog with CMS | Complexity overkill; static notice board suffices |
| E-commerce (uniforms, books) | Not a school website requirement |
| Custom email server | Use Google Workspace separately |
| Video streaming or hosting | Embed YouTube links only |
| Multi-language toggle (v1) | Structure is bilingual-ready but translation deferred |

---

## 6. Sitemap / Page Structure

```
/ (Homepage)
├── /about
│   └── /about#principal-message
├── /academics
├── /admissions
├── /facilities
├── /gallery
├── /events
├── /notice-board
├── /contact
└── /faqs
```

### Navigation Structure

**Primary Nav (Desktop):** Logo | Home | About | Academics | Admissions | Facilities | Gallery | Events | Contact

**Primary Nav (Mobile):** Hamburger menu with same links stacked vertically

**Utility Nav (Top bar):** Phone Number | WhatsApp Icon | Admission Enquiry CTA button

**Footer Nav:** Quick Links | Useful Downloads | Social Links | Legal (Privacy Policy placeholder)

---

## 7. Homepage — Section-by-Section Requirements

> The homepage is the most critical page. Every section must earn its place. Sections must appear in the exact order below.

---

### Section Order (Homepage)

```
1.  Top Bar (utility strip)
2.  Navigation Header
3.  Hero Section
4.  Stats / Trust Bar
5.  About School (summary)
6.  Key Highlights / Why Choose Us
7.  Principal's Message (preview)
8.  Academics Overview
9.  Admissions CTA Banner
10. Facilities Overview
11. Gallery Preview
12. Events / News Preview
13. Notice Board Preview
14. Testimonials
15. Google Reviews
16. FAQs (top 5)
17. Location / Map
17. Footer
```

---

### 7.1 Top Bar

| Field | Detail |
|-------|--------|
| **Purpose** | Quick access to phone, WhatsApp, and admission CTA |
| **Content** | "📞 +91-XXXXX-XXXXX | 📱 WhatsApp Us | 🎓 Apply for Admission 2025–26" |
| **Behavior** | Fixed or sticky. Collapses on mobile to just phone icon + CTA button |
| **CTA** | "Apply Now" → links to `/admissions` |
| **Colors** | School primary color background, white text |
| **Responsive** | Mobile: show only phone icon + "Apply Now" button; hide WhatsApp label (show icon only) |

---

### 7.1b Mobile Sticky CTA Bar

| Field | Detail |
|-------|--------|
| **Purpose** | Ensure critical contact options are always accessible on mobile devices |
| **Layout** | Fixed bottom bar visible only on mobile screens |
| **Content** | Three equally spaced buttons: Call | WhatsApp | Directions |
| **Behavior** | Stays sticky at the bottom of the viewport; z-index above other content |
| **Links** | Call (tel:), WhatsApp (wa.me), Directions (Google Maps link) |
| **Design** | High contrast icons with small text labels; distinct background color |

---

### 7.2 Navigation Header

| Field | Detail |
|-------|--------|
| **Purpose** | Primary navigation and brand identity |
| **Content** | School logo (left), Nav links (center/right), optional Admission CTA button (far right) |
| **Behavior** | Sticky on scroll. Active link highlighted. Smooth scroll for anchor links |
| **Mobile** | Hamburger icon; full-screen or slide-in drawer menu |
| **Logo** | SVG or high-res PNG; links to homepage |
| **Dropdown** | About → "Our Story", "Principal's Message", "Vision & Mission" (optional sub-links) |

---

### 7.3 Hero Section

| Field | Detail |
|-------|--------|
| **Purpose** | Make an immediate strong impression; communicate school identity in 3 seconds |
| **Content** | Full-width background (image or subtle video loop); Headline; Subheadline; Two CTAs |
| **Headline** | e.g., "Nurturing Curious Minds Since 1998" |
| **Subheadline** | e.g., "CBSE Affiliated \| Classes Nursery to XII \| Jaipur, Rajasthan" |
| **CTA 1** | "Explore Admissions" → `/admissions` (Primary button) |
| **CTA 2** | "Take a Virtual Tour" → `/gallery` (Secondary/outline button) |
| **Background** | High-quality photo of school building or students (not stock photos); overlay for text contrast |
| **Height** | Desktop: 90vh minimum; Mobile: 70vh |
| **Animation** | Subtle fade-in on headline + CTA (CSS only, no heavy JS library) |
| **Responsive** | Mobile: reduce font size; stack CTAs vertically; image crops to focal point |
| **Reusable Component** | `<HeroSection>` with props: headline, subline, bg-image, cta1, cta2 |

---

### 7.4 Stats / Trust Bar

| Field | Detail |
|-------|--------|
| **Purpose** | Quick credibility signals; builds instant trust |
| **Content** | 4–5 stat cards in a horizontal row |
| **Sample Stats** | "25+ Years of Excellence" \| "1,200+ Students" \| "98% Board Results" \| "CBSE Affiliated" \| "40+ Qualified Faculty" |
| **Design** | Icon + Number + Label per card; subtle dividers between cards |
| **Background** | Light grey or white with a thin top/bottom border |
| **Responsive** | Mobile: 2×2 grid or horizontal scroll |
| **Reusable Component** | `<StatBar stats={[...]} />` |

---

### 7.5 About School (Summary)

| Field | Detail |
|-------|--------|
| **Purpose** | Give context and build an emotional connection |
| **Layout** | Two-column: left = text, right = image (school building or classroom) |
| **Content** | 3–4 sentences on founding story, values, CBSE affiliation, city. Followed by bullet points: key differentiators (e.g., low student-teacher ratio, safe campus, holistic development) |
| **CTA** | "Learn More About Us" → `/about` |
| **Image** | Real school photo; rounded corners; optional subtle shadow |
| **Responsive** | Mobile: stacked (image first, then text) |

---

### 7.6 Key Highlights / Why Choose Us

| Field | Detail |
|-------|--------|
| **Purpose** | Highlight top 6 reasons to choose the school |
| **Layout** | 3×2 card grid (icon + title + short description) |
| **Sample Highlights** | CBSE Curriculum \| Smart Classrooms \| Safe & Secure Campus \| Sports & Co-curriculars \| Experienced Faculty \| Holistic Development |
| **Design** | Flat icon (Heroicons or Lucide), card with subtle hover shadow |
| **Responsive** | Mobile: 1 column; Tablet: 2 columns; Desktop: 3 columns |
| **Reusable Component** | `<FeatureCard icon, title, description />` |

---

### 7.7 Principal's Message (Preview)

| Field | Detail |
|-------|--------|
| **Purpose** | Add human face and authority to the website |
| **Layout** | Two-column: left = circular photo of Principal + name/designation; right = 3–4 line quote or excerpt |
| **Content** | Short inspirational excerpt (3–4 sentences); "Read Full Message" link |
| **CTA** | "Read Full Message" → `/about#principal-message` |
| **Design** | Soft background (light blue or cream), decorative quote marks (CSS), elegant serif font for the quote |
| **Responsive** | Mobile: stacked (photo top, text below) |

---

### 7.8 Academics Overview

| Field | Detail |
|-------|--------|
| **Purpose** | Give a quick overview of what the school offers academically |
| **Layout** | Section heading + 3–4 horizontal tab-style cards or icon grid |
| **Content** | Pre-Primary \| Primary (I–V) \| Middle School (VI–VIII) \| Secondary (IX–X) \| Senior Secondary (XI–XII) |
| **Each Card** | Grade range, key subjects or streams, icon |
| **CTA** | "View Full Curriculum" → `/academics` |
| **Responsive** | Mobile: horizontal scroll or stacked cards |

---

### 7.9 Admissions CTA Banner

| Field | Detail |
|-------|--------|
| **Purpose** | High-visibility conversion moment mid-page |
| **Layout** | Full-width colored banner (school primary color), centered text + button |
| **Content** | "Admissions Open for 2025–26 \| Limited Seats Available" |
| **CTA** | "Download Prospectus" (PDF link) + "Enquire Now" (→ contact form) |
| **Design** | Bold headline, contrasting button, optional subtle background pattern |
| **Responsive** | Mobile: stack headline and buttons vertically |

---

### 7.10 Facilities Overview

| Field | Detail |
|-------|--------|
| **Purpose** | Show that the school has modern infrastructure |
| **Layout** | Icon grid or image card row (4–6 items) |
| **Sample Items** | Science Lab \| Computer Lab \| Library \| Sports Ground \| Smart Classes \| Transport |
| **Content Per Card** | Icon/image + facility name + 1-line description |
| **CTA** | "See All Facilities" → `/facilities` |
| **Responsive** | Mobile: 2-column grid |

---

### 7.11 Gallery Preview

| Field | Detail |
|-------|--------|
| **Purpose** | Show school life; build emotional appeal |
| **Layout** | Masonry or uniform grid — 6–8 image thumbnails |
| **Content** | Recent events, classroom, sports, cultural programs |
| **Behavior** | Click thumbnail → opens lightbox (static JS lightbox, e.g., GLightbox) |
| **CTA** | "View Full Gallery" → `/gallery` |
| **Responsive** | Mobile: 2-column grid; Desktop: 3–4 columns |

---

### 7.11b School Tour Video

| Field | Detail |
|-------|--------|
| **Purpose** | High-engagement virtual tour of the campus and facilities |
| **Layout** | Full-width or large container video player |
| **Content** | Professionally shot school tour video (YouTube/Vimeo embed) |
| **Behavior** | Custom thumbnail with a play button overlay; lazy-loads iframe on click |
| **Design** | Subtle shadow, rounded corners, engaging poster image |
| **Responsive** | Responsive iframe maintaining 16:9 aspect ratio |

---

### 7.12 Events / News Preview

| Field | Detail |
|-------|--------|
| **Purpose** | Show active school life; builds trust for parents |
| **Layout** | 3-card row (card = date badge + title + short description + "Read More" link) |
| **Content** | Latest 3 events (static, manually updated) |
| **CTA** | "View All Events" → `/events` |
| **Static Alternative** | HTML/Markdown cards; updated by editing the file directly |
| **Responsive** | Mobile: single column stack |

---

### 7.13 Notice Board Preview

| Field | Detail |
|-------|--------|
| **Purpose** | Quick access to important school notices; highly valued by current parents |
| **Layout** | Scrollable list (5–6 notices) with date + title + optional PDF link |
| **Content** | Holiday list, exam schedule, fee reminder, PTM date (static, manually updated) |
| **Design** | Pinboard aesthetic OR clean list with highlighted "New" badge on recent entries |
| **CTA** | "View All Notices" → `/notice-board` |
| **Responsive** | Full width on mobile |

---

### 7.14 Testimonials

| Field | Detail |
|-------|--------|
| **Purpose** | Social proof from parents; critical for admissions conversion |
| **Layout** | Auto-playing carousel (3–4 testimonials) or static 3-card grid |
| **Content Per Card** | Parent photo (avatar placeholder if no photo), Name, Child's class, 3–4 sentence quote |
| **Design** | Quote icon, star rating (optional), subtle card background |
| **Implementation** | Static carousel using CSS/minimal JS (no heavy library) |
| **Responsive** | Mobile: single testimonial visible at a time; swipe gesture |

---

### 7.14b Google Reviews

| Field | Detail |
|-------|--------|
| **Purpose** | Objective, third-party social proof directly from Google My Business |
| **Layout** | Carousel or grid of embedded/synced Google Reviews |
| **Content** | Authentic 5-star reviews from parents and students with Google profile icons |
| **Behavior** | Static sync or lightweight widget (e.g., Elfsight or custom JSON fetch if available) |
| **CTA** | "Read all reviews on Google" → links to GMB profile |
| **Design** | Google logo integration, star ratings prominently displayed |

---

### 7.15 FAQs (Top 5)

| Field | Detail |
|-------|--------|
| **Purpose** | Reduce repetitive parent queries; improve SEO |
| **Layout** | Accordion (show question; click to expand answer) |
| **Content** | Top 5 most common questions (fee, admission age, board, transport, uniform) |
| **Implementation** | Pure CSS accordion (no JS required) or minimal JS toggle |
| **CTA** | "See All FAQs" → `/faqs` |
| **Responsive** | Full width on all devices |

---

### 7.16 Location / Map

| Field | Detail |
|-------|--------|
| **Purpose** | Help parents find the school physically |
| **Content** | Embedded Google Map + address text block + phone + email |
| **Layout** | Two-column: left = map embed, right = contact details |
| **Map** | Google Maps embed (`<iframe>`) — no API key required |
| **Directions CTA** | "Get Directions" → opens Google Maps in new tab |
| **Responsive** | Mobile: stacked (map full width on top, details below) |

---

### 7.17 Footer

| Field | Detail |
|-------|--------|
| **Purpose** | Navigation fallback, legal, contact, social |
| **Layout** | 4-column grid: School Info \| Quick Links \| Useful Downloads \| Contact & Social |
| **Column 1** | Logo + tagline + affiliation info + copyright |
| **Column 2** | Home, About, Academics, Admissions, Facilities, Gallery, Events, Contact |
| **Column 3** | Download Prospectus, Fee Structure, Academic Calendar, Syllabus (all static PDFs) |
| **Column 4** | Address, phone, email, WhatsApp, Facebook icon, YouTube icon |
| **Bottom Strip** | "© 2025 [School Name]. All Rights Reserved. \| Privacy Policy" |
| **Responsive** | Mobile: 2 columns then single column; Bottom strip centered |

---

## 8. Required Pages and Sections

### 8.1 `/about` — About School Page

| Element | Detail |
|---------|--------|
| **Page Title** | About Us — [School Name] |
| **Sections** | School History & Founding Story → Vision & Mission → Core Values → Achievements & Awards → Principal's Message (full) → Management/Trustees section (optional) → Accreditation & Affiliation |
| **Principal's Message** | Full-page section: large circular photo, designation, full letter-style message (400–600 words), signature image |
| **Vision & Mission** | Two cards side by side (icon + heading + paragraph each) |
| **Achievements** | Icon list or horizontal timeline of milestones (e.g., "2005 — First CBSE Board Batch", "2018 — State Sports Champion") |
| **CTA** | "Explore Admissions" button at page bottom |
| **Responsive** | All sections stack vertically on mobile |

---

### 8.2 `/academics` — Academics & Curriculum Page

| Element | Detail |
|---------|--------|
| **Page Title** | Academics — [School Name] |
| **Sections** | Curriculum Overview → Stage-wise Academics (tab or accordion per stage) → Subjects Offered → Teaching Methodology → Assessment & Evaluation → Co-Curricular Activities |
| **Stage Cards** | Pre-Primary, Primary, Middle, Secondary, Senior Secondary — each with: grades, subjects, highlights |
| **Streams (XI–XII)** | Science / Commerce / Humanities (if offered) — list subjects per stream |
| **Teaching Approach** | 3–4 icons with brief paragraphs (Activity-based, Smart Boards, etc.) |
| **Downloads** | Academic Calendar (PDF), Syllabus outline (PDF) — static files |
| **CTA** | "Apply for Admission" at page bottom |
| **Responsive** | Tabs collapse to accordion on mobile |

---

### 8.3 `/admissions` — Admissions Page

| Element | Detail |
|---------|--------|
| **Page Title** | Admissions 2025–26 — [School Name] |
| **Sections** | Admission Banner (Open/Closed status) → Eligibility & Age Criteria (table) → Admission Process (numbered steps) → Documents Required (checklist) → Fee Structure (basic overview or download link) → Enquiry Form → FAQs (admission-specific) |
| **Age Criteria Table** | Class vs. Age as of March 31; CBSE norms |
| **Admission Steps** | Step 1: Fill enquiry form → Step 2: Collect prospectus → Step 3: Appear for interaction → Step 4: Document submission → Step 5: Fee payment & confirmation |
| **Enquiry Form Fields** | Parent Name, Child Name, Class Applying For, Date of Birth, Phone, Email, Message |
| **Form Handler** | Formspree (free tier) or Netlify Forms — no backend required |
| **Fee Section** | "Fee structure available on request / Download PDF" (avoid publishing exact fees online unless desired) |
| **CTA** | "Submit Enquiry" form button; "Download Prospectus" PDF button |
| **Responsive** | Form goes full width on mobile; step list stacks vertically |

---

### 8.4 `/facilities` — Facilities & Infrastructure Page

| Element | Detail |
|---------|--------|
| **Page Title** | Facilities — [School Name] |
| **Layout** | Full-width section per facility with image left/right alternating |
| **Facilities to Cover** | Science Laboratories, Computer Lab, Library & Reading Room, Smart Classrooms, Sports Infrastructure (ground, courts), Auditorium/Hall, Canteen, Transport, CCTV Security, Medical Room |
| **Per Facility** | Image + Heading + 2–3 line description + optional bullet specs |
| **Design** | Alternating image-text layout (image left → text right → image right → text left) |
| **Responsive** | Mobile: image above text for all sections |

---

### 8.5 `/gallery` — Gallery Page

| Element | Detail |
|---------|--------|
| **Page Title** | Gallery — [School Name] |
| **Layout** | Category filter tabs (All \| Events \| Sports \| Classrooms \| Cultural) + masonry/grid below |
| **Filter** | Pure CSS class toggle or minimal JS — no external library required |
| **Lightbox** | GLightbox (lightweight, ~10KB) — opens full image with caption on click |
| **Images** | Optimised WebP format, lazy loaded, alt text for every image |
| **Categories** | Annual Day, Sports Day, Science Fair, Classroom Life, Campus Views |
| **Responsive** | Mobile: 2 columns; Tablet: 3; Desktop: 4 |
| **Performance** | Lazy load all images below the fold; WebP with JPEG fallback |

---

### 8.6 `/events` — Events & News Page

| Element | Detail |
|---------|--------|
| **Page Title** | Events & News — [School Name] |
| **Layout** | Card grid — 6–9 event cards |
| **Card Content** | Event image, date badge, title, short description (2 lines), "Read More" link |
| **"Read More" Behavior** | Expands in-page accordion OR links to a static detail HTML page |
| **Categories** | Badge tags: Academic, Sports, Cultural, Holiday |
| **Static Management** | Developer/admin updates HTML file directly or uses a JSON data file with a build step |
| **Responsive** | Mobile: single column; Desktop: 3-column grid |

---

### 8.7 `/notice-board` — Notice Board Page

| Element | Detail |
|---------|--------|
| **Page Title** | Notice Board — [School Name] |
| **Layout** | Chronological list with date, category badge, title, optional PDF download |
| **Content Types** | Holiday notices, Exam schedules, PTM dates, Fee reminders, Circular |
| **"New" Badge** | Auto CSS: notices added within last 7 days get a "New" label (set in HTML manually) |
| **Static Management** | Simple HTML list; admin edits the file to add/remove notices |
| **Optional Enhancement** | JSON-driven list with a small JS fetch (stays static, no backend) |
| **Archive** | Optional: "Older Notices" collapsible section |
| **Responsive** | Full width single column on all devices |

---

### 8.8 `/contact` — Contact Page

| Element | Detail |
|---------|--------|
| **Page Title** | Contact Us — [School Name] |
| **Sections** | Contact Details Card + Contact Form + Map Embed |
| **Contact Details** | Address, Phone (Office), Phone (Admissions), Email, WhatsApp, Office Hours |
| **Form Fields** | Name, Phone, Email, Subject (dropdown: General / Admissions / Feedback / Other), Message |
| **Form Handler** | Formspree or Netlify Forms (free tier supports ~100 submissions/month) |
| **Success State** | In-page success message after form submission (no page reload) |
| **Map** | Full-width Google Maps iframe below form |
| **Responsive** | Form full width on mobile; map full width below |

---

### 8.9 `/faqs` — FAQs Page

| Element | Detail |
|---------|--------|
| **Page Title** | Frequently Asked Questions — [School Name] |
| **Layout** | Categorised accordion sections |
| **Categories** | Admissions, Academics, Fees, Facilities, Transport, General |
| **Total FAQs** | 20–30 questions minimum (static content) |
| **Implementation** | Pure CSS accordion (`details`/`summary` HTML elements — zero JS needed) |
| **Schema Markup** | Add FAQ schema (JSON-LD) for Google rich results |
| **Responsive** | Full width on all devices |

---

## 9. Design Direction

### 9.1 Overall Aesthetic

- **Style:** Premium, clean, minimal — inspired by top Indian private schools and international school websites
- **Feel:** Trustworthy, warm, academic — NOT corporate, NOT overly playful
- **Inspiration references:** Doon School, DPS websites, international school sites
- **Key principle:** Every visual element must communicate quality and care

---

### 9.2 Color Palette

| Role | Color | Hex Example |
|------|-------|-------------|
| Primary (brand) | Deep Navy or Royal Blue | `#1A3A6B` or `#1E4D8C` |
| Secondary (accent) | Warm Gold or Saffron | `#C9962D` or `#F5A623` |
| Background | Warm White / Off-white | `#FAFAFA` or `#F8F5F0` |
| Surface/Cards | Pure White | `#FFFFFF` |
| Text Primary | Near Black | `#1C1C1E` |
| Text Secondary | Medium Grey | `#6B7280` |
| Success/CTA | Green | `#15803D` |
| Border/Divider | Light Grey | `#E5E7EB` |

> **Note for developer:** Final hex codes to be confirmed with school branding/logo. The palette above is a strong default.

---

### 9.3 Typography

| Role | Font | Weight | Size (Desktop) |
|------|------|--------|----------------|
| Display / Hero Headline | Playfair Display (serif) | 700 | 52–64px |
| Section Headings (H2) | Playfair Display or Inter | 600–700 | 36–42px |
| Sub-headings (H3) | Inter | 600 | 22–26px |
| Body Text | Inter | 400 | 16–17px |
| Captions / Labels | Inter | 400–500 | 13–14px |
| Quote / Pull-quote | Playfair Display Italic | 400 | 20–24px |

**Font loading:** Google Fonts with `display=swap`; preload the two main fonts in `<head>`.

---

### 9.4 Spacing & Layout

- **Base grid:** 12-column CSS Grid or Flexbox
- **Max content width:** 1200px (centered, with 24px padding on sides)
- **Section padding:** `80px` top/bottom on desktop; `48px` on mobile
- **Card gap:** `24px` standard; `32px` for large cards
- **Border radius:** `8px` for cards; `4px` for buttons and inputs

---

### 9.5 Component Design Principles

- Buttons: rounded corners, solid primary + outline secondary, hover state with smooth transition
- Cards: white background, subtle `box-shadow: 0 2px 12px rgba(0,0,0,0.08)`, border-radius 8px
- Images: always use `aspect-ratio` CSS to prevent layout shift; `object-fit: cover`
- Icons: Heroicons or Phosphor Icons (SVG inline or sprite)
- Dividers: prefer whitespace over lines; use light borders sparingly

---

### 9.6 Animation & Interaction

- **Philosophy:** Subtle and purposeful; never distracting
- Hero headline: fade-in + slight translateY on load (CSS keyframe)
- Section reveal: fade-in-up as sections enter viewport (Intersection Observer, ~20 lines of JS)
- Hover states: cards lift slightly (`transform: translateY(-4px)`), buttons darken
- Page transitions: none (static site; instant navigation)
- **No heavy animation libraries** (no GSAP, no Framer Motion)

---

## 10. Functional Requirements

| ID | Requirement | Priority | Notes |
|----|-------------|----------|-------|
| FR-01 | Sticky navigation header | Must Have | Hides on scroll down, reappears on scroll up (optional) |
| FR-02 | Mobile hamburger menu | Must Have | Slide-in drawer or full-screen overlay |
| FR-03 | Contact form with validation | Must Have | Client-side validation + Formspree/Netlify submission |
| FR-04 | Form success/error states | Must Have | In-page feedback; no page reload |
| FR-05 | Google Maps embed | Must Have | iframe embed; no API key needed |
| FR-06 | WhatsApp floating button | Must Have | Fixed bottom-right; opens wa.me link |
| FR-07 | Image gallery with lightbox | Must Have | GLightbox; keyboard navigable |
| FR-08 | Gallery category filter | Should Have | Pure CSS or minimal JS toggle |
| FR-09 | FAQ accordion | Must Have | `<details>/<summary>` preferred |
| FR-10 | Smooth scroll for anchor links | Should Have | CSS `scroll-behavior: smooth` |
| FR-11 | Testimonials carousel/slider | Should Have | CSS-only or tiny JS (no Swiper/Slick) |
| FR-12 | Lazy loading for images | Must Have | Native `loading="lazy"` attribute |
| FR-13 | 404 custom error page | Should Have | Friendly error page with nav links |
| FR-14 | PDF downloads | Should Have | Static PDFs in `/assets/downloads/` |
| FR-15 | Google Analytics (GA4) | Must Have | Script in `<head>` via gtag |
| FR-16 | Print stylesheet | Nice to Have | For contact/admissions pages |
| FR-17 | Scroll-to-top button | Nice to Have | Appears after 400px scroll |
| FR-18 | Back-to-top smooth behavior | Nice to Have | CSS only |
| FR-19 | Notice board "New" badge | Should Have | Manual HTML class; no JS needed |
| FR-20 | Open Graph meta tags | Must Have | For WhatsApp/Facebook link previews |
| FR-21 | Admission Lead Popup | Must Have | Exit-intent or scroll-triggered popup form for lead generation |
| FR-22 | Mobile Sticky CTA Bar | Must Have | Persistent Call/WhatsApp/Directions bar on mobile |

---

## 11. Content Requirements

### 11.1 Text Content

The developer should request the following content from the school before build:

| Content Item | Format | Owner |
|-------------|--------|-------|
| School name, tagline, founding year | Text | School admin |
| School address, phone(s), email | Text | School admin |
| CBSE affiliation number | Text | School admin |
| About school paragraph (300–500 words) | Text | School admin |
| Principal's full message (400–600 words) | Text/Word | Principal |
| Vision & Mission statements | Text (2 short paragraphs) | School admin |
| Key highlights (6 items, title + 2 lines each) | Text | School admin |
| Stage-wise academics description | Text per stage | School admin |
| Subjects list (each class group) | Text/list | School admin |
| Facilities list + descriptions | Text per facility | School admin |
| 10–15 FAQs with answers | Text Q&A | School admin |
| 4–5 parent testimonials | Text + parent name/child class | School admin |
| Notice board initial entries (5–10) | Text + date | School admin |
| Events (initial 3–6) | Title + date + image + description | School admin |
| Stats (years, students, faculty count) | Numbers | School admin |
| Social media profile URLs | URLs | School admin |

### 11.2 Media Content

| Media Item | Specification | Owner |
|-----------|---------------|-------|
| School logo | SVG preferred; PNG minimum 300px wide, transparent background | School |
| School building photo (hero) | Minimum 1920×1080, well-lit, no watermark | School |
| Principal photo | Minimum 400×400, professional, light background | School |
| Classroom/campus photos (8–10) | Minimum 800×600 each | School |
| Event photos (6–12) | Minimum 800×600 | School |
| Facility photos (one per facility) | Minimum 800×500 | School |
| Gallery photos (20–30) | WebP/JPEG, optimised to <200KB each | School |
| Staff photos (optional) | Minimum 300×300 | School |

> **If media is unavailable:** Use high-quality placeholder images from Unsplash (education/school category) with clear labels to swap later. Do NOT use generic stock photos in final build.

### 11.3 Downloads / Documents

| Document | Format |
|---------|--------|
| School prospectus | PDF, max 5MB |
| Fee structure (optional) | PDF |
| Academic calendar | PDF |
| Admission form | PDF (printable) |

---

## 12. SEO Requirements

| ID | Requirement | Implementation |
|----|-------------|----------------|
| SEO-01 | Unique `<title>` tag per page | Format: "Page Name — School Name, City" |
| SEO-02 | Unique meta description per page | 150–160 characters; keyword-rich |
| SEO-03 | H1 on every page (only one) | Page-specific, keyword-relevant |
| SEO-04 | Logical H1 → H2 → H3 hierarchy | No heading levels skipped |
| SEO-05 | Alt text on all images | Descriptive; no keyword stuffing |
| SEO-06 | Canonical URLs | Self-referencing `<link rel="canonical">` on each page |
| SEO-07 | Open Graph tags | og:title, og:description, og:image, og:url |
| SEO-08 | Twitter Card tags | twitter:card, twitter:title, twitter:image |
| SEO-09 | `sitemap.xml` | Static file; list all pages with `<lastmod>` |
| SEO-10 | `robots.txt` | Allow all crawlers; point to sitemap |
| SEO-11 | Google Search Console setup | Verify via HTML meta tag, submit sitemap.xml, monitor indexing and Core Web Vitals |
| SEO-12 | Structured data — School | JSON-LD `EducationalOrganization` schema |
| SEO-13 | Structured data — FAQ | JSON-LD `FAQPage` schema on FAQs page |
| SEO-14 | Local SEO — NAP consistency | Name, Address, Phone identical across all pages and Google Business |
| SEO-15 | Google My Business | Link website; ensure consistent NAP (done outside website) |
| SEO-16 | Core Web Vitals | LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| SEO-17 | No broken links | Validate before launch; use a link checker |
| SEO-18 | Clean URL structure | `/about`, `/admissions` — no `.html` extensions if using a build tool |

### Key Target Keywords

| Intent | Keywords |
|--------|----------|
| Brand | "[School Name] [City]" |
| Discovery | "best CBSE school in [City]" |
| Admissions | "school admission [City] 2025", "CBSE school admission [City]" |
| Facility | "school with smart classes [City]" |
| Trust | "top school [City/Area]" |

---

## 13. Accessibility Requirements

| ID | Requirement | Standard |
|----|-------------|----------|
| ACC-01 | Color contrast ratio ≥ 4.5:1 for body text | WCAG 2.1 AA |
| ACC-02 | Color contrast ratio ≥ 3:1 for large text and UI components | WCAG 2.1 AA |
| ACC-03 | All images have descriptive alt text | WCAG 1.1.1 |
| ACC-04 | Keyboard navigable (Tab order logical) | WCAG 2.1.1 |
| ACC-05 | Skip navigation link ("Skip to main content") | WCAG 2.4.1 |
| ACC-06 | Focus indicators visible on all interactive elements | WCAG 2.4.7 |
| ACC-07 | Form fields have associated `<label>` elements | WCAG 1.3.1 |
| ACC-08 | Form errors described in text (not just color) | WCAG 1.4.1 |
| ACC-09 | `lang="en"` on `<html>` tag | WCAG 3.1.1 |
| ACC-10 | Hamburger menu accessible via keyboard | WCAG 4.1.2 |
| ACC-11 | ARIA roles on landmark regions (nav, main, footer, aside) | WCAG 4.1.2 |
| ACC-12 | Videos (if any) have captions | WCAG 1.2.2 |
| ACC-13 | Carousel/slider has pause control | WCAG 2.2.2 |
| ACC-14 | Touch targets ≥ 44×44px on mobile | WCAG 2.5.5 |

---

## 14. Performance Requirements

| Metric | Target | Tool |
|--------|--------|------|
| Lighthouse Performance Score | ≥ 90 (mobile), ≥ 95 (desktop) | Lighthouse |
| First Contentful Paint (FCP) | < 1.5s | Chrome DevTools |
| Largest Contentful Paint (LCP) | < 2.5s | PageSpeed Insights |
| Cumulative Layout Shift (CLS) | < 0.1 | PageSpeed Insights |
| Total Page Weight (homepage) | < 1MB (images excluded via lazy load) | WebPageTest |
| Hero image size | < 300KB (WebP) | Squoosh |
| Gallery thumbnail size | < 100KB each (WebP) | Squoosh / build script |
| Number of render-blocking resources | 0 | Lighthouse |
| JS bundle size | < 30KB (minified, gzipped) | — |
| CSS bundle size | < 20KB (minified, gzipped) | — |
| HTTP requests (homepage) | < 20 | WebPageTest |

### Performance Techniques

- Use `<img loading="lazy">` for all below-fold images
- Use `<link rel="preload">` for hero image and primary fonts
- Minify HTML, CSS, JS on build
- Serve images in WebP format with JPEG fallback (`<picture>` element)
- Set `width` and `height` attributes on all images to prevent CLS
- Enable gzip/Brotli compression at hosting level (Netlify/Vercel does this automatically)
- Use a CDN (Netlify, Vercel, or Cloudflare Pages include CDN)
- Defer non-critical JS (`defer` or `async` attributes)

---

## 15. Responsive Behavior

### Breakpoints

| Breakpoint | Name | Width |
|-----------|------|-------|
| xs | Extra small (small phones) | ≤ 360px |
| sm | Mobile | 361px – 640px |
| md | Tablet (portrait) | 641px – 768px |
| lg | Tablet (landscape) / Small desktop | 769px – 1024px |
| xl | Desktop | 1025px – 1280px |
| 2xl | Large desktop | > 1280px |

### Responsive Rules Per Component

| Component | Mobile (≤ 640px) | Tablet (641–1024px) | Desktop (> 1024px) |
|-----------|------------------|---------------------|-------------------|
| Navigation | Hamburger drawer | Hamburger or inline | Full horizontal nav |
| Hero | 70vh, stacked text, single CTA | 80vh | 90vh, side-by-side (if split hero) |
| Stats Bar | 2×2 grid | 4 in a row | 5 in a row |
| About section | Stacked (image above text) | Side by side | Side by side |
| Feature cards | 1 column | 2 columns | 3 columns |
| Facility sections | Image above text | Image beside text | Alternating L/R |
| Gallery grid | 2 columns | 3 columns | 4 columns |
| Events cards | 1 column | 2 columns | 3 columns |
| Footer | 1 column | 2 columns | 4 columns |
| Contact form | Full width | 60% width | 50% width + 50% map |

---

## 16. Deployment Assumptions

### Recommended Hosting

| Option | Cost | Pros | Recommended For |
|--------|------|------|-----------------|
| **Netlify** (Free tier) | ₹0/month | Easy deploy, form handling, SSL, CDN | Best choice |
| **Vercel** (Free tier) | ₹0/month | Instant CDN, great DX | If using Next.js |
| **Cloudflare Pages** | ₹0/month | Best CDN, fast globally | Alternative to Netlify |
| **GitHub Pages** | ₹0/month | Simple, but no form handling | Only if no forms needed |

**Recommended: Netlify** — because it includes free form handling (Netlify Forms), SSL, CDN, and easy deploys from Git.

### Domain

- Purchase `.in` or `.com` domain via GoDaddy, Namecheap, or Google Domains (~₹700–1,200/year)
- Point custom domain to Netlify (free SSL via Let's Encrypt)
- Suggested format: `schoolname.edu.in` or `schoolname.ac.in` (if eligible)

### Build Tool Options

| Stack | When to Use |
|-------|-------------|
| **Pure HTML/CSS/JS** | If developer prefers simplicity; no build step needed |
| **Astro (recommended)** | Best for static sites; component-based; fast; easy content management via Markdown |
| **Next.js (static export)** | If developer is familiar with React; `next export` for static output |
| **Eleventy (11ty)** | Lightweight static site generator; good for notices/events from Markdown |

**Recommended stack: Astro** — It gives component reusability, markdown support for notices/events, and generates a 100% static output. Windsurf handles Astro very well.

### Deployment Workflow

```
Local Development (Windsurf)
        ↓
Git Push to GitHub Repository
        ↓
Netlify Auto-Deploy (connected to main branch)
        ↓
Live Website (custom domain + HTTPS)
```

### Content Update Workflow (Post Launch)

- Notices: Edit a `.md` file or HTML file; push to GitHub → auto-deploys in 30 seconds
- Events: Same as notices
- Gallery: Add images to `/public/gallery/` folder; add entry to gallery data file; push
- No CMS required. School admin can be trained to use GitHub web editor for basic edits.

---

## 17. Phase-Wise Roadmap

### Phase 1 — Foundation & Core Pages (Weeks 1–3)

**Goal:** Get the shell, navigation, homepage skeleton, and core pages live.

| Task | Description |
|------|-------------|
| 1.1 | Project setup (Astro/HTML, folder structure, Git repo, Netlify connection) |
| 1.2 | Design system setup (CSS variables: colors, fonts, spacing, components) |
| 1.3 | Reusable layout components: Header, Footer, Navigation, Mobile Menu |
| 1.4 | Homepage shell with all sections (placeholder content) |
| 1.5 | Hero section (with real school image if available) |
| 1.6 | Stats bar |
| 1.7 | About section (summary on homepage) |
| 1.8 | `/about` full page |
| 1.9 | `/contact` page with form (Formspree connected) |
| 1.10 | `/admissions` page with enquiry form |
| 1.11 | 404 custom page |
| 1.12 | Basic SEO: title tags, meta descriptions, Open Graph for all Phase 1 pages |
| 1.13 | Google Analytics GA4 integration |
| 1.14 | Mobile responsive for all Phase 1 pages |

**Phase 1 Deliverable:** A live deployed website with homepage, about, contact, and admissions pages working on Netlify with custom domain (or subdomain).

---

### Phase 2 — Content & Trust Sections (Weeks 4–6)

**Goal:** Complete all remaining pages; populate with real content; build trust-building sections.

| Task | Description |
|------|-------------|
| 2.1 | `/academics` page (full) |
| 2.2 | `/facilities` page (full, with real photos) |
| 2.3 | `/gallery` page with GLightbox and category filter |
| 2.4 | Gallery preview section on homepage (6–8 images) |
| 2.5 | `/events` page (initial 6 events) |
| 2.6 | Events preview section on homepage |
| 2.7 | `/notice-board` page with initial 8–10 notices |
| 2.8 | Notice board preview on homepage |
| 2.9 | Testimonials section on homepage (carousel or grid) |
| 2.10 | Principal's message section on homepage (preview) |
| 2.11 | `/faqs` page (full, all categories) |
| 2.12 | FAQs preview accordion on homepage |
| 2.13 | Location / Map section on homepage |
| 2.14 | WhatsApp floating button |
| 2.15 | PDF uploads (prospectus, academic calendar) |
| 2.16 | Complete footer with all links and downloads |
| 2.17 | SEO: remaining pages' meta, canonical, Open Graph |

**Phase 2 Deliverable:** Complete website with all pages, real content, and all trust sections live.

---

### Phase 3 — Polish, SEO, Performance & Final QA (Week 7–8)

**Goal:** Make the website fast, SEO-ready, accessible, and launch-quality.

| Task | Description |
|------|-------------|
| 3.1 | Image optimisation: convert all to WebP, compress to targets |
| 3.2 | Add `width`/`height` attributes to all images |
| 3.3 | Implement `lazy loading` on all below-fold images |
| 3.4 | Preload hero image and fonts |
| 3.5 | Lighthouse audit and fix all issues < 90 |
| 3.6 | `sitemap.xml` generation and submission to Google Search Console |
| 3.7 | `robots.txt` configuration |
| 3.8 | JSON-LD structured data: School + FAQ schema |
| 3.9 | Accessibility audit (keyboard nav, contrast, alt text, focus states) |
| 3.10 | Cross-browser testing (Chrome, Firefox, Safari, Edge) |
| 3.11 | Device testing (iPhone SE, Samsung Galaxy, iPad, desktop) |
| 3.12 | Form testing (submission, validation, success/error states) |
| 3.13 | All links tested (no broken links, correct anchor scroll) |
| 3.14 | Scroll-to-top button |
| 3.15 | Section reveal animations (Intersection Observer) |
| 3.16 | Print stylesheet for contact/admissions pages |
| 3.17 | Google My Business — link website (done outside codebase) |
| 3.18 | Final stakeholder review and content sign-off |
| 3.19 | Go-live on custom domain with HTTPS confirmed |

**Phase 3 Deliverable:** Production-ready, fully QA'd, live website with Lighthouse score ≥ 90.

---

## 18. Acceptance Criteria

### Phase 1 Acceptance Criteria

- [ ] Website is live on Netlify at a working URL (custom domain or `.netlify.app`)
- [ ] Homepage renders correctly on mobile and desktop
- [ ] Navigation works; mobile hamburger menu opens and closes
- [ ] Contact form submits successfully via Formspree/Netlify Forms
- [ ] Admissions enquiry form submits successfully
- [ ] About page loads with all sections
- [ ] No JavaScript console errors on any Phase 1 page
- [ ] All images have `alt` attributes
- [ ] Google Analytics GA4 is firing (verified in GA4 Realtime)
- [ ] Page titles and meta descriptions are set for all pages

### Phase 2 Acceptance Criteria

- [ ] All 9 pages are live and accessible via navigation
- [ ] Gallery lightbox opens correctly on image click
- [ ] Gallery category filter works
- [ ] Notice board displays 8–10 entries correctly
- [ ] Testimonials carousel displays and advances (auto or manual)
- [ ] WhatsApp button appears fixed on all pages (mobile and desktop)
- [ ] PDF downloads open/download correctly
- [ ] Footer links all work correctly
- [ ] All sections of homepage are visible and correctly ordered
- [ ] No placeholder/lorem-ipsum text remains in any visible section

### Phase 3 Acceptance Criteria

- [ ] Lighthouse score ≥ 90 on mobile, ≥ 95 on desktop (Performance tab)
- [ ] LCP < 2.5s measured on PageSpeed Insights (mobile)
- [ ] CLS score < 0.1 on all key pages
- [ ] All images are WebP format and < target sizes
- [ ] `sitemap.xml` accessible at `https://yourschool.com/sitemap.xml`
- [ ] `robots.txt` accessible and correctly configured
- [ ] FAQ structured data validates in Google Rich Results Test
- [ ] No accessibility errors in automated audit (axe or Lighthouse Accessibility)
- [ ] All interactive elements reachable by keyboard Tab
- [ ] Focus indicators visible on all interactive elements
- [ ] Tested on: Chrome (latest), Firefox (latest), Safari (iOS), Samsung Internet
- [ ] Tested on: iPhone SE (375px), Samsung Galaxy (412px), iPad (768px), 1440px desktop
- [ ] No broken links (validated with a link-checking tool)
- [ ] School stakeholder has reviewed and approved all content
- [ ] Custom domain live with HTTPS (green lock) confirmed

---

## 19. Risks and Dependencies

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|------------|
| R-01 | School delays providing content/images | High | High | Start with placeholder content; build structure first |
| R-02 | School photos are low quality | Medium | Medium | Guide school on photo requirements; offer Unsplash alternatives |
| R-03 | School wants to add a fee payment gateway later | Low | Medium | Design with a "future integration" placeholder section in admissions |
| R-04 | Formspree free tier limit hit (100/month) | Low | Medium | Upgrade to Formspree Basic (₹750/month) or switch to Netlify Forms |
| R-05 | School wants content changes frequently | High | Low | Train admin on GitHub web editor; document the process |
| R-06 | Browser compatibility issues with CSS features | Low | Low | Use PostCSS autoprefixer in build pipeline |
| R-07 | Google Maps embed blocked by school network | Low | Low | Provide alternative: static map image + directions link |
| R-08 | Domain registration delayed | Low | Medium | Use Netlify subdomain for testing; switch domain later |
| R-09 | School rebrands logo/colors after build | Low | High | Use CSS variables for all colors; easy global change |
| R-10 | Hero video (if requested) causes slow load | Medium | High | Default to static image; offer video only as Phase 3 optional |

### Dependencies

| Dependency | Owner | Required By |
|-----------|-------|-------------|
| School logo (SVG/PNG) | School | Phase 1, Day 1 |
| Hero image (high-res) | School | Phase 1, Week 1 |
| School contact details | School | Phase 1, Week 1 |
| About school text | School | Phase 1, Week 2 |
| Principal's message + photo | School | Phase 2, Week 4 |
| All facility/gallery photos | School | Phase 2, Week 4 |
| Parent testimonials | School | Phase 2, Week 5 |
| PDF documents (prospectus) | School | Phase 2, Week 5 |
| Formspree/Netlify account | Developer | Phase 1, Week 1 |
| Domain purchase | School/Developer | Phase 1, Week 1 |
| Google Analytics property | School | Phase 1, Week 2 |

---

## 20. Final Implementation Notes for Windsurf

### Folder Structure (Astro recommended)

```
/
├── public/
│   ├── images/
│   │   ├── hero.webp
│   │   ├── principal.webp
│   │   ├── gallery/
│   │   └── facilities/
│   ├── downloads/
│   │   ├── prospectus.pdf
│   │   └── academic-calendar.pdf
│   ├── favicon.ico
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── MobileMenu.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── StatsBar.astro
│   │   │   ├── AboutPreview.astro
│   │   │   ├── WhyChooseUs.astro
│   │   │   ├── PrincipalMessage.astro
│   │   │   ├── AcademicsOverview.astro
│   │   │   ├── AdmissionsBanner.astro
│   │   │   ├── FacilitiesOverview.astro
│   │   │   ├── GalleryPreview.astro
│   │   │   ├── EventsPreview.astro
│   │   │   ├── NoticeBoard.astro
│   │   │   ├── Testimonials.astro
│   │   │   ├── FAQAccordion.astro
│   │   │   └── LocationMap.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       ├── SectionHeading.astro
│   │       └── Badge.astro
│   ├── data/
│   │   ├── notices.json
│   │   ├── events.json
│   │   ├── gallery.json
│   │   ├── testimonials.json
│   │   └── faqs.json
│   ├── pages/
│   │   ├── index.astro         (homepage)
│   │   ├── about.astro
│   │   ├── academics.astro
│   │   ├── admissions.astro
│   │   ├── facilities.astro
│   │   ├── gallery.astro
│   │   ├── events.astro
│   │   ├── notice-board.astro
│   │   ├── contact.astro
│   │   ├── faqs.astro
│   │   └── 404.astro
│   └── styles/
│       ├── global.css          (CSS variables, reset, typography)
│       ├── components.css      (reusable component styles)
│       └── utilities.css       (helper classes)
├── astro.config.mjs
├── package.json
└── README.md
```

### Windsurf-Specific Instructions

1. **Open Windsurf → New Project → Astro** (or create via terminal: `npm create astro@latest`)
2. Use Windsurf's AI chat to scaffold each component from the specs in this PRD
3. Keep each component self-contained — styles scoped within Astro `<style>` tags
4. Use the `data/` folder for all repeated content (notices, events, gallery) — this makes updates easy
5. Build the design system (CSS variables) first before any component — prompt Windsurf: *"Create a global.css with CSS variables for the school color palette, typography scale, and spacing"*
6. Use Windsurf cascade prompts like: *"Build a Hero component for a school website with: headline, subheadline, CTA buttons, full-width background image with overlay, responsive on mobile"*
7. Never add `npm` packages that aren't essential — keep the dependency list minimal
8. Keep all JavaScript vanilla — no React, Vue, or heavy frameworks needed
9. Test in browser at every component stage — don't batch build without testing
10. Use Windsurf's file generation to create the `data/*.json` files from the content provided by the school

### Key Prompts to Use in Windsurf

- *"Create a sticky responsive navigation header with logo, nav links, mobile hamburger menu, and a CTA button. Use CSS variables for colors."*
- *"Build an FAQ accordion using HTML `<details>` and `<summary>` elements — no JavaScript required."*
- *"Create a contact form with client-side validation that submits to Formspree. Show a success message after submission."*
- *"Build a gallery page with category filter tabs and GLightbox integration."*
- *"Create a notice board component that reads from a JSON array and displays date, title, category badge, and optional PDF link."*

---

## 21. Windsurf Build Plan

> This is the **exact order** in which to build the website in Windsurf. Follow this sequence to avoid rework.

---

### Step 1 — Project Setup & Design System
1. Create Astro project (`npm create astro@latest`)
2. Connect to GitHub repository
3. Connect GitHub to Netlify (auto-deploy on push)
4. Create `global.css` with CSS variables (colors, fonts, spacing, breakpoints)
5. Set up Google Fonts import in `<head>` (Inter + Playfair Display)
6. Build `Button.astro` and `SectionHeading.astro` UI primitives first

### Step 2 — Layout Shell
7. Build `Header.astro` (logo, nav links, CTA button)
8. Build `MobileMenu.astro` (hamburger drawer)
9. Build `Footer.astro` (4-column grid, all links)
10. Create base layout wrapping `<Header>` + `<slot>` + `<Footer>`
11. Create `404.astro` error page

### Step 3 — Homepage (Top-Down)
12. `Hero.astro` — headline, subheadline, 2 CTAs, background image with overlay
13. `StatsBar.astro` — 5 stat cards
14. `AboutPreview.astro` — two-column text + image
15. `WhyChooseUs.astro` — 6-card grid
16. `PrincipalMessage.astro` — photo + quote preview
17. `AcademicsOverview.astro` — stage cards
18. `AdmissionsBanner.astro` — full-width CTA strip
19. `FacilitiesOverview.astro` — icon/image grid
20. `GalleryPreview.astro` — 6-image grid with "View All" CTA
21. `EventsPreview.astro` — 3-card row (from `events.json`)
22. `NoticeBoard.astro` (homepage preview) — 5-item list (from `notices.json`)
23. `Testimonials.astro` — 3-card grid or auto-carousel
24. `FAQAccordion.astro` — 5 items, `<details>/<summary>`
25. `LocationMap.astro` — Google Maps iframe + contact details
26. Assemble all in `index.astro` in correct order

### Step 4 — Inner Pages
27. `/about.astro` — school history, vision/mission, achievements, principal full message
28. `/admissions.astro` — eligibility table, steps, documents checklist, enquiry form
29. `/academics.astro` — stage tabs/accordion, subjects, methodology
30. `/facilities.astro` — alternating image-text sections per facility
31. `/gallery.astro` — filter tabs + GLightbox grid (from `gallery.json`)
32. `/events.astro` — card grid (from `events.json`)
33. `/notice-board.astro` — full chronological list (from `notices.json`)
34. `/contact.astro` — form + map embed
35. `/faqs.astro` — categorised `<details>/<summary>` accordion + JSON-LD schema

### Step 5 — Integrations & Extras
36. Connect contact + admissions forms to Formspree
37. Add WhatsApp floating button (fixed, bottom-right)
38. Add Google Analytics GA4 script
39. Add scroll-reveal animations (Intersection Observer)
40. Add scroll-to-top button

### Step 6 — SEO & Performance
41. Add unique `<title>` and `<meta description>` to every page
42. Add Open Graph and Twitter Card meta to every page
43. Add `<link rel="canonical">` to every page
44. Generate and place `sitemap.xml` in `/public/`
45. Create `robots.txt` in `/public/`
46. Add JSON-LD `EducationalOrganization` schema to homepage
47. Add JSON-LD `FAQPage` schema to `/faqs`
48. Optimise all images to WebP; set `width`/`height` attributes; add `loading="lazy"`
49. Preload hero image and fonts in `<head>`
50. Run Lighthouse; fix all issues to hit ≥ 90 score

### Step 7 — QA & Launch
51. Test all forms (submit, validate, success state)
52. Test all internal and external links
53. Test on mobile (iOS + Android), tablet, and desktop
54. Test keyboard navigation on all interactive elements
55. Run axe accessibility audit; fix all errors
56. Cross-browser test: Chrome, Firefox, Safari, Edge
57. Connect custom domain to Netlify; confirm HTTPS
58. Submit sitemap to Google Search Console
59. Verify GA4 is receiving data
60. Final stakeholder content review and sign-off → **🚀 Launch**

---

*End of PRD — School Website v1.0*

---

> **Document prepared for:** Windsurf development environment
> **Stack:** Astro + HTML5 + CSS3 + Vanilla JS | Hosting: Netlify | Forms: Formspree
> **Target:** Premium static school website for a small-to-medium Indian school
> **Build time estimate:** 6–8 weeks (one developer, part-time)