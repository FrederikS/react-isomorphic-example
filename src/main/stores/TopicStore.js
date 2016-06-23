import Topic from '../models/Topic';

export default class TopicStore {
    topics = [];

    addTopic({ id, subject, posts = [] }) {
        this.topics.push(new Topic(id, subject, posts));
    }
}
