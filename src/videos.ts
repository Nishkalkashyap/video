// https://www.pexels.com/videos/
// https://pixabay.com/videos/
export const videos: Video[] = [
    {
        output: './out/out.mp4',
        videos: [
            'https://pixabay.com/videos/download/video-24105_small.mp4',
            'https://pixabay.com/videos/download/video-21116_medium.mp4',
            'https://pixabay.com/videos/download/video-15614_small.mp4',
            'https://pixabay.com/videos/download/video-23232_small.mp4',
            'https://pixabay.com/videos/download/video-22908_medium.mp4',
            'https://pixabay.com/videos/download/video-6847_large.mp4',
            'https://pixabay.com/videos/download/video-16459_large.mp4',
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
    },
    // {
    //     output: './out/creativeminds.mp4',
    //     videos: [
    //         'https://pixabay.com/videos/download/video-6516_large.mp4',
    //         'https://pixabay.com/videos/download/video-7826_source.mp4',
    //         'https://pixabay.com/videos/download/video-21147_source.mp4',
    //         'https://pixabay.com/videos/download/video-3681_source.mp4',
    //         'https://pixabay.com/videos/download/video-6515_large.mp4',
    //         'https://pixabay.com/videos/download/video-22601_source.mp4',
    //     ],
    //     mp3: './mp3/bensound-creativeminds.mp3'
    // },
    {
        output: './out/creativeminds.mp4',
        videos: [
            'https://pixabay.com/videos/download/video-4000_large.mp4',//16
            'https://pixabay.com/videos/download/video-891_medium.mp4',//15
            'https://pixabay.com/videos/download/video-896_medium.mp4',//24
            'https://pixabay.com/videos/download/video-1367_large.mp4',//8
            'https://pixabay.com/videos/download/video-12904_large.mp4',//10
            'https://pixabay.com/videos/download/video-12911_large.mp4',//10
            'https://pixabay.com/videos/download/video-13067_large.mp4',//20
        ],
        mp3: './mp3/bensound-jazzyfrenchy.mp3'
    }
]





export interface Video {
    videos: string[];
    mp3: string;
    output: string;
}