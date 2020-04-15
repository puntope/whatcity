import {mdiAirplane} from '@mdi/js';
import Icon from "@mdi/react";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const FlightInfo = ({flight}) => {
        return (
            <Box display="flex" flexDirection="column" alignItems="flex-end">

                    <Typography variant="h5" component="div">
                        <Icon size={.8} path={mdiAirplane} title="Flight from" />
                        { flight.price } €
                    </Typography>
            </Box>
        )
}

export default FlightInfo;