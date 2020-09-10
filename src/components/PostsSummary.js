import React from 'react';
import selectVisiblePosts from '../redux/selectors/filters';
import { connect } from 'react-redux';

 const PostsSummary = ({ postsTotal, visiblePostsTotal }) => {
     const postWord = visiblePostsTotal === 1 ? 'post' : 'posts';
    return (
        <div>
            <h2>Viewing <span>{visiblePostsTotal}</span> {postWord} total posts <span>{postsTotal}</span></h2>
            <div>
            
            </div>
        </div>
    );
 };

const mapStateToProps = (state) => ({
    postsTotal: state.posts.length,
    visiblePostsTotal: selectVisiblePosts(state.posts, state.filters).length
});

export default connect(mapStateToProps)(PostsSummary);