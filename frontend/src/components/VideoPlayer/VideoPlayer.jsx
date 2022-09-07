import React from 'react';


const VideoPlayer = (props) => {

let jssrc = `https://www.youtube.com/embed/${props.videoId}`

    return ( 
        <div>
            <h3>Current Video</h3>
            <iframe id='ytplayer' type='text/html' width='500' height='360'
            src={jssrc}
            frameborder='0'
            ></iframe>
            <div>Title: {props.title}</div>
            <div>Description: {props.description}</div>
        </div>
     );
}
 
export default VideoPlayer;