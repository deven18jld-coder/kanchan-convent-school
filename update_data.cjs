const fs = require('fs');
const path = require('path');

const sitePath = path.join(__dirname, 'src/data/site.json');
const schemaPath = path.join(__dirname, 'src/data/schema.json');
const seoPath = path.join(__dirname, 'src/data/seo.json');

// Read files
let siteData = JSON.parse(fs.readFileSync(sitePath, 'utf8'));
let schemaData = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
let seoData = JSON.parse(fs.readFileSync(seoPath, 'utf8'));

// 1. Update site.json
const schoolName = "Kanchan Convent School, Kaisarganj";
const shortName = "Kanchan Convent";
const tagline = "Our Motive is to make every student educated, skillful and disciplined so that they can contribute to the nation.";
const establishedYear = 1993;
const schoolCode = "09500203014";
const phone = "+91 9670798697";
const phoneMain = "+91-9670798697";
const email = "kanchanconvent.ksg@gmail.com";

siteData.school.name = schoolName;
siteData.school.shortName = shortName;
siteData.school.tagline = tagline;
siteData.school.affiliationNo = schoolCode;
siteData.school.establishedYear = establishedYear;
siteData.school.logoText = shortName;

siteData.contact.address = "Kaisarganj, [Complete Address TBD]";
siteData.contact.phoneMain = phoneMain;
siteData.contact.phoneMainDisplay = phone;
siteData.contact.phoneAdmissions = "[Admissions Phone TBD]";
siteData.contact.email = email;
siteData.contact.whatsappNumber = "919670798697";
siteData.contact.whatsappDisplay = "WhatsApp Us";
siteData.contact.mapsLink = "[Google Maps Link TBD]";
siteData.contact.officeHours = "[Office Hours TBD]";

siteData.social.facebook = "[Facebook URL TBD]";
siteData.social.youtube = "[YouTube URL TBD]";
siteData.social.instagram = "[Instagram URL TBD]";

// home section
siteData.home.hero.headline = schoolName;
siteData.home.hero.subheadline = tagline;
siteData.home.admissionsBanner.formAction = "[Form Action URL TBD]";

siteData.home.aboutPreview.title = `Welcome to ${schoolName}`;
siteData.home.aboutPreview.content = `Established in ${establishedYear}, ${schoolName} is a Private Unaided Convent school offering education from Primary to Secondary levels. ${tagline} We are affiliated with the CBSE board.`;
siteData.home.aboutPreview.bullets = [
  "Student Teacher Ratio: 29:1",
  "Co-Educational English Medium",
  "5 Classrooms"
];

siteData.home.principalPreview.name = "[Principal Name TBD]";

siteData.home.googleReviews.cta.href = "[Google Reviews Link TBD]";
siteData.home.tourVideo.videoUrl = "[Tour Video URL TBD]";

// pages section
siteData.pages.about.history = `Established in ${establishedYear}, ${schoolName} began with a vision to provide quality education... [Full History TBD]`;
siteData.pages.about.principalMessage.name = "[Principal Name TBD]";
siteData.pages.about.principalMessage.content = `Welcome to ${shortName}. Education is a shared commitment between dedicated teachers, motivated students, and enthusiastic parents... [Principal Message TBD]`;

siteData.pages.academics.content = `${shortName} follows the CBSE curriculum, designed to provide holistic education that prepares students for the challenges of tomorrow.`;

siteData.pages.admissions.formAction = "[Form Action URL TBD]";
siteData.pages.contact.formAction = "[Form Action URL TBD]";

siteData.pages.gallery.content = `Explore life at ${shortName}.`;


// 2. Update schema.json
schemaData.name = schoolName;
schemaData.url = "[Website URL TBD]";
schemaData.logo = "[Logo URL TBD]";
schemaData.description = `${tagline} CBSE Affiliated.`;
schemaData.foundingDate = establishedYear.toString();
schemaData.address.streetAddress = "[Street Address TBD]";
schemaData.address.addressLocality = "Kaisarganj";
schemaData.address.addressRegion = "[State TBD]";
schemaData.address.postalCode = "[PIN Code TBD]";
schemaData.contactPoint.telephone = phoneMain;
schemaData.contactPoint.email = email;
schemaData.sameAs = [
  "[Facebook URL TBD]",
  "[Instagram URL TBD]",
  "[YouTube URL TBD]"
];

// 3. Update seo.json
for (let key in seoData) {
  if (seoData[key].title) {
    seoData[key].title = seoData[key].title.replace(/SchoolName/g, shortName);
  }
  if (seoData[key].description) {
    seoData[key].description = seoData[key].description.replace(/SchoolName/g, shortName).replace("1998", establishedYear.toString());
  }
}

// Write files back
fs.writeFileSync(sitePath, JSON.stringify(siteData, null, 2));
fs.writeFileSync(schemaPath, JSON.stringify(schemaData, null, 2));
fs.writeFileSync(seoPath, JSON.stringify(seoData, null, 2));

console.log("Updated data files successfully.");
