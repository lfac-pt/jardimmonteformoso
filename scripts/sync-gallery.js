import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, '../src/data/gallery.json');
const OUTPUT_DIR = path.join(__dirname, '../public/gallery');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    // If file already exists, skip
    if (fs.existsSync(filepath)) {
      console.log(`Skipping existing: ${path.basename(filepath)}`);
      return resolve();
    }

    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
      }
    };

    https.get(url, options, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
};

async function sync() {
  const posts = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

  console.log(`Starting sync for ${posts.length} posts...`);

  for (const post of posts) {
    if (post.thumbnail_url) {
      const filename = path.basename(post.imagePath);
      const filepath = path.join(OUTPUT_DIR, filename);
      try {
        await downloadImage(post.thumbnail_url, filepath);
        console.log(`Downloaded: ${filename}`);
      } catch (err) {
        console.error(`Failed to download ${post.id}: ${err.message}`);
      }
    }
  }

  console.log('Sync completed!');
}

sync();
