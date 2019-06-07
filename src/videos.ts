// https://www.pexels.com/videos/
export const videos: Video[] = [
    {
        output: './out.mp4',
        videos: [
            './test-videos/extensible.mp4',
            './test-videos/introduction.mp4',
            './test-videos/settings.mp4',
            './test-videos/terminal.mp4',
        ],
        mp3: ''
    }
]





export interface Video {
    videos: string[];
    mp3: string;
    output: string;
}