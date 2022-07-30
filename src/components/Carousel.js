import Carousel from 'react-bootstrap/Carousel';
import ModalView from './Modal';
import './Carousel.css'

import React from 'react';
import Roll from 'react-reveal/Roll';
import Flip from 'react-reveal/Flip';


const CarouselComponent = (props) => {
    // console.log(props.obj)
    var myObj = props.obj;
  return (
    <Carousel variant="dark">
        {Object.entries(myObj).map(([key, value]) => {
            // console.log(value.img)
            // console.log(value.title)
            // console.log(value.desc)
            return(
                <Carousel.Item onClick={()=><ModalView/>}>
                    <Roll left>
                    <img
                    className="d-block w-100 images"
                    src={value.img}
                    alt="Carousal Image"
                    />
                    </Roll>
                    <Roll right>
                    <Carousel.Caption className="carouselCaption">
                        <h3>{value.title}</h3>
                        <p>{value.desc}</p>
                    </Carousel.Caption>
                    </Roll>

                </Carousel.Item>
            )
        })}
    </Carousel>
  );
}

export default CarouselComponent;