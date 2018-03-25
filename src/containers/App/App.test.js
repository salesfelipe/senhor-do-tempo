import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './index';
import { shallow } from 'enzyme';

const campinaGrande = {
  "id": 3403642,
  "name": "Campina Grande",
  "country": "BR",
  "coord": {
    "lon": -35.881111,
    "lat": -7.23056
  }
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('searchs Campina Grande', () => {
  const componentWrapper = shallow(<AppContainer />);

  expect(componentWrapper.state('searchValue')).toBe('');
  expect(componentWrapper.state('searchLoading')).toBe(false);

  componentWrapper.instance().handleSearchChange(null, { value: campinaGrande.name });

  expect(componentWrapper.state('searchLoading')).toBe(true);
  expect(componentWrapper.state('searchValue')).toBe(campinaGrande.name);
})


it('resets search', () => {
  const componentWrapper = shallow(<AppContainer />);

  expect(componentWrapper.state('searchValue')).toBe('');
  expect(componentWrapper.state('searchLoading')).toBe(false);

  componentWrapper.setState({ searchLoading: true, select: campinaGrande, searchValue: campinaGrande.name });

  expect(componentWrapper.state('searchLoading')).toBe(true);
  expect(componentWrapper.state('searchValue')).toBe(campinaGrande.name);

  componentWrapper.instance().resetSearch();

  expect(componentWrapper.state('searchLoading')).toBe(false);
  expect(componentWrapper.state('searchValue')).toBe('');
  expect(componentWrapper.state('selected')).toBe(null);
})