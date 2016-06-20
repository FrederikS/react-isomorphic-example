export default {
    render: content => `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>React Isomorphic</title>
            </head>
            <body>
                <main id="app">${content}</main>
            </body>
        </html>`
};
