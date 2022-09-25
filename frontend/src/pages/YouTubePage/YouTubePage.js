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
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
//CSS Imports
import './YouTubePage.css';







const YouTubePage = () => {

    const [searchResults, setSearchResults] = useState([]);
    const [videoId, setVideoId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [comment, setComment] = useState('');
    const [allComments, setAllComments] = useState([]);
    const [user, token] = useAuth();
    const [text, setText] = useState('');
    const [relatedVideos, setRelatedVideos] = useState([]);
 

    useEffect(() => {
        getSearchResults();
        getAllComments();
        postComment();
    }, [])

    useEffect(() =>{
        getAllComments();
        getRelatedVideos();
    }, [videoId])


    async function getSearchResults(searchTerm = 'nba 2k23'){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet`);
        setVideoId(response.data.items[0].id.videoId);
        console.log(response.data.items[0].id.videoId);
        setTitle(response.data.items[0].snippet.title);
        setDescription(response.data.items[0].snippet.description);
        setSearchResults(response.data.items);
    }

    async function getRelatedVideos(){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&relatedToVideoId=${videoId}&key=${KEY}`)
        setRelatedVideos(response.data.items);
        console.log(response.data.items);
    }
    
    async function getAllComments(){
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}`);
        setAllComments(response.data);
        console.log(response.data);
    }

    async function postComment(text){
        let newComment = {
            video_id: videoId,
            text: text,
        }
        let response = await axios.post('http://127.0.0.1:8000/api/comments/', newComment, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        setComment(response.data);
        getAllComments();
    }




    return ( 
        <div className='homepage-contain'>
            <h1>Welcome {user.user}!</h1>
            <div> <SearchBar getSearchResults={getSearchResults}/> </div>
            <div className='home-flex-contain' >
                <div className='home-video-player' > <VideoPlayer videoId={videoId} title={title} description={description}/> </div>
                <div className='home-comment-form'> <CommentForm postComment={postComment} /> </div>
                <div> <CommentList allComments={allComments}  />  </div>
            </div>
            <div className='home-related' >
                <RelatedVideos relatedVideos={relatedVideos} setVideoId={setVideoId} setTitle={setTitle} setDescription={setDescription} /> 
            </div>
        </div>

     );
}
 
export default YouTubePage;