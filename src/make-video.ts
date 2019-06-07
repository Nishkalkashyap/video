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
            .setFfprobePath(ffprobe_path);

        vid.videos.map((val) => {
            const filename = path.basename(val);
            command.addInput(`./temp/${filename}`);
        });

        fs.ensureFileSync(getTempPath(vid.output));

        command
            .mergeToFile(getTempPath(vid.output))
            .withOutputFormat('mp4')
            .on('error', (e) => {
                resolve(true);
                console.log(`Cannot process: ${e}`);
            })
            .on('end', (e) => {
                addAudio(vid).then(() => {
                    resolve(true);
                }).catch(console.error);
            });
    });

}

function getTempPath(str: string) {
    return path.dirname(str) + '/temp-' + path.basename(str)
}
async function addAudio(vid: Video) {
    const duration = Math.floor(await getMp3Meta(vid));

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
            .setFfprobePath(ffprobe_path);

        fs.ensureFileSync((vid.output));

        console.log(`-vf "fade=t=out:st=${duration - 6}:d=6"`);

        command
            .addInput(vid.mp3)
            // .withAudioFilter([
            //     `-af 'afade=t=out:ss=${duration.format.duration -2}:d=2'`
            // ])
            .addInput(getTempPath(vid.output))
            .duration(duration)
            .withOutputFormat('mp4')
            // .withOutputOption([
            //     `-vf "fade=t=out:st=${duration - 2}:d=2"`
            // ])
            .saveToFile(vid.output)
            .on('error', (e) => {
                resolve(true);
                console.log(`Cannot process: ${e}`);
            })
            .on('end', (e) => {
                resolve(true);
            });
    });
}

async function getMp3Meta(vid: Video): Promise<number> {
    return new Promise((resolve) => {
        // mpg.ffprobe(vid.mp3, (err, metadata) => {
        mpg.ffprobe(getTempPath(vid.output), (err, metadata) => {
            console.log(metadata.format.duration);
            resolve(metadata.format.duration);
        });
    });
}
