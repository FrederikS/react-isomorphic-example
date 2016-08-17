import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import topicReducer from '../../common/reducers/topicReducer';

export default (preloadedState) => createStore(
    topicReducer,
    preloadedState,
    applyMiddleware(thunk)
);

