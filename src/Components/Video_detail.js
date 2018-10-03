import React from "react";


const VideoDetail= ({video})=> {
    const videoId = video.id.videoId;
    // embedding video from youtube.. as long as you  have a video id it will embed any video creating an iframe pointing to this url and will show a youtube player in the app
    const url = `https://www.youtube.com/embed/ ${videoId}`;
return(
    <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16y9">
            <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>

    </div>


)
}






export default VideoDetail;