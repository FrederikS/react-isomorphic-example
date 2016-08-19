import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
import PostForm from '../../../main/common/components/PostForm';

chai.should();
chai.use(chaiEnzyme());
chai.use(sinonChai);

const mountWithContext = (node, router = {}) => mount(node, {
    context: {
        insertCss: () => {
        },
        router
    },
    childContextTypes: { router: React.PropTypes.object.isRequired }
});

describe('post-form component', () => {
    it('should render a form', () => {
        const topic = {
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
        };
        const wrapper = mountWithContext(<PostForm topic={topic} />);
        wrapper.should.have.tagName('form');
    });

    it('should push addPost route after form submit', () => {
        const topic = {
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
        };
        const router = { push: spy() };
        const wrapper = mountWithContext(<PostForm topic={topic} />, router);
        wrapper.find('textarea').get(0).value = 'text';
        wrapper.find('form').simulate('submit');

        router.push.should.have.been.calledOnce;
        router.push.should.have.been.calledWith({
            pathname: 'addPost',
            query: {
                topicId: 1,
                message: 'text'
            }
        });
    });
});
