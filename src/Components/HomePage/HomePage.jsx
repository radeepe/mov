import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { getMoviesList } from '../../Store/Actions/LatestMovies'
import { useNavigate } from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";
import './HomePage.css';
import LatestMovies from "../LatestMovies/LatestMovies";

function HomePage() {


    return (
        <>
            <LatestMovies title={'Reccomended Movies'}/>
        </>
    );
}

export default HomePage;
