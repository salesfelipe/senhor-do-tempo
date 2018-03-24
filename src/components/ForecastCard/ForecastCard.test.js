import React from 'react';
import ReactDOM from 'react-dom';
import ForecastCard from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ForecastCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
