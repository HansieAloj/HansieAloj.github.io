import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Carousel.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
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

export default function MultiCarouselComponent(){
    return(
        
    <Carousel
      swipeable={true}
      // draggable={true}
      showDots={true}
      responsive={responsive}
      // ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all 1"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      
      <img class="multiCarouselImg" src="./images/carousel/img0.jpg"/>

      <img class="multiCarouselImg" src="./images/carousel/img1.jpg"/>

      <img class="multiCarouselImg" src="./images/carousel/img2.jpg"/>

      <img class="multiCarouselImg" src="./images/carousel/img3.jpg"/>

      <img class="multiCarouselImg" src="./images/carousel/img4.jpg"/>

    </Carousel>
    );
}
