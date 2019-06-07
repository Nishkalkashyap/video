import fetch from 'node-fetch';
import { videos } from './videos';
import * as fs from 'fs-extra';
import * as path from 'path';

fetchVideos().catch(console.error);

async function fetchVideos() {
    await Promise.all(videos.map(async (vid) => {
        await Promise.all(vid.videos.map(async (vid) => {
            const filepath = `./temp/${path.basename(vid)}`;

            if (fs.existsSync(filepath)) {
                console.log(`File already exists: ${filepath}`);
                return;
            }

            const result = await fetch(vid);
            const buffer = await result.buffer();

            fs.ensureFileSync(filepath);
            fs.writeFileSync(filepath, buffer);
        }));
    }));
}