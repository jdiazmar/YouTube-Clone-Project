import React from 'react';
import Comment from "../Comment/Comment";

const CommentList = (props) => {
    return ( 
        <div>
        {props.allComments.map((comment, index) => { 
        return (
            <div key = {index}>
                <div>Username: {comment.user.username}</div>
                <div>Comment: {comment.text}</div>
                <div><Comment id={comment.id} {...props}/></div>
            </div>
        )
        })}
        </div> 
     );
}
 
export default CommentList;