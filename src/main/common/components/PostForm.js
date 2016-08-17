import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './styles.css';

class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.handlePost = (e) => this._handlePost(e);
    }

    _handlePost(e) {
        e.preventDefault();
        e.stopPropagation();
        this.context.router.push({
            pathname: 'addPost',
            query: {
                topicId: this.props.topic.id,
                message: this.textArea.value
            }
        });
        this.textArea.value = '';
    }

    render() {
        /* eslint-disable no-return-assign */
        return (
            <form action="/addPost" onSubmit={this.handlePost}>
                <input type="hidden" name="topicId" value={this.props.topic.id} />
                <div className={styles.areaWrapper}>
                    <textarea
                      className={styles.textarea}
                      name="message"
                      ref={(ele) => this.textArea = ele}
                    />
                </div>
                <button className={styles.sendButton} type="submit">send</button>
            </form>
        );
        /* eslint-enable no-return-assign */
    }

}

PostForm.propTypes = {
    topic: React.PropTypes.object.isRequired
};

PostForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default withStyles(styles)(PostForm);
