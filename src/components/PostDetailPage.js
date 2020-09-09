import React from 'react';
import { connect } from 'react-redux';

export const PostDetailPage = ({post}) => (
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p>{post.createdAt} - {post.user.userName}</p>
    </div>
);

const mapStateToProps = (state, props) => ({
    post: state.posts.find(post => post.id === props.match.params.id)
});

export default connect(mapStateToProps)(PostDetailPage);