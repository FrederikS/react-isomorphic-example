import moment from 'moment';
import addPost from './addPost';

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
    return dispatch => fetch(`http://localhost:3001/topics/${topicId}/posts`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(() => dispatch(addPost(topicId, post)));
};
