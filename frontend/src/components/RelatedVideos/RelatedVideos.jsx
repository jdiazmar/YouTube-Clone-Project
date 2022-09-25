import React from 'react';


const RelatedVideos = (props) => {

    return ( 
        <div>
        <div><h3>Related Videos</h3></div>
        {props.relatedVideos.map((element, index) => {
            if (element.snippet){
                return (
                <div key ={index}>
                    <img src= {element.snippet.thumbnails.medium.url} onClick={() => {props.setVideoId(element.id.videoId); props.setDescription(element.snippet.description); props.setTitle(element.snippet.title)}}></img>
                </div>
                )
            }
        })}
    </div>
     );
}
 
export default RelatedVideos;