import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Card, Image, Label, Statistic, Grid } from 'semantic-ui-react';
import { GOOGLE_MAPS_KEY } from '../../utils/keys';
import './style.css';

const ForecastStats = ({ content, color, name, icon }) => (
    <Statistic>
        <Statistic.Value>
            <Label color={color} image className="labelFont">
                <Image src={icon} />
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
        const { forecast, loading } = this.props;

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
                            <Grid columns="4">
                                <Grid.Column>
                                    <ForecastStats
                                        content={forecast.weather.description}
                                        color='grey'
                                        icon={forecast.weather.icon}
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
ForecastCard.propTypes = {
    forecast: PropTypes.shape({
        coord: PropTypes.shape({
            lon: PropTypes.number,
            lat: PropTypes.number
        }),
        weather: PropTypes.shape({
            icon: PropTypes.string,
            description: PropTypes.string
        }),
        stats: PropTypes.shape({
            tempMax: PropTypes.string,
            tempMin: PropTypes.string,
            humidity: PropTypes.string
        })
    }),
    loading: PropTypes.bool
}

export default ForecastCard;