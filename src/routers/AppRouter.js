import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BlogDashboardPage from '../components/BlogDashboardPage';
import AddPostPage from '../components/AddPostPage';
import EditPostPage from '../components/EditPostPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={BlogDashboardPage} exact={true} />
                <Route path='/create' component={AddPostPage} />
                <Route path='/Edit/:id' component={EditPostPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;