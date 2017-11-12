import React from 'react';
import {shallow} from 'enzyme';

import Game from './game.js';

describe('<Game/>', ()=>{
    it('Renders without crashing', () => {
        shallow(<Game />);
    });
    it('Starts a new game', ()=>{
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses: [1,2,3,4,5],
            feedback:'Good guesses',
            correctAnswer: -1
        });
        wrapper.instance().newGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    });
    
})