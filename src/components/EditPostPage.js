import React from 'react';
import { connect } from 'react-redux';
import NotFoundPage from './NotFoundPage';
import PostForm from './PostForm';
import { startEditPost, startRemovePost } from '../redux/actions/posts';

export class EditPostPage extends React.Component {
    isOwnerPost = this.props.post.user.uid === this.props.uid;
    onSubmit = (post) => {
        const id = this.props.post.id;
        this.props.startEditPost(post, id);
        this.props.history.push(`/post/${id}`);
    }
    onRemove = () => {
        this.props.startRemovePost(this.props.post.id);
        this.props.history.push('/');
    } 
    render() {
        return (
            <div>
                {this.isOwnerPost ? (
                    <div>
                        <PostForm 
                            post={this.props.post}
                            onSubmit={this.onSubmit}
                        />
                        <button onClick={this.onRemove}>Remove</button>
                    </div>
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
    startEditPost: (post, id) => dispatch(startEditPost(post, id)),
    startRemovePost: (id) => dispatch(startRemovePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);