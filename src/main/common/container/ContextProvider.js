import React from 'react';

class ContextProvider extends React.Component {
    getChildContext() {
        return this.props.context;
    }

    render() {
        return this.props && this.props.children;
    }
}

ContextProvider.propTypes = {
    children: React.PropTypes.node.isRequired,
    context: React.PropTypes.shape(ContextProvider.contextTypes)
};

ContextProvider.childContextTypes = {
    insertCss: React.PropTypes.func.isRequired,
    store: React.PropTypes.object.isRequired
};

export default ContextProvider;
