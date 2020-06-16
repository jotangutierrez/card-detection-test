import React from "react";
import Detector from "../../../src/Components/FranchiseDetector/detector";
import {shallow} from 'enzyme'


describe('<Detector />', () => {
  it('Test cardNumbers', () => {
    const wrapper = shallow(<Detector />);
    wrapper.find('cardNumber').simulate('change', {target: {value: '341234567890123'}});
    expect(wrapper.find('franchiseName').text()).to.equal('American Express');
  });
})
