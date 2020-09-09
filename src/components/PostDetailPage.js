import React from 'react';
import { connect } from 'react-redux';

export class PostDetailPage extends React.Component {
    isOwnerPost = this.props.post.user.uid === this.props.uid;

    editPost= () => {
        this.props.history.push(`/edit/${this.props.post.id}`)
    }
    render() {
        return (
        <div>
            <h1>{this.props.post.title}</h1>
            <p>{this.props.post.body}</p>
            <p>{this.props.post.createdAt} - {this.props.post.user.userName}</p>
            {this.isOwnerPost && 
                <div>
                    <button onClick={this.editPost}>Edit Post</button> 
                    <button>Remove</button>
                </div>
            }
        </div>
        )
    }
} 

const mapStateToProps = (state, props) => ({
    post: state.posts.find(post => post.id === props.match.params.id),
    uid: state.auth.user.uid
});

export default connect(mapStateToProps)(PostDetailPage);