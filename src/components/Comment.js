import React from "react";

function Comment ({user,text}) {
    return (
        <div>
            <p>{user}</p>
            <p>{text}</p>
        </div>
    )
}

export default Comment