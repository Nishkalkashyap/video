// https://www.pexels.com/videos/
// https://pixabay.com/videos/
export const videos: Video[] = [
    {
        output: './out/out.mp4',
        videos: [
            'https://pixabay.com/videos/download/video-24105_small.mp4',
            'https://pixabay.com/videos/download/video-21116_medium.mp4',
            // './test-videos/settings.mp4',
            // './test-videos/terminal.mp4',
        ],
        // credits: [
        //     "Music: https://www.bensound.com"
        // ],
        // videos: [
        //     './test-videos/extensible.mp4',
        //     './test-videos/introduction.mp4',
        //     './test-videos/settings.mp4',
        //     './test-videos/terminal.mp4',
        // ],
        mp3: './mp3/bensound-betterdays.mp3'
    }
]





export interface Video {
    videos: string[];
    mp3: string;
    output: string;
}