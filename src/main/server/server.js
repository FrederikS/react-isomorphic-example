import express from 'express';
import { match } from 'react-router';
import routes from '../common/config/routes';
import renderComponent from './utils/renderComponent';
import configureStore from '../common/config/configureStore';

const app = express();

app.use('/dist', express.static('dist'));
app.use('/images', express.static('images'));

app.get('*', (req, res, next) => {
    const store = configureStore();
    match({ routes: routes(store.dispatch), location: req.url },
        (error, redirectLocation, renderProps) => {
            if (error) {
                res.status(500).send(error.message);
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            } else if (renderProps) {
                renderComponent(store, renderProps)
                    .then(html => res.status(200).send(html))
                    .catch(err => next(err));
            } else {
                res.status(404).send('Not found');
            }
        });
});

app.listen(3000, () => {
    console.log(' 🌎 running on port 3000!'); //eslint-disable-line
});
