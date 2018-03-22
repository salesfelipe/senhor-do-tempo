import React, { Component } from 'react';
import { Card, Grid, Search, Label } from 'semantic-ui-react';
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
                searchResults
            } = this.props;

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
                    <ForecastCard />
                </Grid.Column>
                <Grid.Column width={2} />
            </Grid>
        );
    }
}

export default App;
