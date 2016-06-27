import Topic from '../models/Topic';
import { observable } from 'mobx';

export default class TopicStore {
    @observable topics = [];

    addTopics(topics) {
        const topicModelsToAdd = topics
            .filter(data => !this._alreadContainsTopic(data.id))
            .map(data => this._createTopicModelFor(data));
        this.topics.push(...topicModelsToAdd);
    }

    _createTopicModelFor({ id, subject, posts = [] }) {
        return new Topic(id, subject, posts);
    }

    _alreadContainsTopic(topicId) {
        return this.topics.find(topic => topic.id === topicId);
    }
}
