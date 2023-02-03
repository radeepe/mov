import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";

function NotFound() {
    



    return (
        <>
            <div> Not Found Page</div>
           
        </>
    );
}

export default NotFound;
