// General Imports
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { KEY } from '../../localKey';
// Components Imports
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import SearchBar from '../../components/SearchBar/SearchBar';
import CommentForm from '../../components/CommentForm/CommentForm';




const YouTubePage = () => {

    const [searchResults, setSearchResults] = useState([]);
    const [videoId, setVideoId] = useState('');
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        getSearchResults();
    }, [])

    useEffect(() =>{
        getAllComments();
    }, [videoId])

    async function getSearchResults(searchTerm = 'nba 2k23'){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}`);
        setVideoId(response.data.items[0].id.videoId);
        console.log(response.data.items[0].id.videoId);
        setSearchResults(response.data.items);
    }

    async function getAllComments(){
        let response = await axios.get(`http://127.0.0.1:8000/comments/${videoId}/`);
        setAllComments(response.data);
        console.log(response.data);
    }

    return ( 
        <div>
            <SearchBar getSearchResults={getSearchResults}/>
            <VideoPlayer videoId={videoId}/>
            <CommentForm />
        </div>

     );
}
 
export default YouTubePage;