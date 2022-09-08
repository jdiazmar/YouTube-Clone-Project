import React from 'react';


const RelatedVideos = (props) => {

    return ( 
        <div>
        <div><h3>Related Videos</h3></div>
        {props.relatedVideos.map((element, index) => {
            if (element.snippet){
                return (
                <div key ={index}> 
                    onClick={() => {props.setVideoId(element.id.videoId); props.setDescription(element.snippet.description); props.setTitle(element.snippet.title)}}
                </div>
                )
            }
        })}
    </div>
     );
}
 
export default RelatedVideos;