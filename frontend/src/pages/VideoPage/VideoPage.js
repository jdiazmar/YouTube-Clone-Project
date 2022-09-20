// Generic Imports
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { KEY } from '../../localKey';
import useAuth from '../../hooks/useAuth';
// Component Imports
import SearchBar from '../../components/SearchBar/SearchBar';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Comment from '../../components/Comment/Comment';
import CommentForm from '../../components/CommentForm/CommentForm';


const VideoPage = (props) => {

    const [searchResults, setSearchResults] = useState('');
    const [videoId, setVideoId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [comment, setComments] = useState('');
    const [user, token] = useAuth();
    // const [comments, setComments] = useState([{user: 'j20diaz', comment: 'Wow!' }])


    useEffect(() => {
        getSearchResults();
        getAllComments();
    }, [])



    async function getSearchResults(searchTerm='nba 2k23'){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet`);
        console.log(response.data.items);
        setVideoId(response.data.items[0].id.videoId);
        setTitle(response.data.items[0].snippet.title);
        setDescription(response.data.items[0].snippet.description);
        setSearchResults(response.data.items);
        
    }

    async function getAllComments(){
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}`);
        getAllComments(response.data);
        console.log(response.data);
        setComments(response.data);
    }


    return ( 
        <div>
            <div> 
                <Link to='/register'> <button>Register Here!</button></Link> 
            </div>
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