import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { spacing } from "@material-ui/system";

const Termometer = ({ temperature, variant = "h5" }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      component="div"
    >
      <Box mx={0.5}>
        <Typography variant={variant} component="div">
          {temperature}°C
        </Typography>
      </Box>
    </Box>
  );
};

export default Termometer;
