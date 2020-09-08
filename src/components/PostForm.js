import React from 'react';
import moment from 'moment';

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.post ? props.post.title : '',
            body: props.post ? props.post.body : '',
            createdAt: moment().valueOf(),
            userName: props.user.displayName,
            error: ''
        }
    };
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };

    onPostBodyChange = (e) => {
        const body = e.target.value;
        this.setState(() => ({ body }));
    };

    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.title && this.state.body){
            this.setState(() => ({ error: '', createdAt: moment().valueOf()}));
            const post = {
                title: this.state.title,
                body: this.state.body,
                createdAt: this.state.createdAt,
                userName: this.state.userName
            };
            this.props.onSubmit(post)
        }
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type='text'
                    placeholder='Title'
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <textarea
                    type='body'
                    placeholder='Post body...'
                    value={this.state.body}
                    onChange={this.onPostBodyChange}
                />
                <button>Save post</button>
            </form>
        )
    };
};