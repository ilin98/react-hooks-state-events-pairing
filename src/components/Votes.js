import React from "react";

function Votes({ upvotes, downvotes, onUpvoteClick, onDownvoteClick}) {
    return (
        <div>
            <button onClick={onUpvoteClick}>{upvotes} 👍</button>
            <button onClick={onDownvoteClick}>{downvotes} 👎</button>
        </div>
    )
}

export default Votes;
