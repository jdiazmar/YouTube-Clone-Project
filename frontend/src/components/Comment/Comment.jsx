import React, { useState } from 'react';


const Comment = (props) => {

const [replyText, setReplyText] = useState('');

function handleSubmit(){
    let newReply = {
        'comment_id': props.id,
        'text': replyText
    }
    props.postReply(newReply);
}

let reply = props.text 

    return ( 
        <div>
            <form>
                    <div>
                        <label htmlFor="Reply" className='reply-text'>Reply:{" "}</label>
                        <input onChange={(e) => setReplyText(e.target.value)} type= "text" id = 'Reply' className='reply-input'/>
                    </div>
                    <div>
                        <button type = 'button' onClick={() => {handlesubmit()}} className='reply-post'>Post</button>
                        
                    </div>
                </form>
        </div>
     );
}
 
export default Comment;