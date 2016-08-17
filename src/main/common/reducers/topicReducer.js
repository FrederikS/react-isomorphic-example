const getUpdatedState = ({ state, topicIndex, updatedTopic }) => Object.assign({}, state, {
    topics: [
        ...state.topics.slice(0, topicIndex),
        updatedTopic,
        ...state.topics.slice(topicIndex + 1)
    ]
});

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_TOPICS_PENDING':
            return Object.assign({}, state, { topics: [] });
        case 'FETCH_TOPICS_FULFILLED':
            return Object.assign({}, state, { topics: action.payload });
        case 'TOGGLE_TOPIC': {
            const topicIndex = state.topics.findIndex(topic => topic.id === action.topicId);
            const toggledTopic = Object.assign({}, state.topics[topicIndex], {
                collapsed: !state.topics[topicIndex].collapsed
            });
            return getUpdatedState({
                state,
                topicIndex,
                updatedTopic: toggledTopic
            });
        }
        case 'ADD_POST_PENDING':
            return state;
        case 'ADD_POST_FULFILLED': {
            const topicIndex = state.topics.findIndex(topic => topic.id === action.meta.topicId);
            const topicWithNewPost = Object.assign({}, state.topics[topicIndex], {
                posts: state.topics[topicIndex].posts.concat([action.payload])
            });
            return getUpdatedState({
                state,
                topicIndex,
                updatedTopic: topicWithNewPost
            });
        }
        default:
            return state;
    }
};
