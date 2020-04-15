import React from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import WeatherIcon from "../WeatherIcon";
import Termometer from "../Termometer";
import FlightInfo from "../FlightInfo";
import CircularProgress from "@material-ui/core/CircularProgress";

import s from './City.scss'
import classnames from "classnames";

const City = ({city, onChangeStatus, isActive}) => {

    return (
        <div className={classnames(s.card, isActive ? s.cardActive : s.cardInactive)}>
            <Card
                onClick={() => onChangeStatus(city)}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    src={city.picture}
                    title={city.name}
                />
                <CardContent>
                    <Typography variant="h4" component="h3">
                        {city.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="small">
                        {city.country}
                    </Typography>
                    <Box display="flex" alignItems="flex-end" justifyContent="space-between">
                        <Box display="flex" alignItems="center" justifyContent="center">
                            {city.weather ? (
                                <React.Fragment>
                                    <WeatherIcon status={city.weather.status.toLowerCase()}/>
                                    <Termometer temperature={city.weather.temperature} />
                                </React.Fragment>
                            ) : (
                                <CircularProgress size={32} />
                            ) }
                        </Box>
                        <div>
                            {city.flights && <FlightInfo flight={city.flights} />}
                        </div>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}

export default City