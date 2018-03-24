import React, { Component } from 'react';
import { Grid, Search, Label, Transition } from 'semantic-ui-react';
import ForecastCard  from '../ForecastCard'

import './style.css';

class App extends Component {
    resultRenderer = ({ name }) => <Label content={name} />

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

        let visible = city != null;

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
                            {city && <ForecastCard city={city} forecast={data} loading={loading}/>}
                        </div>
                    </Transition>
                </Grid.Column>
                <Grid.Column width={2} />
            </Grid>
        );
    }
}

export default App;
