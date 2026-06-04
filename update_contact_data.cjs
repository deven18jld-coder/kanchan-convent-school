const fs = require('fs');
const path = require('path');

const sitePath = path.join(__dirname, 'src/data/site.json');
const schemaPath = path.join(__dirname, 'src/data/schema.json');

// Read files
let siteData = JSON.parse(fs.readFileSync(sitePath, 'utf8'));
let schemaData = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

// Verified Information
const phone = "+91 9670798697";
const email = "kanchanconvent.ksg@gmail.com";
const address = "Opposite C.H.C Hospital, Kaisarganj, Ainy Hatinsi, Uttar Pradesh 271903";
const officeHours = "Mon-Sat: 9:00 AM – 3:00 PM, Sun: Closed";
const facebookUrl = "https://www.facebook.com/profile.php?id=100054443547019";
const youtubeUrl = "https://www.youtube.com/channel/UCI3ArFrrxA58eFCONwIJiDg";
const mapsLink = "https://maps.app.goo.gl/KGcjtwbRZRNM5J51A";

// Update site.json contact info
siteData.contact.address = address;
siteData.contact.phoneMain = "+91-9670798697";
siteData.contact.phoneMainDisplay = phone;
siteData.contact.email = email;
siteData.contact.officeHours = officeHours;
siteData.contact.mapsLink = mapsLink;
siteData.contact.whatsappNumber = "919670798697";
siteData.contact.whatsappDisplay = "+91 9670798697";

// Update site.json social
siteData.social.facebook = facebookUrl;
siteData.social.youtube = youtubeUrl;
siteData.social.instagram = null;

// Update map embed URL
siteData.home.locationMap.mapEmbed = `https://maps.google.com/maps?q=Kanchan+Convent+School,+Kaisarganj&t=&z=15&ie=UTF8&iwloc=&output=embed`;

// Update schema.json
schemaData.address.streetAddress = "Opposite C.H.C Hospital, Ainy Hatinsi";
schemaData.address.addressLocality = "Kaisarganj";
schemaData.address.addressRegion = "Uttar Pradesh";
schemaData.address.postalCode = "271903";
schemaData.contactPoint.telephone = "+91-9670798697";
schemaData.contactPoint.email = email;
schemaData.sameAs = [
  facebookUrl,
  youtubeUrl
];

// Write files back
fs.writeFileSync(sitePath, JSON.stringify(siteData, null, 2));
fs.writeFileSync(schemaPath, JSON.stringify(schemaData, null, 2));

console.log("Updated data files successfully.");
