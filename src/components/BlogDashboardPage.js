import React from 'react';
import PostsList  from './PostsList';
import PostListFilters from './PostListFilters';

const BlogDashboardPage = () => (
    <div>
        <PostListFilters />
        <PostsList />
    </div>
);

export default BlogDashboardPage;