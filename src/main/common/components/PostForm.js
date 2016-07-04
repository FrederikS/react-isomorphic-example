import React from 'react';
import { action } from 'mobx';

class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.handlePost = (e) => this._handlePost(e);
    }

    @action
    _handlePost(e) {
        e.preventDefault();
        const post = this._createPostFor(this.refs.message.value);
        this.context.store.addPost(this.props.topic, post);
    }

    _createPostFor(message) {
        const dateOptions = {
            day: 'numeric',
            month: 'long',
            hour: '2-digit',
            minute: '2-digit'
        };
        return {
            message,
            date: new Date().toLocaleString('de-De', dateOptions),
            poster: {
                name: 'ChubberGhouly',
                id: 2314
            }
        };
    }

    render() {
        return (
            <form method="POST">
                <textarea ref="message"></textarea>
                <input type="submit" onClick={this.handlePost} value="send" />
            </form>
        );
    }

}

PostForm.propTypes = {
    topic: React.PropTypes.object.isRequired
};

PostForm.contextTypes = {
    store: React.PropTypes.object.isRequired
};

export default PostForm;
