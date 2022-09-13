// Generic Imports
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { KEY } from '../../localKey';
// Component Imports
import SearchBar from '../../components/SearchBar/SearchBar';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const VideoPage = (props) => {

    const [searchResults, setSearchResults] = useState('');
    const [videoId, setVideoId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        getSearchResults();
    }, [])

    async function getSearchResults(searchTerm='nba 2k23'){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}`);
        setVideoId(response.data.items[0].id.videoId);
        setTitle(response.data.items[0].snippet.title);
        setDescription(response.data.items[0].snippet.description);
        setSearchResults(response.data.items);
        console.log(response.data.items);
    }

    return ( 
        <div>
            <div> <Link to='/register'> <button>Register Here!</button></Link> </div>
            <div> <SearchBar getSearchResults={getSearchResults} /> </div>
            <div>
                <div>
                    <VideoPlayer videoId={videoId} title={title} description={description}  />
                </div>
            </div>
            <div>
                <Link to='/login'><button>Login Here</button></Link>
            </div>
        </div>
     );

}
    



 
export default VideoPage;