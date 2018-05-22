import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../../pages/index';

describe('Application', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
