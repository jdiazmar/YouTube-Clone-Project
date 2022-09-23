import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';



const CommentForm = (props) => {

    const [comment, setComments] = useState('');
    const [user, token] = useAuth();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let comments = {
            comment: comment
        }
        console.log(comments)
    }

    async function postComment(){
        let response = await axios.post('http://127.0.0.1:8000/api/comments/')
        console.log(response);
    }
    return ( 
        <form>
            <label>Comments</label>
            <div>
                <tr>
                    {user.user_id}
                    {postComment}
                </tr>
            </div>
        </form>
     );
}
 
export default CommentForm;