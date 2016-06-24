import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './styles.css';

const Post = props => {
    const { date, message, poster } = props.data;
    return (
        <div className={styles.row}>
            <div className={styles.column}>
                {props.children}
                <p>{poster.name} am {date}</p>
            </div>
            <div>{message}</div>
        </div>
    );
};

Post.propTypes = {
    data: React.PropTypes.object,
    children: React.PropTypes.node
};

Post.defaultProps = {
    data: {}
};

export default withStyles(styles)(Post);
