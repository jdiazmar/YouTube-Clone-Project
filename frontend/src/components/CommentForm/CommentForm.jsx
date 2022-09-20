import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';


const CommentForm = (props) => {

    const [user, token] = useAuth();

    return ( 
        <table>
            <thead>
                <tr>
                    <th>{user.user}</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {props.userComment.map((entry) => {
                    return (
                        <div>
                            <tr>
                                <td>{entry.user}</td>
                                <td>{entry.text}</td>
                            </tr>
                        </div>
                    )
                })}
            </tbody>
        </table>
     );
}
 
export default CommentForm;