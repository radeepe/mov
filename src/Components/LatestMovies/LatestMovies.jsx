import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { getMoviesList, selectedMovie } from '../../Store/Actions/LatestMovies'
import { useNavigate } from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";
import './LatestMovies.css';

function
    LatestMovies({ title }) {
    const dispatch = useDispatch();
    //
    const navigate = useNavigate();
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
    const movies = useSelector((store) => store.Movie.movie);
    const fetchMovies = () => {
        dispatch(getMoviesList);
    }
    useEffect(() => {
        fetchMovies();
    }, []);


    const movieDetails = (movie) => {

        movie &&
            navigate(`/movieDetails/${movie.id}`);
    }

    return (
        <>
            <div className="PageHeader"> <strong>{title ? title : 'Latest Movies'}</strong></div>
            <Carousel responsive={responsive} dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px" itemAriaLabel="Movie slider">
                {movies && movies.length ? movies.map((movie) => {
                    return < div > <Card
                        // border={variant.toLowerCase()}
                        //key={idx}
                        text={'dark'}
                        style={{ width: "90%" }}
                        className="m-2"
                    >
                        <Card.Header className="cardTitle" onClick={() => movieDetails(movie)}>{movie.title}</Card.Header>
                        <Card.Body>
                            {/* <Card.Title> Card Variant </Card.Title>
                        <Card.Text>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs
                        </Card.Text> */}
                            <input className="btnText" type="button" value="Book Now" onClick={() => movieDetails(movie)} />
                        </Card.Body>
                    </Card>
                    </div>
                }) : "No Movies Available"

                }
            </Carousel>
        </>
    );
}

export default LatestMovies;
