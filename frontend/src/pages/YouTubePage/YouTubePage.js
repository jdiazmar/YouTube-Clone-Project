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
import CommentForm from '../../components/CommentForm/CommentForm';
// import CommentList from '../../components/CommentList/CommentList';







const YouTubePage = () => {

    const [searchResults, setSearchResults] = useState([]);
    const [videoId, setVideoId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [comment, setComment] = useState('');
    const [allComments, setAllComments] = useState([]);
    const [user, token] = useAuth();
    const [text, setText] = useState('');
 

    useEffect(() => {
        getSearchResults();
        getAllComments();
    }, [])

    useEffect(() =>{
        getAllComments();
    }, [videoId], [addComment])


    async function getSearchResults(searchTerm = 'nba 2k23'){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet`);
        setVideoId(response.data.items[0].id.videoId);
        console.log(response.data.items[0].id.videoId);
        setTitle(response.data.items[0].snippet.title);
        setDescription(response.data.items[0].snippet.description);
        setSearchResults(response.data.items);
    }

    
    async function getAllComments(){
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}/`);
        setAllComments(response.data);
        console.log(response.data);
    }

    async function addComment(newComment){
        const response = await axios.post('http://127.0.0.1:8000/api/comments/', newComment);
        setComment(response.data);
        if(response.status === 201){
            await getAllComments();
        }
    }



    return ( 
        <div>
            <h1>Welcome {user.user}!</h1>
            <div> <SearchBar getSearchResults={getSearchResults}/> </div>
            <div>
                <div> <VideoPlayer videoId={videoId} title={title} description={description}/> </div>
                <div> <Comment addNewCommentProp={addComment} /> </div>
                <div> <CommentForm userComment={text} /> </div>
            </div>
        </div>

     );
}
 
export default YouTubePage;