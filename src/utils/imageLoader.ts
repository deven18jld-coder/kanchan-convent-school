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

export function getHeroImages(fallbackUrl: string): string[] {
  try {
    const folderPath = path.join(process.cwd(), 'public/images/hero');
    const files = getSafeDir(folderPath);
    const images = files
      .filter(file => /\.(webp|jpg|jpeg|png)$/i.test(file))
      .sort()
      .map(file => `/images/hero/${file}`);
    
    if (images.length > 0) {
      return images;
    }
  } catch (e) {
    // fallback
  }
  return [fallbackUrl];
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
    console.log('\\n[DEBUG AboutPreview Loader] Scanning folder path:', folderPath);
    
    if (!fs.existsSync(folderPath)) {
      console.warn('[DEBUG AboutPreview Loader] EXACT REASON: Folder does not exist at ' + folderPath + '. Falling back to:', fallbackUrl);
      return fallbackUrl;
    }
    
    const files = getSafeDir(folderPath);
    console.log('[DEBUG AboutPreview Loader] Files found in folder:', files);
    
    // Look for first image with supported extension
    const match = files.find(file => /\.(webp|jpg|jpeg|png)$/i.test(file));
    if (match) {
      const resolved = `/images/about-preview/${match}`;
      console.log('[DEBUG AboutPreview Loader] MATCH FOUND. Resolving to URL:', resolved);
      return resolved;
    } else {
      console.warn('[DEBUG AboutPreview Loader] EXACT REASON: Folder exists, but no supported image files (.webp, .jpg, .jpeg, .png) found. Files were:', files, 'Falling back to:', fallbackUrl);
    }
  } catch (e) {
    console.error('[DEBUG AboutPreview Loader] EXACT REASON: Exception during execution:', e);
  }
  return fallbackUrl;
}

export function getOgImage(fallbackUrl: string): string {
  try {
    const jpgPath = path.join(process.cwd(), 'public/images/og-image.jpg');
    if (fs.existsSync(jpgPath)) {
      return '/images/og-image.jpg';
    }
    
    const webpPath = path.join(process.cwd(), 'public/images/og-image.webp');
    if (fs.existsSync(webpPath)) {
      return '/images/og-image.webp';
    }
  } catch (e) {
    // fallback
  }
  return getHeroImage(fallbackUrl);
}

