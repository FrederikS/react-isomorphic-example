import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../container/App';
import UserView from '../container/UserView';

export default (
    <Route path="/">
        <IndexRoute component={App} />
        <Route path="user/:userId" component={UserView} />
    </Route>
);
