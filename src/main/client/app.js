import React from 'react';
import ReactDOM from 'react-dom';
import ContextProvider from '../common/container/ContextProvider';
import { Router, browserHistory } from 'react-router';
import routes from '../common/config/routes';
import rehydrate from './utils/rehydrate';

const store = rehydrate(window.__STATE__); // eslint-disable-line no-underscore-dangle

ReactDOM.render(
    /* eslint-disable no-underscore-dangle */
    <ContextProvider context={{ store, insertCss: styles => styles._insertCss() }}>
    {/* eslint-enable */}
        <Router history={browserHistory} routes={routes} />
    </ContextProvider>,
    document.getElementById('app')
);
