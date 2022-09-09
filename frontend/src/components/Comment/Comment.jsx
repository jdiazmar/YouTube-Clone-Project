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
                        <label>Reply:{reply}</label>
                        <input onChange={(e) => setReplyText(e.target.value)} type='text' id ='reply'/>
                    </div>
                    <div>
                        <button type ='button' onClick={() => {handleSubmit()}}>Post</button>
                        
                    </div>
                </form>
        </div>
     );
}
 
export default Comment;