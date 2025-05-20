const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'public', 'gallery');

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('❌ Error reading directory:', err);
    return;
  }

  // Filter for image files only
  const images = files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));

  images.forEach((file, index) => {
    const ext = path.extname(file);
    const newName = `img${index + 1}${ext}`;
    const oldPath = path.join(folderPath, file);
    const newPath = path.join(folderPath, newName);

    fs.rename(oldPath, newPath, err => {
      if (err) {
        console.error(`❌ Failed to rename ${file}:`, err);
      } else {
        console.log(`✅ ${file} → ${newName}`);
      }
    });
  });
});
