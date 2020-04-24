import s from "./Averages.scss";
import Termometer from "../Termometer";
import React from "react";
import Container from "@material-ui/core/Container";
import Hero from "../Hero";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import PropTypes from "prop-types";

const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const Averages = ({ cities }) => {
  return (
    <div className={s.wrap}>
      <Hero
        title="Average temperatures"
        body="If click on the cards was not enough, here is the average temperature per month."
      />
      <Container className={s.tableWrap} maxWidth="lg" component="section">
        <TableContainer component={Paper}>
          <Table className={s.table} aria-label="simple table">
            <TableHead className={s.th}>
              <TableRow>
                <TableCell>City</TableCell>
                {months.map((month) => (
                  <TableCell key={month}>{month}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {cities.map((city) => (
                <TableRow key={city.code}>
                  <TableCell component="th" scope="row">
                    {city.name}
                  </TableCell>
                  {city.weatherAvg.map((temperature, index) => (
                    <TableCell key={index} align="center">
                      <Termometer
                        temperature={temperature}
                        variant="subtitle1"
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default Averages;

Averages.propTypes = {
  cities: PropTypes.array,
};
