import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BlogApp from './components/BlogApp';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import { firebase } from './firebase/firebase';
import { login, logout} from './redux/actions/auth';
import { startSetPosts } from './redux/actions/posts';
import { history } from './routers/AppRouter';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <BlogApp />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
      ReactDOM.render(
        <React.StrictMode>
          {jsx}
        </React.StrictMode>,
        document.getElementById('root')
      );
        hasRendered = true;
    }
};


firebase.auth().onAuthStateChanged((user) => {
  if(user){
      store.dispatch(login(user.uid, user.displayName));
      store.dispatch(startSetPosts()).then(() => {
        renderApp()
        if(history.location.pathname === '/'){
        history.push('/dashboard')
        }
      });
  } else {
      store.dispatch(logout())
      renderApp();
  }
});




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
