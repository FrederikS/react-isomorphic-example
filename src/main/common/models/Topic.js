import { observable } from 'mobx';

export default class Topic {
    id;
    subject;
    @observable posts = [];
    @observable expanded = true;

    constructor(id, subject, posts) {
        this.id = id;
        this.subject = subject;
        this.posts = posts;
    }

}
