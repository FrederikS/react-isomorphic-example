import React from 'react';
import TopicView from '../components/TopicView';
import Post from '../components/Post';
import User from '../components/User';
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import fetch from 'isomorphic-fetch';

@observer
class Forum extends React.Component {

    static fetchData(store) {
        return fetch('http://localhost:3001/topics')
            .then(response => response.json())
            .then(topics => store.addTopics(topics));
    }

    componentDidMount() {
        Forum.fetchData(this.context.store);
    }

    render() {
        console.log('Forum render');
        const { store: topicStore } = this.context;
        return (
            <div>
                {topicStore.topics.map(topic => (
                    <TopicView key={topic.id} topic={topic}>
                        {topic.posts.map((post, postIndex) => (
                            <Post key={postIndex} data={post}>
                                <Link to={`/user/${post.poster.id}`}>
                                    <User
                                      avatar={`images/avatar-${post.poster.id}.gif`}
                                      name={post.poster.name}
                                    />
                                </Link>
                            </Post>
                        ))}
                    </TopicView>
                ))}
            </div>
        );
    }
}

Forum.contextTypes = {
    store: React.PropTypes.object.isRequired
};

export default Forum;
