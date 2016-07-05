import Topic from '../models/Topic';
import { observable } from 'mobx';

export default class TopicStore {
    @observable topics = [];

    initializeWith(topics) {
        this.topics = [];
        const topicModels = topics.map(topic => this._createTopicModelFor(topic));
        this.topics.push(...topicModels);
    }

    _createTopicModelFor({ id, subject, posts = [] }) {
        return new Topic(id, subject, posts);
    }

}
