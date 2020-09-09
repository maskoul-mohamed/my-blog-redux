import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostsListItem = ({ id, title, body, createdAt, user}) => (
    <div>
        <Link to={`/post/${id}`}>
            <h1>{title}</h1>
            <h3>{body.substring(0, 140)} read more...</h3>
            <p>{moment(createdAt).format('MMM Do, YYYY')} - {user.userName}</p>
        </Link>
    
    </div>
);

export default PostsListItem;