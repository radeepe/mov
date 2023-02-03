import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { getEventsList } from '../../Store/Actions/LatestMovies'
import { useNavigate } from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";
import '../HomePage/HomePage.css';

function Events() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const dispatch = useDispatch();
    const movies = useSelector((store) => store.Events.event);
    const fetchUpcomingMovies = () => {
        dispatch(getEventsList);
    }
    useEffect(() => {
        fetchUpcomingMovies();
    }, []);

    return (
        <>
            <div className="PageHeader"><strong> {'Events'} </strong></div>
            <Carousel responsive={responsive}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px" itemAriaLabel="event slider">
                {movies && movies.length ? movies.map((movie) => {
                    return < div > <Card
                        // border={variant.toLowerCase()}
                        //key={idx}
                        text={'dark'}
                        style={{ width: "90%" }}
                        className="m-2"
                    >
                        <Card.Header className="cardTitle" >{movie.title}</Card.Header>
                        <Card.Body>
                            {/* <Card.Title> Card Variant </Card.Title> */}
                            <Card.Text>
                                {movie.location}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                }) : "No Upcoming Movies Available"

                }
            </Carousel>
        </>
    );
}

export default Events;
