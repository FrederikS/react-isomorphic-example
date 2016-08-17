import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import chai from 'chai';
import fetchTopics from '../../../main/common/actions/fetchTopics';

chai.should();

describe('fetch-topics async action-creator', () => {
    const mockStore = configureMockStore([thunk]);

    afterEach(() => {
        nock.cleanAll();
    });

    it('should create an fetch-topics-action', (done) => {
        nock('http://localhost:3001')
            .get('/topics')
            .reply(200, []);

        const store = mockStore({});

        store.dispatch(fetchTopics())
            .then(() => {
                store.getActions().should.deep.equal([
                    { type: 'ADD_TOPICS', topics: [] }
                ]);
                done();
            })
            .catch(e => done(e));
    });
});
