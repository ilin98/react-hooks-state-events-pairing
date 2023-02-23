import React from "react";

function Video({ videoUrl, videoTitle, views, createdAt }) {
    return (
    <div>
        <iframe
        width="919"
        height="525"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
        />
        <h1>{videoTitle}</h1>
        <p>{views} views | Uploaded {createdAt}</p>
    </div>
    )
}

export default Video
