import axios from 'axios';
import { promises as fs } from 'fs';
import { dirname } from 'path';
import { mkdir } from 'fs/promises';

// List of image URLs and filenames
const images = [
    ["https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg", "artwork-1.jpg"],
    ["https://images.metmuseum.org/CRDImages/ep/original/DT1994.jpg", "artwork-2.jpg"],
    ["https://images.metmuseum.org/CRDImages/ep/original/DT2008.jpg", "artwork-3.jpg"],
    ["https://images.metmuseum.org/CRDImages/ep/original/DT2034.jpg", "artwork-4.jpg"],
    ["https://images.metmuseum.org/CRDImages/ep/original/DT1465.jpg", "artwork-5.jpg"],
    ["https://images.metmuseum.org/CRDImages/ep/original/DT2082.jpg", "artwork-6.jpg"],
    ["https://images.metmuseum.org/CRDImages/ep/original/DT1491.jpg", "artwork-7.jpg"],
    ["https://images.metmuseum.org/CRDImages/rl/original/DT2713.jpg", "artwork-8.jpg"],
    ["https://images.metmuseum.org/CRDImages/ap/original/DT146.jpg", "artwork-9.jpg"],
];

// Create the images directory if it doesn't exist
const dir = 'images/';
await mkdir(dir, { recursive: true });

// Download each image
for (const [url, filename] of images) {
    console.log(`Downloading ${filename}...`);
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    await fs.writeFile(`${dir}/${filename}`, response.data);
    console.log(`Saved ${filename}`);
}