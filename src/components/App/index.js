import React, { Component } from 'react';
import { Grid, Search, Label, Transition } from 'semantic-ui-react';
import { fromKelvin2Celsius, translateWeather } from '../../utils/functions';
import ForecastCard  from '../ForecastCard'

import './style.css';

class App extends Component {
    resultRenderer = ({ name }) => <Label content={name} />

    mapForecastInput(forecast) {

        if(forecast == null)
            return null;

        return {
            coord: forecast.coord,
            weather: translateWeather(forecast.weather[0].description),
            stats: {
                tempMin: fromKelvin2Celsius(forecast.main.temp_min),
                tempMax: fromKelvin2Celsius(forecast.main.temp_max),
                humidity: forecast.main.humidity + " %"
            }
        };
    }

    render() {
        const
            {
                onSearch,
                onSearchSelect,
                searchLoading,
                searchValue,
                searchResults,
                city,
                data,
                loading
            } = this.props;

        const forecast = this.mapForecastInput(data);

        const visible = (city != null) && (forecast != null);

        return (
            <Grid className="app">
                <Grid.Column width={2} />
                <Grid.Column width={12}>
                    <Search
                        className="search"
                        fluid
                        loading={searchLoading}
                        onResultSelect={onSearchSelect}
                        onSearchChange={onSearch}
                        results={searchResults}
                        value={searchValue}
                        noResultsMessage="Sem Resultados"
                        resultRenderer={this.resultRenderer}
                    />
                    <Transition visible={visible} animation='slide up' duration={500}>
                        <div>
                            {city && forecast && <ForecastCard city={city} forecast={forecast} loading={loading}/>}
                        </div>
                    </Transition>
                </Grid.Column>
                <Grid.Column width={2} />
            </Grid>
        );
    }
}

export default App;
