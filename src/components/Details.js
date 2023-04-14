import React, {useState}    from "react";

function Details ({video}) {
    let [upvotes,setUpvotes] = useState(video.upvotes)
    let [downvotes,setDownvotes] = useState(video.downvotes)

    function handleUpClick () {
        setUpvotes(++upvotes)
    }

    function handleDownClick() {
        setDownvotes(++downvotes)
    }
    return (
        <div>
           <h1>{video.title}</h1>
            <p>{video.views} | Uploaded: {video.createdAt}</p>
            <p>
                <button
                    className="upvote"
                    onClick={handleUpClick}
                >
                    {upvotes} 👍
                </button>
                <button
                    className="downvote"
                    onClick={handleDownClick}
                >
                    {downvotes} 👎
                </button>
            </p>
        </div>
    )
}

export default Details