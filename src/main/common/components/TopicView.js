import React from 'react';
import { observer } from 'mobx-react';

@observer
class TopicView extends React.Component {

    constructor(props) {
        super(props);
        this.toggleContent = () => this._toggleContent();
    }

    _toggleContent() {
        const { topic } = this.props;
        topic.expanded = !topic.expanded;
    }

    render() {
        const { expanded, subject } = this.props.topic;
        return (
            <article>
                <h2 onClick={this.toggleContent}>{subject}</h2>
                {expanded ? this.props.children : false}
            </article>
        );
    }

}

TopicView.propTypes = {
    topic: React.PropTypes.object,
    children: React.PropTypes.node
};

export default TopicView;
