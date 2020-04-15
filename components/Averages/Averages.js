import s from './Averages.scss'
import Termometer from "../Termometer";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Hero from "../Hero";

const months = ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const Averages = ({cities}) => {
    return (
        <div className={s.wrap}>
            <Hero
                title="Average temperatures"
                body="If click on the cards was not enough, here is the average temperature per month."
            />
            <Container className={s.tableWrap} maxWidth="md" component="section">
                <div className={s.table}>

                    <div className={s.tr}>
                        <div className={s.th}><Typography variant="subtitle1">City</Typography></div>
                        {months.map(month => (
                            <div key={month} className={s.th}><Typography variant="subtitle1">{month}</Typography></div>
                        ))}
                    </div>
                    {
                        cities.map(city => (
                            <div key={city.code} className={s.tr}>
                                <div className={s.td}>
                                    <Typography variant="subtitle1">{city.name}</Typography>
                                </div>
                                {
                                    city.weatherAvg.map((temperature, index) => (
                                        <div key={index} className={s.td}>
                                            <Termometer temperature={temperature} variant="subtitle1"/>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
};

export default Averages;