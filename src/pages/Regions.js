import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/Regions.css';
import '../App.css';
import { Footer } from '../components/Footer.js';

import CarouselComponent from '../components/Carousel';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';
import CarouselOffcanvasComponent from '../components/CarouselOffcanvas';
import CarouselModalComponent from '../components/CarouselModal';
import CarouselCardComponent from '../components/CarouselCards';
import MultiCarouselComponent from '../components/MultiCarousel.js';




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


function Regions() {

    var myObject = {
        0: { img: "./images/carousel/img0.jpg", title: "Islands", desc: 'No matter where they are in the world, islands make everyone happy and calm.' },
        1: { img: "./images/carousel/img1.jpg", title: "Mountains", desc: '“The mountains are calling, and I must go.” John Muir perfectly sums up our feelings about these majestic natural wonders. Mountains have always been a source of awe and beauty, and sometimes we don\'t have the words to capture how much we admire them.' },
        2: { img: "./images/carousel/img2.jpg", title: "Beaches", desc: 'There’s nothing like a relaxing day at the beach to soak up all your worries. Just closing your eyes and imagining the soft sand caressing your toes as gentle waves lap the shore and the sun shines warmly down is enough to bring about a feeling of tranquillity.' },
        4: { img: "./images/carousel/img3.jpg", title: "Waterfalls", desc: 'Roaring and powerful, yet serene and calming, waterfalls are one of nature’s most magical creations. “There\'s no better place to find yourself than sitting by a waterfall and listening to its music” ― Roland R Kemler' },
    };

    return (
        <div class="Regions">

            <h1 class="banner">Popular Landscapes</h1>
            <br />

            {/* <div class="Carousel">
            <CarouselOffcanvasComponent obj={myObject}/>
        </div> */}

            {/* <div class="Carousel">
            <CarouselModalComponent obj={myObject}/>
        </div> */}

            {/* <div class="Carousel">
            <CarouselCardComponent obj={myObject}/>
        </div> */}

            <div class="Carousel">
                <MultiCarouselComponent />
            </div>

            <br /><br />
            <h1 class="banner">Top Rated Places</h1>

            <div class="Cards">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./images/topRated/tajMahal.jpg" class="cardImage" />
                    <Card.Body>
                        <Card.Title>Taj Mahal</Card.Title>
                        <Card.Text>
                            Taj Mahal represents the finest architectural and artistic achievement through perfect harmony and excellent craftsmanship. It is a masterpiece of architectural style in conception, treatment and execution.
                        </Card.Text>
                        <Button variant="primary">View</Button>
                        <div class="space" />
                        <Button variant="info">
                            Rating <Badge bg="dark">4.6⭐</Badge>
                            <span className="visually-hidden">unread messages</span>
                        </Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./images/topRated/statueOfLiberty.jpg" class="cardImage" />
                    <Card.Body>
                        <Card.Title>The Statue of Liberty</Card.Title>
                        <Card.Text>
                            The Statue of Liberty is one of the most well-known and beloved monuments in America. It stands to welcome in immigrants to New York Harbor and to let people who are returning home know that they have reached America.
                        </Card.Text>
                        <Button variant="primary">View</Button>
                        <div class="space" />
                        <Button variant="info">
                            Rating <Badge bg="dark">4.7⭐</Badge>
                            <span className="visually-hidden">unread messages</span>
                        </Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./images/topRated/niagaraFalls.jpg" class="cardImage" />
                    <Card.Body>
                        <Card.Title>Niagara Falls</Card.Title>
                        <Card.Text>
                            What makes Niagara Falls so impressive is the amount of water flowing over. Most of the tallest falls in the world have very little water flowing over them. It's the combination of height and volume that makes Niagara Falls so breathtaking.
                        </Card.Text>
                        <Button variant="primary" className="CardButton">View</Button>
                        <div class="space" />
                        <Button variant="info">
                            Rating <Badge bg="dark">4.8⭐</Badge>
                            <span className="visually-hidden">unread messages</span>
                        </Button>
                    </Card.Body>
                </Card>
            </div>

            <Footer class="Footer" />
        </div>
    );
}

export default Regions;