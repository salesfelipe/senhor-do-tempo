import React, { Component } from 'react';
import { Card, Grid, Search, Header, Divider } from 'semantic-ui-react';
import './style.css';

class MainCard extends Component {
    render() {
        return (
            <Grid className="App">
                <Grid.Column width={2} />
                <Grid.Column width={12} className="MainContainerCard">
                    <Card fluid>
                        <Card.Header className="CardHeader">
                            <Grid>
                                <Grid.Column width={8}>
                                    <Header as="h2">Sua cidade: </Header>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Search
                                        fluid
                                        noResultsMessage="Sem Resultados"
                                        {...this.props}
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
