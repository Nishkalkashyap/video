import * as mpg from 'fluent-ffmpeg';
import { videos, Video } from './videos';
import * as fs from 'fs-extra';
import * as path from 'path';

const ffmpeg_path = require('@ffmpeg-installer/ffmpeg').path;
const ffprobe_path = require('@ffprobe-installer/ffprobe').path;

root().catch(console.error);

async function root() {
    const promises = videos.map(async (vid) => {
        return await convertVideo(vid);
    });
    await Promise.all(promises);
}

async function convertVideo(vid: Video) {

    return new Promise((resolve) => {

        const command = mpg({
            logger: {
                error: console.error,
                debug: console.log,
                info: console.log,
                warn: console.warn
            }
        });

        command
            .setFfmpegPath(ffmpeg_path)
            .setFfprobePath(ffprobe_path)
            .withOutputFormat('mp4');

        vid.videos.map((val) => {
            const filename = path.basename(val);
            command.addInput(`./temp/${filename}`);
        });

        fs.ensureFileSync(vid.output);

        command
            // .saveToFile(vid.output)
            .mergeToFile(vid.output)
            .on('error', (e) => {
                resolve(true);
                console.log(`Cannot process: ${e}`);
            })
            .on('end', (e) => {
                resolve(true);
            });
    });
}