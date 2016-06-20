import Layout from './Layout';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default function (filePath, options, callback) {
    const Component = require(filePath).default; // eslint-disable-line
    const reactMarkup = ReactDOMServer.renderToString(<Component {...options} />);
    return callback(null, Layout.render(reactMarkup));
}
