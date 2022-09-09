// General Imports
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { KEY } from '../../localKey';
// Components Imports
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import SearchBar from '../../components/SearchBar/SearchBar';
import Comment from '../../components/Comment/Comment';




const YouTubePage = () => {

    const [searchResults, setSearchResults] = useState([]);
    const [videoId, setVideoId] = useState('');

    useEffect(() => {
        getSearchResults();
    })

    async function getSearchResults(searchTerm = 'SAM THE COOKING GUY'){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${searchTerm}&type=video&key=${KEY}`);
        setVideoId(response.data.items[0].id.videoId);
        console.log(response.data.items[0].id.videoId);
        setSearchResults(response.data.items);
    }

    return ( 
        <div>
            <SearchBar getSearchResults={getSearchResults}/>
            <VideoPlayer videoId={videoId}/>
            <Comment />
        </div>

     );
}
 
export default YouTubePage;