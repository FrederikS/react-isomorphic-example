import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Forum from '../container/Forum';
import UserView from '../container/UserView';

export default (
    <Route path="/">
        <IndexRoute component={Forum} />
        <Route path="user/:userId" component={UserView} />
    </Route>
);
