import re

with open(r'c:\Users\deven\Downloads\School_Website_PRD_v1.0.docx', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Update version
text = text.replace('PRD v1.0', 'PRD v1.1')
text = text.replace('Document Version:** 1.0', 'Document Version:** 1.1')

# Add to ToC (Home page sections)
toc_addition = '''13. Notice Board Preview
14. Testimonials
15. Google Reviews
16. FAQs (top 5)
17. Location / Map'''
text = re.sub(r'13\. Notice Board Preview.*16\. Location / Map', toc_addition, text, flags=re.DOTALL)

# Add Mobile Sticky CTA Bar
top_bar_text = '''### 7.1 Top Bar

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
| **Design** | High contrast icons with small text labels; distinct background color |'''
text = re.sub(r'### 7\.1 Top Bar\n\n\| Field \| Detail \|\n\|-------\|--------\|\n\| \*\*Purpose\*\* \| Quick access to phone, WhatsApp, and admission CTA \|\n\| \*\*Content\*\* \| "📞 \+91-XXXXX-XXXXX \\\| 📱 WhatsApp Us \\\| 🎓 Apply for Admission 2025–26" \|\n\| \*\*Behavior\*\* \| Fixed or sticky. Collapses on mobile to just phone icon \+ CTA button \|\n\| \*\*CTA\*\* \| "Apply Now" → links to `/admissions` \|\n\| \*\*Colors\*\* \| School primary color background, white text \|\n\| \*\*Responsive\*\* \| Mobile: show only phone icon \+ "Apply Now" button; hide WhatsApp label \(show icon only\) \|', top_bar_text, text)

# Add School Tour Video section
video_text = '''### 7.11 Gallery Preview

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
| **Responsive** | Responsive iframe maintaining 16:9 aspect ratio |'''
text = re.sub(r'### 7\.11 Gallery Preview\n\n\| Field \| Detail \|\n\|-------\|--------\|\n\| \*\*Purpose\*\* \| Show school life; build emotional appeal \|\n\| \*\*Layout\*\* \| Masonry or uniform grid — 6–8 image thumbnails \|\n\| \*\*Content\*\* \| Recent events, classroom, sports, cultural programs \|\n\| \*\*Behavior\*\* \| Click thumbnail → opens lightbox \(static JS lightbox, e.g\., GLightbox\) \|\n\| \*\*CTA\*\* \| "View Full Gallery" → `/gallery` \|\n\| \*\*Responsive\*\* \| Mobile: 2-column grid; Desktop: 3–4 columns \|', video_text, text)

# Add Google Reviews
reviews_text = '''### 7.14 Testimonials

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
| **Design** | Google logo integration, star ratings prominently displayed |'''
text = re.sub(r'### 7\.14 Testimonials\n\n\| Field \| Detail \|\n\|-------\|--------\|\n\| \*\*Purpose\*\* \| Social proof from parents; critical for admissions conversion \|\n\| \*\*Layout\*\* \| Auto-playing carousel \(3–4 testimonials\) or static 3-card grid \|\n\| \*\*Content Per Card\*\* \| Parent photo \(avatar placeholder if no photo\), Name, Child\'s class, 3–4 sentence quote \|\n\| \*\*Design\*\* \| Quote icon, star rating \(optional\), subtle card background \|\n\| \*\*Implementation\*\* \| Static carousel using CSS/minimal JS \(no heavy library\) \|\n\| \*\*Responsive\*\* \| Mobile: single testimonial visible at a time; swipe gesture \|', reviews_text, text)

# Add Functional Requirements
fr_text = '''| FR-20 | Open Graph meta tags | Must Have | For WhatsApp/Facebook link previews |
| FR-21 | Admission Lead Popup | Must Have | Exit-intent or scroll-triggered popup form for lead generation |
| FR-22 | Mobile Sticky CTA Bar | Must Have | Persistent Call/WhatsApp/Directions bar on mobile |'''
text = text.replace('| FR-20 | Open Graph meta tags | Must Have | For WhatsApp/Facebook link previews |', fr_text)

# Google Search Console details
seo_text = '''| SEO-11 | Google Search Console setup | Verify via HTML meta tag, submit sitemap.xml, monitor indexing and Core Web Vitals |'''
text = re.sub(r'\|\s*SEO-11\s*\|\s*Google Search Console setup\s*\|\s*Verify via HTML meta tag\s*\|', seo_text, text)

with open(r'c:\Users\deven\OneDrive\Desktop\static school website\ps-school\docs\PRD_v1.1.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated PRD successfully written to PRD_v1.1.md')
