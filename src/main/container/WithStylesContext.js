import React from 'react';

class WithStylesContext extends React.Component {
    getChildContext() {
        return { insertCss: this.props.onInsertCss };
    }

    render() {
        return React.Children.only(this.props.children);
    }
}

WithStylesContext.propTypes = {
    children: React.PropTypes.node.isRequired,
    onInsertCss: React.PropTypes.func.isRequired
};

WithStylesContext.childContextTypes = {
    insertCss: React.PropTypes.func.isRequired
};

export default WithStylesContext;
