import React from 'react';
import { connect } from 'react-redux';
import NotFoundPage from './NotFoundPage';
import PostForm from './PostForm';
import { startEditPost } from '../redux/actions/posts';

export class EditPostPage extends React.Component {
    isOwnerPost = this.props.post.user.uid === this.props.uid;
    onSubmit = (post) => {
        const id = this.props.post.id;
        this.props.startEditPost(post, id);
        this.props.history.push(`/post/${id}`);
    }
    render() {
        return (
            <div>
                {this.isOwnerPost ? (
                    <PostForm 
                        post={this.props.post}
                        onSubmit={this.onSubmit}
                    />
                ) : (
                    <NotFoundPage />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    post: state.posts.find(post => post.id === props.match.params.id),
    uid: state.auth.user.uid
});

const mapDispatchToProps = (dispatch) => ({
    startEditPost: (post, id) => dispatch(startEditPost(post, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);