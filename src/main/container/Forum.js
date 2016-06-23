import React from 'react';
import TopicView from '../components/TopicView';
import Post from '../components/Post';
import User from '../components/User';
import { Link } from 'react-router';

const Forum = props => (
    <div>
        {props.topicStore.topics.map(topic => (
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

Forum.propTypes = {
    topicStore: React.PropTypes.object.isRequired
};

export default Forum;
