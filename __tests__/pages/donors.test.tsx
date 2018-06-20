import * as React from 'react';
import { shallow } from 'enzyme';
import Donors from '../../pages/donors';

describe('Index page', () => {
  it('renders without crashing', () => {
    shallow(<Donors />);
  });
});
