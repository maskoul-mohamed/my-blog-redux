import React from 'react';
import { connect } from 'react-redux';
import { startRemovePost } from '../redux/actions/posts';
import moment from 'moment';

export class PostDetailPage extends React.Component {
    isOwnerPost = this.props.post.user.uid === this.props.uid;

    onEditPost= () => {
        this.props.history.push(`/edit/${this.props.post.id}`)
    }

    onRemove = () => {
        this.props.startRemovePost(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
        return (
        <div className='content-container bottom-space'>
            <div className='detail-post'>
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.body}</p>
                <p  className='list-item__data'>{moment(this.props.post.createdAt).format('MMM Do, YYYY')}, by {this.props.post.user.userName}</p>
                {this.isOwnerPost && 
                    <div className='detail-post__space'>
                        <button className='button' onClick={this.onEditPost}>Edit Post</button> 
                        <button className='button button--secondary' onClick={this.onRemove}>Remove</button>
                    </div>
                }
            </div>
        </div>
        )
    }
} 

const mapStateToProps = (state, props) => ({
    post: state.posts.find(post => post.id === props.match.params.id),
    uid: state.auth.user.uid
});

const mapDispatchToProps = (dispatch) => ({
    startRemovePost: (id) => dispatch(startRemovePost(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(PostDetailPage);