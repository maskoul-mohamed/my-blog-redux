import React from 'react';
import '../App.css';
import AppRouter from '../routers/AppRouter';
import configureStore from '../redux/store/configureStore';
import { addPost } from '../redux/actions/posts';

const store = configureStore();

const post = {
  title: 'Test',
  body: 'This is empty body',
  userName: 'Test Name',
  createdAt: Date.now()
}
store.dispatch(addPost(post))
const getPosts = store.getState();
console.log('posts: ', getPosts.posts);

const BlogApp = () => (
  <div>
    <AppRouter />
  </div>
)

export default BlogApp;
