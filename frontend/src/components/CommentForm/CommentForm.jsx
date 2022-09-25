import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';



const CommentForm = (props) => {

    const [comment, setComment] = useState('');
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.postComment(comment);
        setComment('');
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Comment:{''}</label>
                    <input type='text' id='Comment' value={comment} onChange={(event) => setComment(event.target.value)}/>
                </div>
                <div>
                    <button type='submit' >Post</button>
                </div>
            </form>
        </div>
     );
}
 
export default CommentForm;