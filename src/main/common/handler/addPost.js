import { addPostToTopic } from '../api/post-api';
import moment from 'moment';

const createPostFor = (message) => ({
    message,
    date: moment().format('d. MMM h:mm'),
    poster: {
        name: 'ChubberGhouly',
        id: 2314
    }
});

export default function (nextState, replace, callback) {
    const { message, topicId } = nextState.location.query;
    const { onSuccess = () => {} } = nextState.location.state || {};
    const post = createPostFor(message);
    addPostToTopic(topicId, post)
        .then(() => {
            onSuccess(post);
            replace('/');
            callback();
        });
}
