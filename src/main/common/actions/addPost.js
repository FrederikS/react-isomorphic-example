import moment from 'moment';

const createPostFor = (message) => ({
    message,
    date: moment().format('d. MMM h:mm'),
    poster: {
        name: 'ChubberGhouly',
        id: 2314
    }
});

export default ({ text, topicId }) => {
    const post = createPostFor(text);
    return ({
        type: 'ADD_POST',
        meta: { topicId },
        payload: fetch(`http://localhost:3001/topics/${topicId}/posts`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(() => Promise.resolve(post))
    });
};
