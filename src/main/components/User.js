import React from 'react';

const User = props => {
    const { avatar, name } = props;
    return <img src={avatar} title={name} alt={name} />;
};

User.propTypes = {
    avatar: React.PropTypes.string,
    name: React.PropTypes.string
};

export default User;
