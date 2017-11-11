import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<top-nav />', () => {
    it('Renders without crashing', () => {
        shallow(<nav />);
    })
})