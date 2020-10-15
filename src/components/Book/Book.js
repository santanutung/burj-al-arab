
import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';

const Book = () => {
    const { bedType } = useParams();
    const [logedinUser, setLogedinUser] = useContext(UserContext);

    const [selectedDate, setSelectedDate] = useState({
        checkInDate: new Date(),
        checkOutDate: new Date(),
    });



    const handleCheckInDateDate = (date) => {
        const newDate = { ...setSelectedDate }
        newDate.checkInDate = date
        setSelectedDate();
    }
    const handleCheckOutDateDate = (date) => {
        const newDate = { ...setSelectedDate }
        newDate.checkOutDate = date
        setSelectedDate();
    }

    const handleBooking= () => {
        
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1> Hello ,{logedinUser.name} Let's book a {bedType} Rooms.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="checkInDate"
                        value={selectedDate.checkInDate}
                        onChange={handleCheckInDateDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="checkOutDate"
                        format="dd/MM/yyyy"
                        value={selectedDate.checkOutDate}
                        onChange={handleCheckOutDateDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                </Grid>
            </MuiPickersUtilsProvider>

            <Button onClick={handleBooking} variant="contained" color="secondary">book now</Button>
        </div>
    );
};

export default Book;