import fs from 'node:fs';
import path from 'node:path';

// Helper to safely get directory contents
function getSafeDir(folderPath: string): string[] {
  try {
    if (fs.existsSync(folderPath)) {
      return fs.readdirSync(folderPath);
    }
  } catch (e) {
    // ignore
  }
  return [];
}

export function getHeroImage(fallbackUrl: string): string {
  try {
    const heroPath = path.join(process.cwd(), 'public/images/hero/hero-main.webp');
    if (fs.existsSync(heroPath)) {
      return '/images/hero/hero-main.webp';
    }
  } catch (e) {
    // fallback
  }
  return fallbackUrl;
}

export function getPrincipalImage(fallbackUrl: string): string {
  try {
    const principalPath = path.join(process.cwd(), 'public/images/principal/principal.webp');
    if (fs.existsSync(principalPath)) {
      return '/images/principal/principal.webp';
    }
  } catch (e) {
    // fallback
  }
  return fallbackUrl;
}

export function getMatchedImage(folder: string, id: string, fallbackUrl: string): string {
  try {
    const folderPath = path.join(process.cwd(), `public/images/${folder}`);
    const files = getSafeDir(folderPath);
    
    // Look for exact match or starting with ID (e.g. event-001.webp)
    const match = files.find(file => file.startsWith(id + '.') || file === id);
    if (match) {
      return `/images/${folder}/${match}`;
    }
  } catch (e) {
    // fallback
  }
  return fallbackUrl;
}

export function getHybridGalleryImages(galleryJsonData: any[]): any[] {
  try {
    const siteDataPath = path.join(process.cwd(), 'src/data/site.json');
    let schoolName = "Kanchan Convent School, Kaisarganj";
    if (fs.existsSync(siteDataPath)) {
      try {
        const siteJson = JSON.parse(fs.readFileSync(siteDataPath, 'utf-8'));
        if (siteJson?.school?.name) schoolName = siteJson.school.name;
      } catch(e) {}
    }

    const folderPath = path.join(process.cwd(), 'public/images/gallery');
    let entries: string[] = [];
    if (fs.existsSync(folderPath)) {
      entries = fs.readdirSync(folderPath);
    }
    
    const finalGallery = [];

    for (const entry of entries) {
      const fullPath = path.join(folderPath, entry);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        const subCategory = entry.charAt(0).toUpperCase() + entry.slice(1);
        const subFiles = fs.readdirSync(fullPath);
        for (const subFile of subFiles) {
          if (/\.(webp|jpg|jpeg|png)$/i.test(subFile)) {
            finalGallery.push({
              url: `/images/gallery/${entry}/${subFile}`,
              category: subCategory,
              alt: `${subCategory} - ${schoolName}`
            });
          }
        }
      } else if (/\.(webp|jpg|jpeg|png)$/i.test(entry)) {
        finalGallery.push({
          url: `/images/gallery/${entry}`,
          category: 'Gallery',
          alt: `Gallery - ${schoolName}`
        });
      }
    }

    return finalGallery.length > 0 ? finalGallery : galleryJsonData;
  } catch (e) {
    return galleryJsonData;
  }
}

export function getAboutPreviewImage(fallbackUrl: string): string {
  try {
    const folderPath = path.join(process.cwd(), 'public/images/about-preview');
    const files = getSafeDir(folderPath);
    
    // Look for first image with supported extension
    const match = files.find(file => /\\.(webp|jpg|jpeg|png)$/i.test(file));
    if (match) {
      return `/images/about-preview/${match}`;
    }
  } catch (e) {
    // fallback
  }
  return fallbackUrl;
}

export function getOgImage(fallbackUrl: string): string {
  try {
    const ogPath = path.join(process.cwd(), 'public/images/og-image.webp');
    if (fs.existsSync(ogPath)) {
      return '/images/og-image.webp';
    }
  } catch (e) {
    // fallback
  }
  return getHeroImage(fallbackUrl);
}
