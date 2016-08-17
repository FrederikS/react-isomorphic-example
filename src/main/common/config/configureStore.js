import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import topicReducer from '../../common/reducers/topicReducer';

export default (preloadedState) => createStore(
    topicReducer,
    preloadedState,
    applyMiddleware(
        promiseMiddleware()
    )
);

