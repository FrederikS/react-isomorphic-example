import React from 'react';

class Topic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
        this.toggleContent = () => this._toggleContent();
    }

    _toggleContent() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        const { subject } = this.props.data;
        return (
            <article>
                <h2 onClick={this.toggleContent}>{subject}</h2>
                {this.state.expanded ? this.props.children : false}
            </article>
        );
    }

}

Topic.propTypes = {
    data: React.PropTypes.object,
    children: React.PropTypes.node
};

Topic.defaultProps = {
    data: {}
};

export default Topic;
