import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import WithStylesContext from '../../common/container/WithStylesContext';
import Layout from '../Layout';
import fetchComponentData from './fetchComponentData';
import dehydrate from './dehydrate';

export default function (store, renderProps) {
    return new Promise((resolve, reject) => {
        fetchComponentData(store.dispatch, renderProps.components)
            .then(() => {
                const css = new Set();
                const content = ReactDOMServer.renderToString(
                    /* eslint-disable no-underscore-dangle */
                    <Provider store={store}>
                        <WithStylesContext
                          onInsertCss={styles => css.add(styles._getCss())}
                        >
                            {/* eslint-enable */}
                            <RouterContext {...renderProps} />
                        </WithStylesContext>
                    </Provider>
                );
                resolve(Layout.render({
                    content,
                    css: Array.from(css).join(''),
                    state: dehydrate(store.getState())
                }));
            }).catch(error => reject(error));
    });
}
