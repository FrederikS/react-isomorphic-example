import express from 'express';
import viewEngine from './src/main/engine/view-engine';
import path from 'path';

const app = express();

app.engine('js', viewEngine);
app.set('views', path.join(__dirname, 'src/main'));
app.set('view engine', 'js');
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.render('container/App', { title: 'React Isomorphic' });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
