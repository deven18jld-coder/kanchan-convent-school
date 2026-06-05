const fs=require('fs');
const path=require('path');
const files=['FacilitiesOverview.astro','Hero.astro','PrincipalMessagePreview.astro','LocationMap.astro','GalleryPreview.astro','EventsPreview.astro','AboutPreview.astro'];

files.forEach(f => {
  const p = path.join('src','components','sections',f);
  let c = fs.readFileSync(p, 'utf8');
  c = c.replace(/\{"\{"\}/g, '{').replace(/\{"\}"\}/g, '}');
  fs.writeFileSync(p, c);
});
