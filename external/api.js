import express from 'express';
import data from '../data/forum.json';
import cors from 'cors';

const server = express();

server.get('/topics', cors(), (req, res) => {
    res.status(200).json(data.topics);
});

server.listen(3001, () => {
    console.log(' 🌎 api-server running on port 3001!'); //eslint-disable-line
});
