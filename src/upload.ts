import { Storage } from '@google-cloud/storage';
import * as fs from 'fs-extra';
import * as path from 'path';

process.env.GOOGLE_APPLICATION_CREDENTIALS = './cloud-storage-key.json';
const bucketName = 'quarkjs-travis';
const storage = new Storage({
    projectId: 'diy-mechatronics'
});

fs.readdirSync('./out').map(async (name) => {
    const exists = await storage.bucket(bucketName).file(name).exists();
    if (!exists) {
        await storage.bucket(bucketName).upload(name);
    }
});


