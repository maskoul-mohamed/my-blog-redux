import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startAddPost } from '../redux/actions/posts';


export class AddPostPage extends React.Component {
    onSubmit = (post) => {
        this.props.startAddPost(post);
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div>
                <h1>Add new post</h1>
                <PostForm 
                    user={this.props.user}
                    onSubmit={this.onSubmit}
                    />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
    startAddPost: (post) => dispatch(startAddPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostPage);