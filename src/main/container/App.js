import React from 'react';

const App = (props) => {
    const { title } = props;
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
};

App.propTypes = {
    title: React.PropTypes.string
};

export default App;
