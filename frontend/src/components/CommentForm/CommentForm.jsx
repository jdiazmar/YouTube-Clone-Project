import React, { useState } from 'react';


const CommentForm = (props) => {

const [comment, setComment] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    props.postComment(comment);
    setComment('');
}



    return ( 
 
     );
}
 
export default CommentForm;