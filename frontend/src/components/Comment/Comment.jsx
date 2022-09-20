import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';


const Comment = ({addNewCommentProp}) => {

const [text, setText] = useState('');
// const [videoId, setVideoId] = useState('');
const [user, token] = useAuth();

function handleSubmit(event){
    event.preventDefault();
    let newComment = {
        text: text
    };
    console.log(newComment);
    addNewCommentProp(newComment);
}

    return ( 
        <div>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Comment:</label>
                    <input type='post' value={text} onChange={(event) => setText(event.target.value)} />
                    <button type ='submit' onClick={() => {handleSubmit()}}>Post</button>
                </div>
            </form>
        </div>
     );
}
 
export default Comment;