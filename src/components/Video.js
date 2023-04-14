import React from "react";

function Video ({video}) {
    return (
        <div className="App">
        <iframe
          width="919"
          height="525"
          src={video.embedUrl}
          frameBorder="0"
          allowFullScreen
          title={video.title}
        />
      </div>
    )
}

export default Video