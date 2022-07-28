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



// render(<Example />);

class CarouselModalComponent extends Component {
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
        <Carousel variant="dark">
            {Object.entries(myObj).map(([key, value]) => {
                // console.log(value.img)
                // console.log(value.title)
                // console.log(value.desc)
                return(
                    <Carousel.Item onClick={(e) => this.setState({show : true})}>
                        <img
                        className="d-block w-100 images"
                        src={value.img}
                        alt="Carousal Image"
                        />
                        <Carousel.Caption className="carouselCaption">
                            <h3>{value.title}</h3>
                        </Carousel.Caption>

                        <Modal
                            show={this.state.show}
                            onHide={() => this.setState({ show: false })}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title">
                                    {value.title}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {value.desc}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => this.setState({ show: false })}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </Carousel.Item>


                )
            })}
        </Carousel>
    );
    }
}

export default CarouselModalComponent;