import React, { Component } from 'react'
import { Segment, Card, Flag, Label, Statistic, Grid } from 'semantic-ui-react';
import { GOOGLE_MAPS_KEY } from '../../utils/keys'

const ForecastStats = ({ content, color, name }) => (
    <Statistic>
        <Statistic.Value>
            <Label color={color}>
                {content}
            </Label>
        </Statistic.Value>
        <Statistic.Label>
            {name}
        </Statistic.Label>
    </Statistic>
)


class ForecastCard extends Component {
    render() {
        const { city, forecast, loading } = this.props;

        return (
            <Segment loading={loading}>
                <Card fluid>
                    {!loading &&
                        <iframe
                            src={`https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_KEY}&zoom=10&center=${forecast.coord.lat},${forecast.coord.lon}`}
                            width="inherit"
                            height="inherit"
                            frameBorder="0"
                            title="city-map"
                            allowFullScreen />
                    }
                    <Card.Content>
                        <Segment>
                            <Label attached='top left'>
                                <Flag name='brazil' />
                                {city.name}
                            </Label>
                            <Grid columns="4">
                                <Grid.Column>
                                    <ForecastStats
                                        content={forecast.weather}
                                        color='grey'
                                        name='Céu'
                                    />
                                </Grid.Column>
                                <Grid.Column>
                                    <ForecastStats
                                        content={forecast.stats.humidity}
                                        color='blue'
                                        name='Umidade'
                                    />
                                </Grid.Column>
                                <Grid.Column>
                                    <ForecastStats
                                        content={forecast.stats.tempMin}
                                        color='orange'
                                        name='Temp. Mínima'
                                    />
                                </Grid.Column>
                                <Grid.Column>
                                    <ForecastStats
                                        content={forecast.stats.tempMax}
                                        color='red'
                                        name='Temp. Máxima'
                                    />
                                </Grid.Column>
                            </Grid>
                        </Segment>
                    </Card.Content>
                </Card>
            </Segment>
        );
    }
}

export default ForecastCard;