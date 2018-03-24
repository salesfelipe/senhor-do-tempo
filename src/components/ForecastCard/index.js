import React, { Component } from 'react'
import { Segment, Card, Grid, Flag, Label, Statistic, Icon } from 'semantic-ui-react';
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
                    { !loading &&
                    <iframe
                        src={`https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_KEY}&zoom=10&center=${forecast.coord.lat},${forecast.coord.lon}`}
                        width="inherit"
                        height="inherit"
                        frameBorder="0"
                        allowFullScreen></iframe>
                    }
                    <Card.Content>
                        <Segment>
                        <Label attached='top left'>
                            <Flag name='brazil' />
                            {city.name}
                        </Label>
                            <Statistic.Group>
                                <ForecastStats
                                    content={forecast.weather[0].main}
                                    color='grey'
                                    name='Clima'
                                />
                                <ForecastStats
                                    content={forecast.main.humidity + " %"}
                                    color='blue'
                                    name='Umidade'
                                />
                                <ForecastStats
                                    content={forecast.main.temp_min + " K"}
                                    color='orange'
                                    name='Temp. Mínima'
                                />
                                <ForecastStats
                                    content={forecast.main.temp_max + " K"}
                                    color='red'
                                    name='Temp. Máxima'
                                />
                            </Statistic.Group>
                        </Segment>
                    </Card.Content>
                </Card>
            </Segment>
        );
    }
}

export default ForecastCard;