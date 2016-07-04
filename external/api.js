import express from 'express';
import data from '../data/forum.json';
import cors from 'cors';
import bodyParser from 'body-parser';

const server = express();

server.use(bodyParser.json());

const topics = new Map();
data.topics.forEach(topic => topics.set(topic.id, topic));

server.get('/topics', cors(), (req, res) => {
    res.status(200).json(Array.from(topics.values()));
});

server.options('/topics/:id/posts', cors());
server.post('/topics/:id/posts', cors(), (req, res) => {
    const topicId = parseInt(req.params.id, 10);
    topics.get(topicId).posts.push(req.body);
    res.status(200).json({});
});

server.listen(3001, () => {
    console.log(' 🌎 api-server running on port 3001!'); //eslint-disable-line
});
