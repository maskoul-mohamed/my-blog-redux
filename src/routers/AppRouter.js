import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BlogDashboardPage from '../components/BlogDashboardPage';
import AddPostPage from '../components/AddPostPage';
import EditPostPage from '../components/EditPostPage';
import NotFoundPage from '../components/NotFoundPage';
import { createBrowserHistory } from 'history';
import LoginPage from '../components/LoginPage';
import PublicRoute from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import PostDetailPage  from '../components/PostDetailPage';

export let history = createBrowserHistory();

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <PublicRoute  path='/' component={LoginPage} exact={true} />
                <PrivateRouter path='/dashboard' component={BlogDashboardPage} />
                <PrivateRouter path='/create' component={AddPostPage} />
                <PrivateRouter path='/edit/:id' component={EditPostPage}/>
                <PrivateRouter path='/post/:id' component={PostDetailPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;