import React from "react";
import VideoListItem from "./video_list_item";


const VideoList =(props) => {
//   {/* loop over array and generate one instance of video list item */}
   const videoItems = props.videos.map((video) => {
    //    making each video have the same key (etag)
        return(

         <VideoListItem 
        //  passing prop down to video list item
         onVideoSelect = {props.onVideoSelect}
         key= {video.etag} 
         video ={video} />

        ) 
    })
    return(
        <ul className="col-md-4 list-group">
        {videoItems}
        </ul>
    )
}


export default VideoList;




