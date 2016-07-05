import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Forum from '../container/Forum';
import UserView from '../container/UserView';
import addPost from '../handler/addPost';

export default (
    <Route path="/">
        <IndexRoute component={Forum} />
        <Route path="user/:userId" component={UserView} />
        <Route path="addPost" onEnter={addPost} />
    </Route>
);
