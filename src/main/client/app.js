import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WithStylesContext from '../common/container/WithStylesContext';
import { Router, browserHistory } from 'react-router';
import routes from '../common/config/routes';
import rehydrate from './utils/rehydrate';
import configureStore from '../common/config/configureStore';

const initialState = rehydrate(window.__STATE__); // eslint-disable-line no-underscore-dangle
const store = configureStore(initialState);

ReactDOM.render(
    /* eslint-disable no-underscore-dangle */
    <Provider store={store}>
        <WithStylesContext onInsertCss={styles => styles._insertCss()}>
            {/* eslint-enable */}
            <Router history={browserHistory} routes={routes(store.dispatch)} />
        </WithStylesContext>
    </Provider>,
    document.getElementById('app')
);
