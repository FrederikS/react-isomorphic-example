import { addPostToTopic } from '../api/post-api';

const createPostFor = (message) => {
    const dateOptions = {
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    };
    return {
        message,
        date: new Date().toLocaleString('de-De', dateOptions),
        poster: {
            name: 'ChubberGhouly',
            id: 2314
        }
    };
};

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
