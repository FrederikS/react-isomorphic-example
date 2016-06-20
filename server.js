import express from 'express';
import viewEngine from './src/main/engine/view-engine';

const app = express();

app.engine('js', viewEngine);
app.set('views', './src/main');
app.set('view engine', 'js');

app.get('/', (req, res) => {
    res.render('container/App', { title: 'React Isomorphic' });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
