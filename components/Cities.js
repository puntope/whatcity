import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import City from "./City/City";
import PropTypes from "prop-types";

const Cities = ({ cities, onChangeCity, active }) => (
  <Container maxWidth="md" component="section">
    <Grid container spacing={5} alignItems="flex-end">
      {cities.map((city) => (
        <Grid item key={city.name} xs={12} md={4}>
          <City
            isActive={city.code === active}
            city={city}
            onChangeStatus={(status) => onChangeCity(status)}
          />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Cities;

Cities.propTypes = {
  cities: PropTypes.array,
  onChangeCity: PropTypes.func,
  active: PropTypes.string,
};
