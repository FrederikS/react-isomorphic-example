import React from 'react';
import ReactDOM from 'react-dom';
import WithStylesContext from './container/WithStylesContext';
import { Router, browserHistory } from 'react-router';
import routes from './config/routes';

ReactDOM.render(
    /*eslint-disable*/
    <WithStylesContext onInsertCss={styles => styles._insertCss()}>{/*eslint-enable*/}
        <Router history={browserHistory} routes={routes} />
    </WithStylesContext>,
    document.getElementById('app')
);
