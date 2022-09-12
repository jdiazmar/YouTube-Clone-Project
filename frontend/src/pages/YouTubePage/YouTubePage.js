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
import CommentList from '../../components/CommentList/CommentList';




const YouTubePage = () => {

    const [searchResults, setSearchResults] = useState([]);
    const [videoId, setVideoId] = useState('');
    const [allComments, setAllComments] = useState([]);
    const [user, token] = useAuth();

    useEffect(() => {
        getSearchResults();
        getAllComments();
        postComment();
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
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}/`);
        setAllComments(response.data);
        console.log(response.data);
    }

    async function postComment(text){
        let newComment = {
            video_id: videoId,
            text: text,
        }
        let response = await axios.post('http://127.0.0.1:8000/api/comments', newComment, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        setAllComments(response.data)
        getAllComments();
    }

    return ( 
        <div>
            <div> <SearchBar getSearchResults={getSearchResults}/> </div>
            <div>
                <div> <VideoPlayer videoId={videoId}/> </div>
                <div> <CommentForm postComment={postComment} /> </div>
                <div> <CommentList allComments={allComments} /> </div>
            </div>
 
        </div>

     );
}
 
export default YouTubePage;