import React from 'react';

const TopicView = (props) => {
    const { collapsed, subject, id } = props.topic;
    return (
        <article>
            <h2 onClick={() => props.onClick(id)}>{subject}</h2>
            {collapsed ? false : props.children}
        </article>
    );
};

TopicView.propTypes = {
    topic: React.PropTypes.object,
    children: React.PropTypes.node,
    onClick: React.PropTypes.func
};

export default TopicView;
