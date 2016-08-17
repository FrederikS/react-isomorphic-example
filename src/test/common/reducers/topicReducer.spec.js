import chai from 'chai';
import deepFreeze from 'deep-freeze';
import topicReducer from '../../../main/common/reducers/topicReducer';

chai.should();

describe('topic reducer', () => {
    it('should return the initial state', () => {
        const initialState = topicReducer(undefined, {});
        initialState.should.deep.equal({});
    });

    it('should handle add topics', () => {
        const initialState = deepFreeze({});
        const newState = topicReducer(initialState, {
            type: 'ADD_TOPICS',
            topics: []
        });

        newState.should.deep.equal({
            topics: []
        });
    });

    it('should handle add topics without mutating state', () => {
        const initialState = deepFreeze({
            topics: [
                {
                    id: 1,
                    subject: 'Jelly Beans Tootsie Roll Powder Gummies Carrot Cake Macaroon Donut',
                    posts: [
                        {
                            message: 'Gummies dessert.',
                            date: '1. Mai 12:23',
                            poster: {
                                name: 'ChubberGhouly',
                                id: 2314
                            }
                        }
                    ]
                }
            ]
        });

        const expectedTopics = [
            {
                id: 2,
                subject: 'Carrot Cake Macaroon Donut',
                posts: [
                    {
                        message: 'dessert.',
                        date: '1. Mai 12:23',
                        poster: {
                            name: 'ChubberGhouly',
                            id: 2314
                        }
                    }
                ]
            }
        ];

        const newState = topicReducer(initialState, {
            type: 'ADD_TOPICS',
            topics: expectedTopics
        });

        newState.should.deep.equal({
            topics: expectedTopics
        });
    });

    it('should handle add post', () => {
        const initialState = deepFreeze({
            topics: [
                {
                    id: 1,
                    subject: 'Jelly Beans Tootsie Roll Powder Gummies Carrot Cake Macaroon Donut',
                    posts: []
                }
            ]
        });
        const post = {
            message: 'dessert.',
            date: '1. Mai 12:23',
            poster: {
                name: 'ChubberGhouly',
                id: 2314
            }
        };
        const newState = topicReducer(initialState, {
            type: 'ADD_POST',
            topicId: 1,
            post
        });

        newState.should.deep.equal({
            topics: [
                {
                    id: 1,
                    subject: 'Jelly Beans Tootsie Roll Powder Gummies Carrot Cake Macaroon Donut',
                    posts: [
                        post
                    ]
                }
            ]
        });
    });
});
