import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../../pages/index';

describe('Index page', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
