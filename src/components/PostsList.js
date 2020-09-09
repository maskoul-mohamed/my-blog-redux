import React from 'react';
import { connect } from 'react-redux';
import PostsListItem from './PostsListItem';
import visibilePostsFilter from '../redux/selectors/filters';

export const PostsList = (props) => (
    <div>
        {props.posts.length === 0 ? (
            <p>There's no Posts!</p>
        ) : (
            props.posts.map((post) => <PostsListItem key={post.id} {...post}/>)
        )}
    </div>
);

const mapStateToProps = (state) => ({
    posts: visibilePostsFilter(state.posts, state.filters)
});

export default connect(mapStateToProps)(PostsList);