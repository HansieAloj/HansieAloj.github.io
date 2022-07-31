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

import Accordion from 'react-bootstrap/Accordion';

import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';
import Jello from 'react-reveal/Jello';
import Flip from 'react-reveal/Flip';
import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';
import Flash from 'react-reveal/Flash';





function Regions() {

    return (

        <div class="Regions">
            <br />
            <div class="regionDiv">

                
                <h1 class="banner"><Flash>Incredible India!</Flash></h1>
                

                <br />

                <Zoom>
                <div class="video">
                    <div className="video-responsive">
                        <iframe
                            width="853"
                            height="480"
                            src="https://www.youtube.com/embed/VVsC2fD1BjA"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>
                </div>
                </Zoom>

                <br />
                <div class="info">
                <Slide left>
                    <br />
                    <Button className='buttonAcc' variant="dark" href='https://www.incredibleindia.org/content/incredible-india-v2/en.html' target='_blank'><b>More Info</b></Button>
                    <br />

                    <br />
                    <Accordion defaultActiveKey="0" className="accordian">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><b>Why Travel to India?</b></Accordion.Header>
                            <Accordion.Body className="accordianItem">
                                India is a land that has a rich ancient history and deep cultural roots. A visit to India is unlike any other place one can visit in the world. Indian customs and traditions have been revered by most of the travelers who have visited the country and the vast range of geographical locations in India has made it one of the top tourist destinations. While traveling in India has often being stereotyped by the lack of civic facilities and is considered more of a backpacker destination, it can be done lavishly as well as cheaply. Here are 10 reasons why you might want to visit India.
                                <br /><br />
                                <ul>
                                    <li>Huge Number of Tourist Places</li>
                                    <li>Incredible HISTORY</li>
                                    <li>Diverse Culture</li>
                                    <li>Indian Architecture</li>
                                    <li>Indian Food</li>
                                    <li>Indian Music</li>
                                    <li>Indian Dance</li>
                                    <li>Festivals and Fairs</li>
                                    <li>Spiritual Experience</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header><b>Did You Know???</b></Accordion.Header>
                            <Accordion.Body className="accordianItem">
                                <ul>
                                    <li>India Has the Second Highest Population in the World</li>
                                    <li>The City of Varanasi is Believed to Be One of the Oldest Living Cities in the World</li>
                                    <li>Chenab Bridge is the Highest Rail Bridge in the World</li>
                                    <li>India is Home to the Wettest Inhabited Place on Earth</li>
                                    <li>About 70% of the World’s Spices Come From India</li>
                                    <li>The Highest Cricket Ground in the World is Found Here</li>
                                    <li>The Bengal Tiger is India’s National Animal</li>
                                    <li>Kumbh Mela Gathering Visible From Space</li>
                                    <li>India Was the First Country to Mine Diamonds</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br />
                    </Slide>
                </div>
            </div>
            <br />


            <br />
            <div class="regionDiv">
                
                <h1 class="banner"><Flash>America</Flash></h1>
                

                <br />
                <Zoom>
                <div class="video">
                    <div className="video-responsive">
                        <iframe
                            width="853"
                            height="480"
                            src="https://www.youtube.com/embed/4Z9mUjtFJYY"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>
                </div>
                </Zoom>

                <br />
                <div class="info">
                    <Slide left>
                    <br />
                    <Button className='buttonAcc' variant="dark" href='https://www.gousa.in/' target='_blank'><b>More Info</b></Button>
                    <br />

                    <br />
                    <Accordion defaultActiveKey="0" className="accordian">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><b>Why Travel to USA?</b></Accordion.Header>
                            <Accordion.Body className="accordianItem">
                                The USA is known for its iconic landmarks – The Statue of Liberty, Hollywood Sign, Golden Gate Bridge – but it's also a place of incredible hospitality, wide open spaces and amazing natural beauty. That's 50 states that serve up unique holiday experiences and provide endless options for every type of traveller.
                                <br /><br />
                                It doesn't matter if you're visiting for the first time or returning for another go, you're sure to leave with plenty of unforgettable moments. It is the perfect holiday destination and here are just 10 reasons to start planning your next trip:
                                <br /><br />
                                <ul>
                                    <li>The National Parks</li>
                                    <li>The Road Trips</li>
                                    <li>The Theme Parks</li>
                                    <li>Southern Hospitality</li>
                                    <li>The Pacific North West</li>
                                    <li>The Museums are Plentiful and Interesting</li>
                                    <li>Style is always evolving</li>
                                    <li>The scenic views</li>
                                    <li>The Great Smoky Mountains</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header><b>Did You Know???</b></Accordion.Header>
                            <Accordion.Body className="accordianItem">
                                <ul>
                                    <li>The US Has The Largest Economy In The World</li>
                                    <li>The US Has The 4th Longest River System In The World</li>
                                    <li>It is the Home To Some of The Best Musical Artist Of All Time</li>
                                    <li>Las Vegas Is The Gambling Capital Of The World</li>
                                    <li>There Is a City Named Boring And It’s In Oregon</li>
                                    <li>The US Doesn’t Have An Official Language</li>
                                    <li>Alaska Has The Longest Coastline In The US</li>
                                    <li>The Statue Of Liberty Was A Gift</li>
                                    <li>The current US flag was designed by a 17-year-old</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br />
                    </Slide>
                </div>
            </div>
            <br/>


            <br />
            <div class="regionDiv">
                
                <h1 class="banner"><Flash>New Zealand</Flash></h1>
                

                <br />
                <Zoom>
                <div class="video">
                    <div className="video-responsive">
                        <iframe
                            width="853"
                            height="480"
                            src="https://www.youtube.com/embed/vtxVK3sbZ0o"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>
                </div>
                </Zoom>

                <br />
                <div class="info">
                    <Slide left>
                    <br />
                    <Button className='buttonAcc' variant="dark" href='https://www.gousa.in/' target='_blank'><b>More Info</b></Button>
                    <br />

                    <br />
                    <Accordion defaultActiveKey="0" className="accordian">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><b>Why Travel to New Zealand?</b></Accordion.Header>
                            <Accordion.Body className="accordianItem">
                            Even if you haven’t seen the The Lord of the Rings or The Hobbit films, you’ll know New Zealand is incredibly scenic. The South Island is lined with exquisite mountain ranges, glaciers, and lush forestry while the North is renowned for its breathtaking coastlines, geothermal treasures, and remarkable glowworm caves. And this is just a quick taster — you need to see the majestic landscape from up close to truly appreciate its beauty.                                <br /><br />
                                It doesn't matter if you're visiting for the first time or returning for another go, you're sure to leave with plenty of unforgettable moments. It is the perfect holiday destination and here are just 10 reasons to start planning your next trip:
                                <br /><br />
                                <ul>
                                    <li>The remarkable Maori culture</li>
                                    <li>New Zealand friendliness is hard to beat</li>
                                    <li>The world-famous vineyards</li>
                                    <li>It’s jam-packed with adventure activities</li>
                                    <li>Hikers will relish the Great Walks</li>
                                    <li>There’s something for every season</li>
                                    <li>An incredibly diverse wildlife awaits</li>
                                    <li>The glistening lakes</li>
                                    <li>The local festivals</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header><b>Did You Know???</b></Accordion.Header>
                            <Accordion.Body className="accordianItem">
                                <ul>
                                    <li>New Zealand is the First Country to see the Sunrise!</li>
                                    <li>New Zealand is the first country with universal suffrage</li>
                                    <li>You can pay with hobbit money</li>
                                    <li>30% of the country is a national reserve</li>
                                    <li>It is the first country to give Women the Vote in 1893</li>
                                    <li>More sheep than people</li>
                                    <li>Dunedin has the steepest road in the world</li>
                                    <li>There are three official languages</li>
                                    <li>It was the last country in the world to be inhabited by humans</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br />
                    </Slide>
                </div>
            </div>



            <br /><br />
            <Footer />
        </div>
    );
}

export default Regions;