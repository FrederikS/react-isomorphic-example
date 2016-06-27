import TopicStore from '../../common/stores/TopicStore';

export default function (stateAsJsonString) {
    const store = new TopicStore();
    const state = JSON.parse(stateAsJsonString);
    store.addTopics(state.store.topics);
    return store;
}
