import fetch from 'isomorphic-fetch';

export default () => ({
    type: 'FETCH_TOPICS',
    payload: fetch('http://localhost:3001/topics')
        .then(response => response.json())
});
