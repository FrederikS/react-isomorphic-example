import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import PostForm from '../../../main/common/components/PostForm';

chai.should();
chai.use(chaiEnzyme());

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
        const wrapper = mount(<PostForm topic={topic} />, {
            context: {
                insertCss: () => {},
                router: { }
            },
            childContextTypes: { router: React.PropTypes.object.isRequired }
        });
        wrapper.should.have.tagName('form');
    });
});
