import fetch from 'isomorphic-fetch';
import addTopics from './addTopics';

export default () => dispatch => fetch('http://localhost:3001/topics')
    .then(response => response.json())
    .then(topics => dispatch(addTopics(topics)));
