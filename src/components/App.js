import video from "../data/video.js";
import Video from "./Video.js";
import Details from "./Details.js";
import React, {useState} from "react";
import CommentsForm from "./CommentsForm.js"

function App() {
  console.log("Here's your data:", video);

  const [isClicked,setIsClicked] = useState(false)

  function handleHideComments() {
    setIsClicked(!isClicked)
    console.log(isClicked)
  }
  const [search, setSearch] = useState("")

  const commentsToShow = video.comments
  .filter((comment) => comment.comment.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
   <Video video = {video}/>
   <Details video = {video} />
   <CommentsForm comments = {commentsToShow} onHideComments={handleHideComments} isClicked={isClicked} search={search} onSearchChange={setSearch} />
   </div>
  );
}

export default App;
