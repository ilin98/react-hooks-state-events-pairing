import React, {useState} from "react";

function Comments({ commentLength, comments }) {

    const [showComments, setShowComments] = useState(true)

    const displayedComments = comments.map(comment => {
        return (
            <div>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
            </div>
        )
    })

    function handleComment() {
        setShowComments(!showComments)
    }
    return(
        showComments ?
        <div>
            <button onClick={handleComment}>Hide Comments</button>
            <h2>{commentLength} Comments</h2>
            {displayedComments}
        </div> :
        <button onClick={handleComment}>Show Comments</button>
    )
}

export default Comments;
