import React from 'react';
import User from '../components/User';
import { IndexLink } from 'react-router';

const UserView = props => {
    const { userId } = props.params;
    return (
        <div>
            <User avatar={`/images/avatar-${userId}.gif`} />
            <IndexLink to="/">back</IndexLink>
        </div>
    );
};

UserView.propTypes = {
    params: React.PropTypes.object.isRequired
};

export default UserView;
