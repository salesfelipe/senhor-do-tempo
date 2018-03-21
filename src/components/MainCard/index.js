import React, { Component } from 'react';
import { Card, Grid, Search, Header, Divider } from 'semantic-ui-react';
import './style.css';

class MainCard extends Component {
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
            <Grid className="App">
                <Grid.Column width={2} />
                <Grid.Column width={12} className="MainContainerCard">
                    <Card fluid>
                        <Card.Header className="CardHeader">
                            <Grid>
                                <Grid.Column width={6}>
                                    <Header as="h2">Pesquisa por Cidade: </Header>
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <Search
                                        fluid
                                        loading={searchLoading}
                                        onResultSelect={onSearchSelect}
                                        onSearchChange={onSearch}
                                        results={searchResults}
                                        value={searchValue}
                                        noResultsMessage="Sem Resultados"
                                    />
                                </Grid.Column>
                            </Grid>
                        </Card.Header>
                        <Card.Content>
                            <Grid>
                                <Divider />

                                <Grid.Column width={4}>
                                </Grid.Column>
                                <Grid.Column width={12}>
                                </Grid.Column>
                            </Grid>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column width={2} />
            </Grid>
        );
    }
}

export default MainCard;
