import React, { useState } from 'react';


const Comment = (props) => {

const [user, setUser] = useState('');
const [text, setText] = useState('');

function handleSubmit(event){
    event.preventDefault();
    let newComment = {
        user: user,
        comment: text
    };
    console.log(newComment);
    props.postReply(newComment);
}

    return ( 
        <div>
            <form>
                    <div>
                        <label>User:</label>
                        <input type='text' value={user} onChange={(event) => setUser(event.target.value)}/>
                    </div>
                    <div>
                        <label>Comment:</label>
                        <input type='post' value={text} onChange={(event) => setText(event.target.value)} />
                    </div>
                    <div>
                        <button type ='submit' onClick={() => {handleSubmit()}}>Post</button>
                        
                    </div>
                </form>
        </div>
     );
}
 
export default Comment;