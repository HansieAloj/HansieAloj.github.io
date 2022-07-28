import Carousel from 'react-bootstrap/Carousel';
import ModalView from './Modal';
import './Carousel.css'

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
                    <img
                    className="d-block w-100 images"
                    src={value.img}
                    alt="Carousal Image"
                    />
                    <Carousel.Caption className="carouselCaption">
                        <h3>{value.title}</h3>
                        <p>{value.desc}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })}
    </Carousel>
  );
}

export default CarouselComponent;