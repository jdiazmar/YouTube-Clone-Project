import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';


const Comment = (props) => {

    const [replyText, setReplyText] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    

    function handleSubmit(){
        setModalOpen(false)
        let newReply = {
            'comment_id': props.id,
            'text': replyText
        }
        props.postReply(newReply);
    }

    let reply = props.text

    return ( 
        <div>
            <div>
                <div> <button onClick={() => props.postLike()}>Like</button></div>
                <div> <button onClick={() => props.postDislike()}>Dislike</button></div>
            </div>
            <div>
                <button type='button' onClick={() => setModalOpen(true)}>Reply</button>
            </div>
            <Modal modalOpen={modalOpen} onRequestClose={() => setModalOpen(false)} >
                <form>
                    <div>
                        <label htmlFor='Reply' >Reply:{''}</label>
                        <input onChange={(event) => setReplyText(event.target.value)} type='text' id='Reply' />
                    </div>
                    <div>
                        <button type='button' onClick={() => {handleSubmit()}}>Post</button>
                    </div>
                </form>
            </Modal>
            <div>Reply: {reply}</div>
        </div>
     );
}
 
export default Comment;