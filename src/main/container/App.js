import React from 'react';
import data from '../../../data/forum.json';
import Forum from './Forum';
import TopicStore from '../stores/TopicStore';

const topicStore = new TopicStore();
data.topics.forEach(topic => topicStore.addTopic(topic));
const App = () => <Forum topicStore={topicStore} />;

export default App;
