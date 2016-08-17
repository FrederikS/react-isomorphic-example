import toggleTopic from '../../../main/common/actions/toggleTopic';
import chai from 'chai';
chai.should();

describe('toggle-topic-action-creator', () => {
    it('should create an toggle-topic-action', () => {
        const topicId = 34;
        toggleTopic(topicId).should.deep.equal({
            type: 'TOGGLE_TOPIC',
            topicId
        });
    });
});
