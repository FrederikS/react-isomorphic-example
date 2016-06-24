import TopicStore from '../../common/stores/TopicStore';

export default function (stateAsJsonString) {
    const store = new TopicStore();
    const state = JSON.parse(stateAsJsonString);
    state.store.topics.forEach(topic => store.addTopic(topic));
    return store;
}
