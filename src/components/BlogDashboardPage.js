import React from 'react';
import PostsList  from './PostsList';
import PostListFilters from './PostListFilters';
import PostsSummary from './PostsSummary';
const BlogDashboardPage = () => (
    <div>
        <PostsSummary />
        <PostListFilters />
        <PostsList />
    </div>
);

export default BlogDashboardPage;