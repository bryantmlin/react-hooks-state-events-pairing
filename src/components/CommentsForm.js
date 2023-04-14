import React from "react";
import Comment from "./Comment.js"

function CommentsForm ({comments, onHideComments, isClicked, onSearchChange, search}) {

    const commentList = comments.map((comment) => (
        <Comment 
            key = {comment.id}
            user = {comment.user}
            text = {comment.comment}
        />
    ))
    
    function handleSearchChange (e) {
        onSearchChange(e.target.value)
    }
    return (
        <div>
            <button
                onClick = {onHideComments}
            >
                {isClicked ? "Show" : "Hide" } Comments
            </button>
            <div>
            <input
                type='text'
                name='search'
                placeholder="search..."
                value={search}
                onChange={handleSearchChange} 
            />
            </div>
            
            {!isClicked ? 

            (<div>
                {commentList}
            </div>)
            : 
            null}

        </div>
    )
}

export default CommentsForm