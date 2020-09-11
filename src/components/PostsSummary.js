import React from 'react';
import selectVisiblePosts from '../redux/selectors/filters';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

 const PostsSummary = ({ postsTotal, visiblePostsTotal }) => {
     const postWord = visiblePostsTotal === 1 ? 'post' : 'posts';
    return (
        <div className='header-page'>
            <div className='content-container'>
                <h1 className='header-page__title'>Viewing <span>{visiblePostsTotal}</span> {postWord} total posts <span>{postsTotal}</span></h1>
                <div className='header-page__action'>
                    <Link className='button' to='/create'>Add New Post</Link>
                </div>
            </div>
        </div>
    );
 };

const mapStateToProps = (state) => ({
    postsTotal: state.posts.length,
    visiblePostsTotal: selectVisiblePosts(state.posts, state.filters).length
});

export default connect(mapStateToProps)(PostsSummary);