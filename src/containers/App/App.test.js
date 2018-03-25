import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './index';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<AppContainer />', () => {
  it('searchs Campina Grande', () => {
    const componentWrapper = shallow(<AppContainer />);

    const campinaGrande = {
      "id": 3403642,
      "name": "Campina Grande",
      "country": "BR",
      "coord": {
        "lon": -35.881111,
        "lat": -7.23056
      }
    };

    expect(componentWrapper.state('searchValue')).toBe('');
    expect(componentWrapper.state('searchLoading')).toBe(false);

    // const component = new AppContainer();

    // 

    // component.handleSearchChange(null, { value: campinaGrande.name });

    // expect(component.state.searchValue).toBe(campinaGrande.name);
    // expect(component.state.searchLoading).toBe(true);

    // setTimeout(function () {
    //   if (newState == -1) {
    //     alert('VIDEO HAS STOPPED');
    //   }
    // }, 1000);
  })
});