import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import Comments from "./Comments.js"
import Votes from "./Votes.js";

function App() {
  console.log("Here's your data:", video);

  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)

  function handleUpvoteClick(){
    setUpvotes(upvotes + 1)
  }

  function handleDownvoteClick(){
    setDownvotes(downvotes - 1)
  }

  return (
    <div className="App">
      <Video videoUrl={video.embedUrl} videoTitle={video.title}
      views={video.views} createdAt={video.createdAt}/>
      <Votes upvotes={upvotes} downvotes={downvotes}
      onUpvoteClick={handleUpvoteClick} onDownvoteClick={handleDownvoteClick}/>
      <br/>
      <Comments commentLength={video.comments.length} comments={video.comments}/>
    </div>
  )
}

export default App;
