import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRouter = ({
    isAuthenticated,
    component: Components,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to='/dashboard' /> 
            ) : (
                <Components {...props} />
            )
            
    )}
    />
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.user.uid
});

export default connect(mapStateToProps)(PublicRouter)