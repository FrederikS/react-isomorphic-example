import React from 'react';
import Forum from './Forum';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return <Forum topicStore={this.context.store} />;
    }
}

App.contextTypes = {
    store: React.PropTypes.object.isRequired
};

export default App;
