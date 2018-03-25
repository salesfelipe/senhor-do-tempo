import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Search, Label, Transition, Flag } from 'semantic-ui-react';
import { fromKelvin2Celsius, translateWeather } from '../../utils/functions';
import ForecastCard from '../ForecastCard';

import './style.css';

class App extends Component {
    resultRenderer = ({ name }) => {
        return (
            <Label>
                <Flag name='brazil' />
                {name}
            </Label>
        );
    }

    mapForecastInput(forecast) {

        if (forecast == null)
            return null;

        return {
            coord: forecast.coord,
            weather: {
                description: translateWeather(forecast.weather[0].description),
                icon: "http://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png"
            },
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
                            {city && forecast && <ForecastCard city={city} forecast={forecast} loading={loading} />}
                        </div>
                    </Transition>
                </Grid.Column>
                <Grid.Column width={2} />
            </Grid>
        );
    }
}

const coordPropType = PropTypes.shape({
    lon: PropTypes.number,
    lat: PropTypes.number
});

App.propTypes = {
    resultRenderer: PropTypes.func,
    mapForecastInput: PropTypes.func,
    onSearch: PropTypes.func,
    onSearchSelect: PropTypes.func,
    searchLoading: PropTypes.bool,
    searchValue: PropTypes.string,
    searchResults: PropTypes.array,
    
    city: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        country: PropTypes.string,
        coord: coordPropType
    }),

    data: PropTypes.shape({
        coord: coordPropType,
    
        weather: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            description: PropTypes.string,
            icon: PropTypes.string
        })),
    
        main: PropTypes.shape({
            temp: PropTypes.number,
            humidity: PropTypes.number,
            temp_max: PropTypes.number,
            temp_min: PropTypes.number
        })
    }),

    loading: PropTypes.bool
};

export default App;
