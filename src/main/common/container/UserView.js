import React from 'react';
import User from '../components/User';

const UserView = props => {
    const { userId } = props.params;
    return (
        <User avatar={`/images/avatar-${userId}.gif`} />
    );
};

UserView.propTypes = {
    params: React.PropTypes.object.isRequired
};

export default UserView;
