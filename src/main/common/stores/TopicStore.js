import Topic from '../models/Topic';
import { observable } from 'mobx';
import fetch from 'isomorphic-fetch';

export default class TopicStore {
    @observable topics = [];

    initializeWith(topics) {
        this.topics = [];
        const topicModels = topics.map(topic => this._createTopicModelFor(topic));
        this.topics.push(...topicModels);
    }

    addPost(topic, post) {
        this._addPostToServer(topic.id, post)
            .then(() => topic.posts.push(post));
    }

    _addPostToServer(topicId, post) {
        return fetch(`http://localhost:3001/topics/${topicId}/posts`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });
    }

    _createTopicModelFor({ id, subject, posts = [] }) {
        return new Topic(id, subject, posts);
    }

}
