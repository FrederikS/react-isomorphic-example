import { observable } from 'mobx';

export default class Topic {
    id;
    subject;
    posts = [];
    @observable expanded = false;

    constructor(id, subject, posts) {
        this.id = id;
        this.subject = subject;
        this.posts = posts;
    }


}
