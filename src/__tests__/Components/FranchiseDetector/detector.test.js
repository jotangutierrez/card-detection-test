import React from "react";
import Detector from "../../../Components/FranchiseDetector/detector";
import {shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('<Detector />', () => {
  it('Test cardNumbers', () => {
    const wrapper = shallow(<Detector />);
    wrapper.find('#cardNumber').simulate('change', {target: {value: '341234567890123'}});
    expect(wrapper.find('#franchiseName').text()).toBe('American Express');
  });
})
