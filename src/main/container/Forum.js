import React from 'react';
import Topic from '../components/Topic';
import Post from '../components/Post';
import User from '../components/User';

const Forum = props => (
    <div>
        {props.topics.map(topic => (
            <Topic key={topic.id} data={topic}>
                {topic.posts.map((post, postIndex) => (
                    <Post key={postIndex} data={post}>
                        <User
                          avatar={`images/avatar-${post.poster.id}.gif`}
                          name={post.poster.name}
                        />
                    </Post>
                ))}
            </Topic>
        ))}
    </div>
);

Forum.propTypes = {
    topics: React.PropTypes.arrayOf(React.PropTypes.object)
};

Forum.defaultProps = {
    topics: []
};

export default Forum;
