import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';


const CommentForm = (props) => {

    const [user, token] = useAuth();

    return ( 
        <table>
            <thead>
                <tr>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {/* {props.userComment.map((entry) => {
                    return (
                        <div>
                            <tr>
                                <td>{entry.user}</td>
                                <td>{entry.text}</td>
                            </tr>
                        </div>
                    )
                })} */}
                <tr>
                    <div> {user.user} {props.userComment} </div> 
                </tr>
            </tbody>
        </table>
     );
}
 
export default CommentForm;