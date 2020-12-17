import React from 'react';
import s from './Post.module.css';

function Post (props) {
    return (
        <div className={s.item}>
            <img className={s.ava} src="https://www.interjet.com/images/img.jpg" alt="img"></img>
            {props.message}
            <div>
                <span>likes: {props.likesCount}</span>
            </div>            
        </div>
    )
}

export default Post;