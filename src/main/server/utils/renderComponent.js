import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RouterContext } from 'react-router';
import ContextProvider from '../../common/container/ContextProvider';
import Layout from '../Layout';
import fetchComponentData from './fetchComponentData';
import dehydrate from './dehydrate';

export default function (store, renderProps) {
    return new Promise((resolve, reject) => {
        fetchComponentData(store, renderProps.components)
            .then(() => {
                const css = new Set();
                const content = ReactDOMServer.renderToString(
                    /* eslint-disable no-underscore-dangle */
                    <ContextProvider
                      context={{
                          store,
                          insertCss: styles => css.add(styles._getCss())
                      }}
                    >
                    {/* eslint-enable */}
                        <RouterContext {...renderProps} />
                    </ContextProvider>
                );
                resolve(Layout.render({
                    content,
                    css: Array.from(css).join(''),
                    state: dehydrate({ store })
                }));
            }).catch(error => reject(error));
    });
}
