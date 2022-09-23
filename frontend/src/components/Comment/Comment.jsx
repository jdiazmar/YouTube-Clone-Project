import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';


const Comment = (props) => {

const [text, setText] = useState('');
const [likes, setLikes] = useState(0);
const [dislikes, setDislikes] = useState(0);
const [newComment, setNewComment] = useState({});
const [user, token] = useAuth();

function handleSubmit(event){
    event.preventDefault();
    let newComment = {
        user: user.user,
        text: text,
        likes: likes,
        dislikes: dislikes,
    };
    console.log(newComment);
    addComment(newComment);
    setNewComment(newComment);
}

    async function addComment(newComment){
        const response = await axios.post(`http://127.0.0.1:8000/api/comments/${user.user_id}`, newComment, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        setNewComment(response.data);
        if(response.status === 201){
            await props.getAllComments();
        }
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Comment:</label>
                    <input type='text' value={text} onChange={(event) => setText(event.target.value)} />
                    <button type ='submit' onClick={() => {handleSubmit()}}>Post</button>
                </div>
            </form>
        </div>
     );
}
 
export default Comment;