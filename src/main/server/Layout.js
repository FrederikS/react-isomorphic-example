export default {
    render: ({ content, css, state }) => `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>React Isomorphic</title>
                <style type="text/css">${css}</style>
                <script type="text/javascript">
                    window.__STATE__ = '${state}';
                </script>
            </head>
            <body>
                <main id="app">${content}</main>
                <script type="text/javascript" src="/dist/js/bundle.js" /></script>
            </body>
        </html>`
};
