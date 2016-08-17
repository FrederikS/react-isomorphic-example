import addPost from '../actions/addPost';
import fetchTopics from '../actions/fetchTopics';

export default function (dispatch) {
    return (nextState, replace, callback) => {
        const { message, topicId } = nextState.location.query;
        dispatch(fetchTopics())
            .then(() => dispatch(addPost({ text: message, topicId: parseInt(topicId, 10) })))
            .then(() => {
                replace('/');
                callback();
            })
            .catch((e) => console.log(e)); // eslint-disable-line no-console
    };
}
