import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import sample from '../../resources/api-call.sample.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('convert sample api call', () => {

  const appComponent = new App();

  const converted = appComponent.mapForecastInput(sample);
  const expected = {"coord": {"lat": -16.92, "lon": 145.77}, "stats": {"humidity": "74 %", "tempMax": "27 °C", "tempMin": "27 °C"}, "weather": {"description": "Nuvens esparsas", "icon": "https://openweathermap.org/img/w/03n.png"}};

  expect(converted.stats.humidity).toBe(expected.stats.humidity);

  expect(converted.stats.tempMax).toBe(expected.stats.tempMax);

  expect(converted.weather.icon).toBe(expected.weather.icon);
});
