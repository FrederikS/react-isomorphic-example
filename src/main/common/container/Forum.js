import React from 'react';
import { connect } from 'react-redux';
import TopicView from '../components/TopicView';
import Post from '../components/Post';
import User from '../components/User';
import PostForm from '../components/PostForm';
import { Link } from 'react-router';
import fetchTopics from '../actions/fetchTopics';
import toggleTopic from '../actions/toggleTopic';

class Forum extends React.Component {

    static fetchData() {
        return fetchTopics();
    }

    componentDidMount() {
        // Forum.fetchData(this.context.store);
    }

    render() {
        const { topics, onTopicClick } = this.props;
        return (
            <div>
                {topics.map(topic => (
                    <TopicView key={topic.id} topic={topic} onClick={onTopicClick}>
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
                        <PostForm topic={topic} />
                    </TopicView>
                ))}
            </div>
        );
    }
}

Forum.propTypes = {
    topics: React.PropTypes.array,
    onTopicClick: React.PropTypes.func
};

Forum.defaultProps = {
    topics: []
};

Forum.contextTypes = {
    store: React.PropTypes.object.isRequired
};

export default connect(
    state => ({ topics: state.topics }),
    dispatch => ({
        onTopicClick: (topicId) => dispatch(toggleTopic(topicId))
    })
)(Forum);
