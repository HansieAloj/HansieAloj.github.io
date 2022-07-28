import Carousel from 'react-bootstrap/Carousel';
import ModalView from './Modal';
import './Carousel.css'
// import { render } from 'react-dom';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { render } from '@testing-library/react';
import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';



// render(<Example />);

class CarouselCardComponent extends Component {
    constructor() {
        super();

        this.state = {
            show: false
        };
    }


    render(){
    var myObj = this.props.obj;

    // const [show, setShow] = useState(false);
    
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    return (
        <Carousel variant="dark" class="cardCarousel">
            {Object.entries(myObj).map(([key, value]) => {
                // console.log(value.img)
                // console.log(value.title)
                // console.log(value.desc)
                return(
                    <Carousel.Item>
                        {/* <img
                        className="d-block w-100 images"
                        src={value.img}
                        alt="Carousal Image"
                        />
                        <Carousel.Caption className="carouselCaption">
                            <h3>{value.title}</h3>
                        </Carousel.Caption> */}

                        <Card>
                            <Card.Img variant="top" src={value.img} class="carouselCardImage"/>
                            <Card.Body>
                            <Card.Text>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </Card.Text>
                            </Card.Body>
                        </Card>

                    </Carousel.Item>


                )
            })}
        </Carousel>
    );
    }
}

export default CarouselCardComponent;