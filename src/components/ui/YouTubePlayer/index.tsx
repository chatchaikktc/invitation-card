import YouTube from 'react-youtube';

import './styles.css';

interface YoutubeProps {
    videoId: string;
    title? : string;
    height?: string;
    width?: string;
    autoplay?: number;
    controls?: number;
}

export default function YouTubePlayer({ videoId,title,height,width,autoplay,controls}: YoutubeProps) {
    
    const heightValue = height ? height : '400px';
    const widthValue = width ? width : '100%';
    const autoplayValue = autoplay ? autoplay : 0;
    const controlsValue = controls ? controls : 1;

    const options = {
        height: heightValue,
        width: widthValue,
        playerVars: {
            autoplay: autoplayValue,
            controls: controlsValue,
        }
        
    }

    return (
        <YouTube videoId={videoId} title={title} opts={options} className="youtubeiframe"/>
    );
}
