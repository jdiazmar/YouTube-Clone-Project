import React, { useState } from 'react';


const CommentForm = (props) => {



    return ( 
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.userComment.map((entry) => {
                    return (
                        <div>
                            <tr>
                                <td>{entry.user}</td>
                                <td>{entry.comment}</td>
                            </tr>
                        </div>
                    )
                })}
            </tbody>
        </table>
     );
}
 
export default CommentForm;