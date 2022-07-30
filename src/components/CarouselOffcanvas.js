import Carousel from 'react-bootstrap/Carousel';
import ModalView from './Modal';
import './Carousel.css'
// import { render } from 'react-dom';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { render } from '@testing-library/react';
import { Component } from 'react';

import Wobble from 'react-reveal/Wobble';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';
import Spin from 'react-reveal/Spin';
import Bounce from 'react-reveal/Bounce';
import Flash from 'react-reveal/Flash';
import Reveal from 'react-reveal/Reveal';
import Jello from 'react-reveal/Jello';
import Roll from 'react-reveal/Roll';
import Rotate from 'react-reveal/Rotate';
import Pulse from 'react-reveal/Pulse';






class CarouselOffcanvasComponent extends Component {
    constructor() {
        super();

        this.state = {
            show: false
        };
    }


    render(){
    var myObj = this.props.obj;
    // console.log(myObj)
    return (
        <Carousel fade variant="dark">
            {myObj.img.map((i) => {
                return(
                    <Carousel.Item>
                        <Rotate right>
                        <img
                        className="d-block w-100 images"
                        src={i}
                        alt="Carousel Image"
                        />
                        </Rotate>
                        
                        <Pulse>
                        <Carousel.Caption className="carouselCaption">
                            <h3>{myObj.title}</h3>
                            <Button variant="dark" onClick={(e) => this.setState({show : true})}>View Info</Button>
                            <div class="space"/>
                            <Button variant="dark" href={myObj.url} target='_blank'>View 360°</Button>
                        </Carousel.Caption>
                        </Pulse>

                        <Offcanvas show={this.state.show} onHide={(e) => this.setState({show : false})} responsive="lg" placement='start' keyboard="true">
                            <Offcanvas.Header closeButton onClick={(e) => this.setState({show : false})}>
                            <Offcanvas.Title>{myObj.title}</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                {myObj.desc}
                            </Offcanvas.Body>
                            {/* <Button variant='primary' onClick={(e) => this.setState({show : false})}>Close</Button> */}
                        </Offcanvas>

                    </Carousel.Item>


                )
            })}
        </Carousel>
    );
    }
}

export default CarouselOffcanvasComponent;