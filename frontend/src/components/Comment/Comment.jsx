import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';


const Comment = (props) => {

const [text, setText] = useState('');
// const [videoId, setVideoId] = useState('');
const [user, token] = useAuth();

function handleSubmit(event){
    event.preventDefault();
    let newComment = {
        text: text
    };
    console.log(newComment);
    props.postReply(newComment);
}

    return ( 
        <div>
            <form onSubmit={handleSubmit} >
                    <div>
                        <label>{user.user}</label>
                    <div>
                        <label>Comment:</label>
                        <input type='post' value={text} onChange={(event) => setText(event.target.value)} />
                    </div>
                    <div>
                        <button type ='submit' onClick={() => {handleSubmit()}}>Post</button>
                    </div>
                    </div>
            </form>
        </div>
     );
}
 
export default Comment;