import React from 'react';
import moment from 'moment';

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.post ? props.post.title : '',
            body: props.post ? props.post.body : '',
            createdAt: props.post ? props.post.createdAt : moment().valueOf(),
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
                createdAt: this.state.createdAt
            };
            this.props.onSubmit(post)
        } else {
            this.setState(() => ({ error: '* Please Enter a Title and Post body!'}))
        }
    }
    render() {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                    {this.state.error && <p className='form__error'>{this.state.error}</p> }

                    <input 
                    className='text-input'
                    type='text'
                    placeholder='Title'
                    value={this.state.title}
                    onChange={this.onTitleChange}
                    />
                <textarea
                    className='textarea-input'
                    type='body'
                    placeholder='Post body...'
                    value={this.state.body}
                    onChange={this.onPostBodyChange}
                />
                <div>
                    <button className='button'>Save post</button>
                </div>
                
            </form>
        )
    };
};