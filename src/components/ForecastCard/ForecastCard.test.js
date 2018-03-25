import React from 'react';
import ReactDOM from 'react-dom';
import ForecastCard from './index';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ForecastCard forecast={{coord:{}, weather:{}, stats: {}}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly: loading false', () => {
  const tree = renderer
    .create(<ForecastCard forecast={{coord:{}, weather:{}, stats: {}, loading: false}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly: loading true', () => {
  const tree = renderer
    .create(<ForecastCard forecast={{coord:{}, weather:{}, stats: {}, loading: true}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});