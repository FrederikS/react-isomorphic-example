import React from 'react';
import Forum from './Forum';
import fetch from 'isomorphic-fetch';

class App extends React.Component {

    static fetchData(store) {
        return fetch('http://localhost:3001/topics')
            .then(response => response.json())
            .then(topics => {
                topics.forEach(topic => store.addTopic(topic));
            });
    }

    // componentDidMount() {
    //     App.fetchData(this.context.store);
    // }

    render() {
        return <Forum topicStore={this.context.store} />;
    }
}

App.contextTypes = {
    store: React.PropTypes.object.isRequired
};

export default App;
