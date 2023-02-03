import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { Dropdown, Card, Row, Col, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import QRCodeBuilder from '../QRCodeBuilder'
import "react-multi-carousel/lib/styles.css";
import './MovieDetails.css'

function MovieDetails() {
    const params = useParams();
    const { id } = params
    const movies = useSelector((state) => state.Movie.movie);
    const selMov = movies.filter((m) => {
        return m.id === id;
    })
    const [booking, showBooking] = useState(false);
    const [bookingConfirmation, showConfirmation] = useState(false);
    const bookTicket = () => {
        showBooking(true);
        bookingConfirmation(false);
    }
    let today = new Date();
    let day = today.getUTCDate()
    let month = today.getUTCMonth() + 1;
    let year = today.getUTCFullYear();
    let maxDay = today.getUTCDate() + 4;

    day = today.getHours() > 19 ? today.getUTCDate() + 1 : today.getUTCDate();

    let currDateforpicker = year + '-' + (month < 10 ? `0${month}` : month) + "-" + (day < 10 ? `0${day}` : day);
    let maxDateforpicker = year + '-' + (month < 10 ? `0${month}` : month) + "-" + (maxDay < 10 ? `0${maxDay}` : maxDay);
    const [selectedDate, setSelectedDate] = useState(currDateforpicker);
    const handleDate = (dateSelected) => {
        setSelectedDate(dateSelected);
    }
    const [selectedTime, setSelectedTime] = useState('Time');
    const handleTimeChange = (e) => {
        setSelectedTime(e.target.innerText);
    }
    const [selectedSeat, setselectedSeat] = useState('Seat');
    const handleSeatChange = (e) => {
        setselectedSeat(e.target.innerText);
    }

    const bookTicketConfirmation = () => {
        showConfirmation(true);
        showBooking(false);
    }
    return (
        <div>
            {!booking && !bookingConfirmation && <><header className="PageHeader"><strong>Moview Details</strong></header>
                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td rowSpan="3"><img className="images" alt="movieImage" src={selMov.length && selMov[0].src} /></td>
                            <td>{selMov.length && selMov[0].title}</td>
                            <td>Release Date - {selMov.length && selMov[0].releaseDate}</td>
                        </tr>
                        <tr>
                            <td colspan="2">{selMov.length && selMov[0].duration}</td>
                        </tr>
                        <tr>
                            <td colspan="2">{selMov.length && selMov[0].ratings} star</td>
                        </tr>
                        <tr>
                            <td colspan="3"><input className="btnText" type="button" id="book" value="Book Now" onClick={() => bookTicket()}></input></td>
                        </tr>
                    </tbody>
                </table></>}
            {booking && !bookingConfirmation && <><header className="PageHeader"><strong>Book Seat</strong></header> <table class="table table-bordered">
                <tbody>
                    <tr>
                        <td colspan="2"><input type="date" placeholder="Select a date"
                            min={currDateforpicker} max={maxDateforpicker} value={selectedDate} onChange={(e) => handleDate(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td colspan="2"><Dropdown>
                            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                {selectedTime}
                            </Dropdown.Toggle>
                            <Dropdown.Menu onClick={(e) => handleTimeChange(e)}>
                                <Dropdown.Item key="1" id="1">11AM</Dropdown.Item>
                                <Dropdown.Item key="2" id="2">2PM</Dropdown.Item>
                                <Dropdown.Item key="3" id="3">5PM</Dropdown.Item>
                                <Dropdown.Item key="4" id="4">8PM</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown></td>
                    </tr>
                    <tr>
                        <td colspan="2"><Dropdown>
                            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                {selectedSeat}
                            </Dropdown.Toggle>

                            <Dropdown.Menu onClick={(e) => handleSeatChange(e)}>
                                <Dropdown.Item key="1" id="1">1</Dropdown.Item>
                                <Dropdown.Item key="2" id="2">2</Dropdown.Item>
                                <Dropdown.Item key="3" id="3">3</Dropdown.Item>
                                <Dropdown.Item key="4" id="4">4</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>200/seat</td>
                    </tr>
                    <tr>
                        <td colspan="3">{selectedTime !== "Time" && selectedSeat !== "Seat" && <input className="btnText" type="button" id="confirm" value="Book Ticket" onClick={() => bookTicketConfirmation()}></input>}</td>
                    </tr>
                </tbody>
            </table></>}
            {!booking && bookingConfirmation && <><header className="PageHeader"><strong>Ticket Confirmation</strong></header>
                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td rowSpan="2"><QRCodeBuilder text={`${selMov.length && selMov[0].title}${selectedDate}${selectedTime}${selectedSeat}`} /></td>
                            <td><strong>{selMov.length && selMov[0].title}</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Date :{selectedDate} | Time : {selectedTime} | Booked seat(s): {selectedSeat} Price: {selectedSeat * 200}/-</strong></td>
                        </tr>
                    </tbody>
                </table></>}
        </div>
    );
}

export default MovieDetails;
