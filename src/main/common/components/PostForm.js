import React from 'react';
import { action } from 'mobx';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './styles.css';

class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.handlePost = (e) => this._handlePost(e);
    }

    @action
    _handlePost(e) {
        e.preventDefault();
        this.context.router.push({
            pathname: 'addPost',
            query: {
                topicId: this.props.topic.id,
                message: this.refs.message.value
            },
            state: {
                onSuccess: (post) => {
                    this.props.topic.posts.push(post);
                }
            }
        });
        this.refs.message.value = '';
    }

    render() {
        return (
            <form action="/addPost" onSubmit={this.handlePost}>
                <input type="hidden" name="topicId" value={this.props.topic.id} />
                <div className={styles.areaWrapper}>
                    <textarea className={styles.textarea} name="message" ref="message"></textarea>
                </div>
                <button className={styles.sendButton} type="submit">send</button>
            </form>
        );
    }

}

PostForm.propTypes = {
    topic: React.PropTypes.object.isRequired
};

PostForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default withStyles(styles)(PostForm);
