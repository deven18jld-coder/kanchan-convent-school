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

// Format: { id, title, url, category, alt }
export function getHybridGalleryImages(galleryJsonData: any[]): any[] {
  try {
    const folderPath = path.join(process.cwd(), 'public/images/gallery');
    const files = getSafeDir(folderPath).filter(file => /\.(webp|jpg|jpeg|png)$/i.test(file));
    
    const finalGallery = [];
    const processedFiles = new Set();
    
    // First, process everything in JSON
    for (const item of galleryJsonData) {
      // Look for matching file in folder by ID
      const fileMatch = files.find(f => f.startsWith(item.id + '.'));
      
      if (fileMatch) {
        finalGallery.push({
          ...item,
          url: `/images/gallery/${fileMatch}`
        });
        processedFiles.add(fileMatch);
      } else {
        // Fallback to json url if file doesn't exist in folder
        finalGallery.push(item);
      }
    }
    
    // Second, add any images found in folder that weren't in JSON
    for (const file of files) {
      if (!processedFiles.has(file)) {
        // Generate fallback metadata
        // e.g. "sports-day.webp" -> "Sports Day"
        const nameWithoutExt = file.substring(0, file.lastIndexOf('.'));
        const formattedName = nameWithoutExt.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        
        finalGallery.push({
          id: nameWithoutExt,
          title: formattedName,
          url: `/images/gallery/${file}`,
          category: 'Other',
          alt: formattedName
        });
      }
    }
    
    return finalGallery;
  } catch (e) {
    // Completely fail-safe fallback to JSON data only
    return galleryJsonData;
  }
}
