import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostsListItem = ({ id, title, body, createdAt, user}) => (

        <Link className='list-item'to={`/post/${id}`}>
            <h1 className='list-item__title'>{title}</h1>
            <h3 className='list-item__sub-title'>
                {body.substring(0, 140)}{body.length >= 140 && <span>...read more</span>} 
            </h3>
            <div className='list-item__data'>
                <p>{moment(createdAt).format('MMM Do, YYYY')}</p>
                <p>{user.userName}</p>
            </div>
        </Link>
);

export default PostsListItem;