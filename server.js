import express from 'express';
import path from 'path';
import { match, RouterContext } from 'react-router';
import routes from './src/main/config/routes';
import Layout from './src/main/Layout';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import WithStylesContext from './src/main/container/WithStylesContext';

const app = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('*', (req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            const css = new Set();
            const content = ReactDOMServer.renderToString(
                /*eslint-disable*/
                <WithStylesContext onInsertCss={styles => css.add(styles._getCss())}>
                {/*eslint-enable*/}
                    <RouterContext {...renderProps} />
                </WithStylesContext>
            );
            res.status(200).send(Layout.render({ content, css: Array.from(css).join('') }));
        } else {
            res.status(404).send('Not found');
        }
    });
});

app.listen(3000, () => {
    console.log(' 🌎 running on port 3000!'); //eslint-disable-line
});
