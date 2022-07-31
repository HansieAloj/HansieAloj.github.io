import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/Explore.css';
import '../App.css';
import { Footer } from '../components/Footer.js';

import CarouselOffcanvasComponent from '../components/CarouselOffcanvas';

import React from 'react';
import Tada from 'react-reveal/Tada';
import Wobble from 'react-reveal/Wobble';
import Spin from 'react-reveal/Spin';
import Zoom from 'react-reveal/Zoom';



import { useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Toast from 'react-bootstrap/Toast';

import greatWall1 from "../images/explore/SevenWondersWorld/greatWall.jpg"
import greatWall2 from "../images/explore/SevenWondersWorld/greatWall2.jpg"
import greatWall3 from "../images/explore/SevenWondersWorld/greatWall3.jpg"

import chichen1 from "../images/explore/SevenWondersWorld/chichen.jpg"
import chichen2 from "../images/explore/SevenWondersWorld/chichen2.jpg"
import chichen3 from "../images/explore/SevenWondersWorld/chichen3.jpg"

import petra1 from "../images/explore/SevenWondersWorld/petra.jpg"
import petra2 from "../images/explore/SevenWondersWorld/petra2.jpg"
import petra3 from "../images/explore/SevenWondersWorld/petra3.jpg"

import machuPicchu1 from "../images/explore/SevenWondersWorld/machuPicchu.jpg"
import machuPicchu2 from "../images/explore/SevenWondersWorld/machuPicchu2.jpg"
import machuPicchu3 from "../images/explore/SevenWondersWorld/machuPicchu3.jpg"

import christTheRedeemer1 from "../images/explore/SevenWondersWorld/christTheRedeemer.jpg"
import christTheRedeemer2 from "../images/explore/SevenWondersWorld/christTheRedeemer2.jpg"
import christTheRedeemer3 from "../images/explore/SevenWondersWorld/christTheRedeemer3.jpg"

import colosseum1 from "../images/explore/SevenWondersWorld/colosseum.jpg"
import colosseum2 from "../images/explore/SevenWondersWorld/colosseum2.jpg"
import colosseum3 from "../images/explore/SevenWondersWorld/colosseum3.jpg"

import tajMahal1 from "../images/explore/SevenWondersWorld/tajMahal.jpg"
import tajMahal2 from "../images/explore/SevenWondersWorld/tajMahal2.jpg"
import tajMahal3 from "../images/explore/SevenWondersWorld/tajMahal3.jpg"


import auroraBorealis1 from "../images/explore/SevenWondersNature/auroraBorealis.jpg"
import auroraBorealis2 from "../images/explore/SevenWondersNature/auroraBorealis2.jpg"
import auroraBorealis3 from "../images/explore/SevenWondersNature/auroraBorealis3.jpg"

import grandCanyon1 from "../images/explore/SevenWondersNature/grandCanyon.jpg"
import grandCanyon2 from "../images/explore/SevenWondersNature/grandCanyon2.jpg"
import grandCanyon3 from "../images/explore/SevenWondersNature/grandCanyon3.jpg"

import paricutin1 from "../images/explore/SevenWondersNature/paricutin.jpg"
import paricutin2 from "../images/explore/SevenWondersNature/paricutin2.jpg"
import paricutin3 from "../images/explore/SevenWondersNature/paricutin3.jpg"

import victoriaFalls1 from "../images/explore/SevenWondersNature/victoriaFalls.jpeg"
import victoriaFalls2 from "../images/explore/SevenWondersNature/victoriaFalls2.jpg"
import victoriaFalls3 from "../images/explore/SevenWondersNature/victoriaFalls3.jpg"

import mountEverest1 from "../images/explore/SevenWondersNature/mountEverest.jpg"
import mountEverest2 from "../images/explore/SevenWondersNature/mountEverest2.jpg"
import mountEverest3 from "../images/explore/SevenWondersNature/mountEverest3.jpg"

import greatBarrierReef1 from "../images/explore/SevenWondersNature/greatBarrierReef.jpg"
import greatBarrierReef2 from "../images/explore/SevenWondersNature/greatBarrierReef2.jpg"
import greatBarrierReef3 from "../images/explore/SevenWondersNature/greatBarrierReef3.png"

import harborRio1 from "../images/explore/SevenWondersNature/harborRio.jpg"
import harborRio2 from "../images/explore/SevenWondersNature/harborRio2.jpg"
import harborRio3 from "../images/explore/SevenWondersNature/harborRio3.jpg"




function Explore() {

    const [showToast, setShowToast] = useState(true);

    {/* Seven Wonders: */}

    var greatWall = {
        title : "Great Wall of China",
        url : "https://earth.google.com/web/@40.4319077,116.5703749,476.8663033a,781.19059484d,35y,0h,45t,0r/data=ChEaDwoJL20vMGQyZHEwGAIgASgC",
        desc : "Great might be an understatement. One of the world’s largest building-construction projects, the Great Wall of China is widely thought to be about 5,500 miles (8,850 km) long; a disputed Chinese study, however, claims the length is 13,170 miles (21,200 km). Work began in the 7th century BCE and continued for two millennia. Although called a “wall,” the structure actually features two parallel walls for lengthy stretches. In addition, watchtowers and barracks dot the bulwark. One not-so-great thing about the wall, however, was its effectiveness. Although it was built to prevent invasions and raids, the wall largely failed to provide actual security. Instead, scholars have noted that it served more as “political propaganda.”",
        img : [greatWall1, greatWall2, greatWall3]
    };

    var chichen = {
        title : "Chichén Itzá",
        url : "https://earth.google.com/web/@20.68366228,-88.56823103,41.34802246a,0d,60y,214.1500521h,97.14064883t,0r/data=ClEaTxJJCiUweDhmNTEzOGM2ZTM5MWMwZTc6MHg3YzFlYTBhMTY4OTk0ZDlhGYmlkkstrzRAITmP1IxWJFbAKg5DaGljaMOpbiBJdHrDoRgBIAEiGgoWU0dfN1MyZUdPNEJJNlJET210eXlCdxAC",
        desc : "Chichén Itzá is a Mayan city on the Yucatán Peninsula in Mexico, which flourished in the 9th and 10th centuries CE. Under the Mayan tribe Itzá—who were strongly influenced by the Toltecs—a number of important monuments and temples were built. Among the most notable is the stepped pyramid El Castillo (“The Castle”), which rises 79 feet (24 meters) above the Main Plaza. A testament to the Mayans’ astronomical abilities, the structure features a total of 365 steps, the number of days in the solar year. During the spring and autumnal equinoxes, the setting sun casts shadows on the pyramid that give the appearance of a serpent slithering down the north stairway; at the base is a stone snake head. Life there was not all work and science, however. Chichén Itzá is home to the largest tlachtli (a type of sporting field) in the Americas. On that field the residents played a ritual ball game popular throughout pre-Columbian Mesoamerica.",
        img : [chichen1, chichen2, chichen3]
    };

    var petra = {
        title : "Petra",
        url : "https://www.google.com/maps/about/behind-the-scenes/streetview/treks/petra/",
        desc : "The ancient city of Petra, Jordan, is located in a remote valley, nestled among sandstone mountains and cliffs. It was purported to be one of the places where Moses struck a rock and water gushed forth. Later the Nabataeans, an Arab tribe, made it their capital, and during this time it flourished, becoming an important trade center, especially for spices. Noted carvers, the Nabataeans chiseled dwellings, temples, and tombs into the sandstone, which changed color with the shifting sun. In addition, they constructed a water system that allowed for lush gardens and farming. At its height, Petra reportedly had a population of 30,000. The city began to decline, however, as trade routes shifted. A major earthquake in 363 CE caused more difficulty, and after another tremor hit in 551, Petra was gradually abandoned. Although rediscovered in 1912, it was largely ignored by archaeologists until the late 20th century, and many questions remain about the city.",
        img : [petra1, petra2, petra3]
    };

    var machuPicchu = {
        title : "Machu Picchu",
        url : "https://earth.google.com/web/@-13.16278932,-72.54451349,2409.90758433a,334.20158312d,35y,-0h,0t,0r/data=Ci4SLBIgMjRiNWFhNTFlOGExMTFlNmJhN2U2ZjgxOGQ2OWE2ZTciCG92ZXJ2aWV3",
        desc : "This Incan site near Cuzco, Peru, was “discovered” in 1911 by Hiram Bingham, who believed it was Vilcabamba, a secret Incan stronghold used during the 16th-century rebellion against Spanish rule. Although that claim was later disproved, the purpose of Machu Picchu has confounded scholars. Bingham believed it was home to the “Virgins of the Sun,” women who lived in convents under a vow of chastity. Others think that it was likely a pilgrimage site, while some believe it was a royal retreat. (One thing it apparently should not be is the site of a beer commercial. In 2000 a crane being used for such an ad fell and cracked a monument.) What is known is that Machu Picchu is one of the few major pre-Columbian ruins found nearly intact. Despite its relative isolation high in the Andes Mountains, it features agricultural terraces, plazas, residential areas, and temples.",
        img : [machuPicchu1, machuPicchu2, machuPicchu3]
    };

    var christTheRedeemer = {
        title : "Christ the Redeemer",
        url : "https://earth.google.com/web/@-22.95187149,-43.21016809,528.24505615a,0d,60y,258.50418757h,113.11942839t,0r/data=ClQaUhJMCiMweDk5N2ZkNTk4NGFhMTNmOjB4OWRjOTg0ZDcwMTk1MDJkZRkFiljEsPM2wCEBHZw-8ZpFwCoTQ2hyaXN0IHRoZSBSZWRlZW1lchgBIAEiGgoWZkVlRmc1U1NwSlJXWUdfV0tZRDF6ZxAC",
        desc : "Christ the Redeemer, a colossal statue of Jesus, stands atop Mount Corcovado in Rio de Janeiro. Its origins date to just after World War I, when some Brazilians feared a “tide of godlessness.” They proposed a statue, which was ultimately designed by Heitor da Silva Costa, Carlos Oswald, and Paul Landowski. Construction began in 1926 and was completed five years later. The resulting monument stands 98 feet (30 meters) tall—not including its base, which is about 26 feet (8 meters) high—and its outstretched arms span 92 feet (28 meters). It is the largest Art Deco sculpture in the world. Christ the Redeemer is made of reinforced concrete and is covered in approximately six million tiles. Somewhat disconcertingly, the statue has often been struck by lightning, and in 2014 the tip of Jesus’s right thumb was damaged during a storm.",
        img : [christTheRedeemer1, christTheRedeemer2, christTheRedeemer3]
    };

    var colosseum = {
        title : "Colosseum",
        url : "https://earth.google.com/web/search/colosseum/@41.8902102,12.4922309,19.22322944a,762.41902599d,35y,0h,45t,0r/data=CnQaShJECiUweDEzMmY2MWI2NTMyMDEzYWQ6MHgyOGYxYzgyZTkwODUwM2M0GWbIZ2jy8URAIUopQ7AF_ChAKgljb2xvc3NldW0YAiABIiYKJAl1zaTZrfM2wBF1zaTZrfM2wBkwbLfJ5ppFwCEwbLfJ5ppFwCgC",
        desc : "The Colosseum in Rome was built in the first century by order of the Emperor Vespasian. A feat of engineering, the amphitheater measures 620 by 513 feet (189 by 156 meters) and features a complex system of vaults. It was capable of holding 50,000 spectators, who watched a variety of events. Perhaps most notable were gladiator fights, though men battling animals was also common. In addition, water was sometimes pumped into the Colosseum for mock naval engagements. However, the belief that Christians were martyred there—namely, by being thrown to lions—is debated. According to some estimates, about 500,000 people died in the Colosseum. Additionally, so many animals were captured and then killed there that certain species reportedly became extinct.",
        img : [colosseum1, colosseum2, colosseum3]
    };

    var tajMahal = {
        title : "Taj Mahal",
        url : "https://earth.google.com/web/@27.173059,78.042134,157.84889705a,471.54638365d,35y,0h,59.99245526t,0r/data=CjISMBIgMWNlYzBmZjgyNTA0MTFlN2JlYTcxN2E0Njc3ZDAzZDUiDHNwbGFzaHNjcmVlbg",
        desc : "This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife Mumtāz Maḥal (“Chosen One of the Palace”), who died in 1631 giving birth to their 14th child. It took about 22 years and 20,000 workers to construct the complex, which includes an immense garden with a reflecting pool. The mausoleum is made of white marble that features semiprecious stones in geometric and floral patterns. Its majestic central dome is surrounded by four smaller domes. According to some reports, Shah Jahān wished to have his own mausoleum made out of black marble. However, he was deposed by one of his sons before any work began.",
        img : [tajMahal1, tajMahal2, tajMahal3]
    };


        
    {/* Seven Wonders Nature: */}

    
    var auroraBorealis = {
        title : "The Northern Lights: Aurora Borealis",
        url : "https://earth.google.com/web/@64.1530865,-21.9930271,11.72949386a,183.252413d,35.00017658y,153.99940898h,0.00000416t,0r/data=CjoSOBIgNmM1OGY5M2RjOTg5MTFlNzkxZTVmYmIxYzg2Nzc1ZjkiFGVmX2djc19sb2NhbGd1aWRlc18w",
        desc : "The Northern Lights have become a sensation for tourists traveling in the Northern Hemisphere. The Northern Lights are auroras, or naturally occurring phenomena that consist of mystifying displays of light in the sky. The northern lights dance across the sky and emanate a diffused glow along the northern horizon. The intensity of northern lights increases as you head north towards the magnetic pole in the Arctic. Unfortunately, the northern lights appear only randomly, making it a challenge for travelers to see while on a short trip. They are more often experienced by locals who live in these northern regions. Planning a trip to the see the northern lights presents a variety of options for interesting destinations around the world. The best places to see the northern lights are in the far part of the Northern Hemisphere, including Canada's far north, Alaska, Iceland, Norway, Sweden, and Finland.",
        img : [auroraBorealis1, auroraBorealis2, auroraBorealis3]
    };

    var grandCanyon = {
        title : "The Grand Canyon",
        url : "https://earth.google.com/web/@36.37271867,-112.48875117,1436.38820689a,364511.840031d,35y,-4.99928596h,22.80431114t,0r/data=CjASLhIgYWM3MWNmNzgyZWQ1MTFlOThiZTQ0NWEzN2RiYmYzMTEiCmdjc19pdGluXzA",
        desc : "You only need to stand on the rim of the Grand Canyon once to know why it's one of the 7 natural wonders of the natural world. The Grand Canyon's massive and colorful landscape provides breathtaking views that can't be found anywhere else in the world. Most visitors head to the South Rim of the Grand Canyon and spend a full day admiring the views from the overlooks that stretch along the top of the canyon. If you are in good shape and want to have a more immersive experience, head down into the canyon on one of the numerous hiking trails. For something a little less strenuous, take a helicopter tour of the Grand Canyon for an unforgettable lifetime experience. If you are interested in the formation and geology of the canyon, stop in at the Geological Museum to learn about what you are seeing. From Lipan Point along Desert View Drive, you can get a great view of the rock layers in the canyon wall. The Grand Canyon is located in Arizona, USA. The closest major cities are Las Vegas and Phoenix.",
        img : [grandCanyon1, grandCanyon2, grandCanyon3]
    };

    var paricutin = {
        title : "Paricutin",
        url : "https://earth.google.com/web/@19.49334645,-102.2513976,2759.30197906a,5307.2394708d,35y,0h,45t,0r/data=Ck0aSxJFCiUweDg0MmUwZDdjZWU1N2I4MTU6MHhjZjc1NjQ2YWJlMzgzMDVhGRSW0_lLfjNAIb6S9eUWkFnAKgpQYXLDrWN1dGluGAIgASgC",
        desc : "Even avid travelers may not know about Paricutin, mainly because this natural wonder resides in Michoacán, Mexico. This cinder cone volcano was named one of the 7 natural wonders of the world, even over famous volcanoes, such as Yellowstone. Paricutin last erupted in 1952. It was coined one of the natural wonders of the world because mankind witnessed its birth and rapidly growing formation. You can venture on a twelve-mile round-trip to the peak of the volcano, either by hiking or horseback. Hikers will walk through sandy banks and lava fields surrounding the volcano. You can explore Paricutin at any time of the year. It's located about a seven-hour drive from Mexico City. Combine a trip to the volcano with a visit to the capital city for a bit of nature and culture all in one. Accommodation near the volcano can be found in the city of Urapan.",
        img : [paricutin1, paricutin2, paricutin3]
    };

    var victoriaFalls = {
        title : "Victoria Falls",
        url : "https://earth.google.com/web/@-17.9242993,25.8572003,885.86302027a,999.41319123d,35y,0h,45t,0r/data=ClEaTxJJCiUweDE5NGZlZmY5ZGEwYmYyZjk6MHg4YjA1NDY2M2RmMThkNTY4GTc3AeGe7DHAIROflnpx2zlAKg5WaWN0b3JpYSBGYWxscxgCIAEoAg",
        desc : "Victoria Falls is located in Africa along the borders of Zambia and Zimbabwe. This spectacular waterfall runs off from the Zambezi River. Visitors can access the falls from Victoria Falls in Zimbabwe and Livingston in Zambia. Cross the border to gain different perspectives of this magnificent natural wonder. The best views are from Zimbabwe, but you can get a closer experience from Zambia. Helicopter tours and microlight tours are another great way to see the falls. If you are brave, consider a swim in the Devil's Pool, located pretty much at the edge of the falls on the Zambia side. The rainy season runs from late November through early April. A good time to visit is immediately after this, when the volume of water coming over the falls is still immense, but the weather is pleasant. Getting to Victoria Falls is easy whether you choose to fly into Zambia or Zimbabwe. The airport in Zambia, Harry Mwanga Nkumbula International Airport (LVI), is closer and the more popular of the two. Most people fly into Johannesburg and then fly out from there to the falls. Be sure to keep an eye on your baggage weight, as the smaller planes flying into these airports have lower limits.",
        img : [victoriaFalls1, victoriaFalls2, victoriaFalls3]
    };

    var mountEverest = {
        title : "Mount Everest",
        url : "https://earth.google.com/web/@27.96382229,86.91248325,7094.53831178a,8476.01026003d,35y,-143.41575188h,54.9084901t,0r/data=Ck8aTRJHCiQweDM5ZTg1NGEyMTViZDllYmQ6MHg1NzZkY2Y4MDZhYmJhYjIZhVrTvOP8O0AhktyroDO7VUAqDU1vdW50IEV2ZXJlc3QYAiAB",
        desc : "Mount Everest has an approximate elevation of 29,029 feet. Mountaineers consider this mountain the highest spot on Earth; however, it is not the tallest mountain in the world, a title that belongs to Mauna Kea in Hawaii. Everest lies within the Himalayan mountain range on the border of Nepal and Tibet, China. If you don't want to climb Mt. Everest, you still have options. Visitors can schedule a flight around the mountain for an awe-inspiring aerial view. Adventurous trekkers can hike to base camp to fully experience Mount Everest's landscape. Alternatively, you can capture a distant view of the peak from the comfort of a lodge at a hill station in Nepal.",
        img : [mountEverest1, mountEverest2, mountEverest3]
    };

    var greatBarrierReef = {
        title : "Great Barrier Reef",
        url : "https://earth.google.com/web/@-18.57813014,147.57013641,-41.94434357a,0d,60y,359.45274785h,85t,0r/data=ClUaUxJNCiUweDZiZGYxNDQ2ODIyYzcxM2I6MHgxOTJhNTc0MTM2ODMzY2RhGXLEtTV9STLAITRUe8dfdmJAKhJHcmVhdCBCYXJyaWVyIFJlZWYYASABIjAKLEFGMVFpcE5ZdE5CTzd6bi01bGxXVzNEbGxTbGtxRHAxS0FTaGM4Q1JvZWR2EAU",
        desc : "As the world's largest coral reef, the Great Barrier Reef includes over 900 islands, roughly 3,000 separate reefs, and sustains a diverse ecosystem. Measuring approximately 2,300 kilometers in length, it covers an immense area of the ocean, much of it a long way offshore. Boat trips and excursions offer visitors a chance to experience the highlights of the Great Barrier Reef. Snorkeling or dive trips can be arranged, and provide opportunities to see colorful fish, coral, and marine life. Tours can be day trips or multi-day excursions. Popular destinations from which to explore the reef include Cairns, Port Douglas, and the Whitsunday Islands.",
        img : [greatBarrierReef1, greatBarrierReef2, greatBarrierReef3]
    };

    var harborRio = {
        title : "Harbor of Rio de Janeiro",
        url : "https://earth.google.com/web/@-22.9844186,-43.1945975,17.96790058a,963.4073288d,35y,288.40626835h,45t,0r/data=CjASLhIgNTQxZTNhZDEwNDU5MTFlN2FkNTYwMTQzMDUyMWMyZDQiCmdjc19pdGluXzA",
        desc : "The Harbor of Rio de Janeiro is surrounded by granite mountains and pinnacles covered in greenery. Iconic sights surrounding the harbor include Sugar Loaf Mountain, Corcovado Peak, and the Tijuca hills. The traditional way of seeing this natural wonder is to travel via the rack railway to Tijuca National Park. This takes you to the uppermost region, where the statue of Christo Redentor stands atop one of the granite peaks that overlooks the harbor. From the viewing platforms, soak up the spectacular views of the beautiful beaches below you and the mountains in the distance. For a jaw-dropping experience, explore the Harbor of Rio de Janeiro on a helicopter flight to capture a breathtaking aerial view.",
        img : [harborRio1, harborRio2, harborRio3]
    };

  return (
    <div class="Explore">


        {/* <Row class="center">
        <Spin>
            <Toast onClose={() => setShowToast(false)} show={showToast} delay={5000} bg="light" autohide>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Tool Tip</strong>
                </Toast.Header>
                <Toast.Body>Click the Buttons on any Carousel Image to Access more Information.</Toast.Body>
            </Toast>
            </Spin>
        </Row> */}

        <Tada>
        <h1 class="banner">Seven Wonders of the World</h1>
        </Tada>

        <Zoom>
        <ButtonGroup aria-label="Quick Traverse" className="ButtonGroup">
            <Button variant="dark" href='#greatWall'>Great Wall of China</Button>
            <Button variant="dark" href='#chichen'>Chichén Itzá</Button>
            <Button variant="dark" href='#petra'>Petra</Button>
            <Button variant="dark" href='#machuPicchu'>Machu Picchu</Button>
            <Button variant="dark" href='#christTheRedeemer'>Christ the Redeemer</Button>
            <Button variant="dark" href='#colosseum'>Colosseum</Button>
            <Button variant="dark" href='#tajMahal'>Taj Mahal</Button>
        </ButtonGroup>
        </Zoom>

        <br/>

        {/* Seven Wonders: */}

        <div class="Carousel" id="greatWall">
            <CarouselOffcanvasComponent obj={greatWall}/>
        </div>

        <br/>

        <div class="Carousel" id="chichen">
            <CarouselOffcanvasComponent obj={chichen}/>
        </div> 

        <br/>       
        
        <div class="Carousel" id="petra">
            <CarouselOffcanvasComponent obj={petra}/>
        </div>

        <br/>       

        <div class="Carousel" id="machuPicchu">
            <CarouselOffcanvasComponent obj={machuPicchu}/>
        </div>

        <br/>

        <div class="Carousel" id="christTheRedeemer">
            <CarouselOffcanvasComponent obj={christTheRedeemer}/>
        </div>

        <br/>

        <div class="Carousel" id="colosseum">
            <CarouselOffcanvasComponent obj={colosseum}/>
        </div>

        <br/>

        <div class="Carousel" id="tajMahal">
            <CarouselOffcanvasComponent obj={tajMahal}/>
        </div>

        <br/><br/><br/><br/>

        <Tada>
        <h1 class="banner">Seven Wonders of Nature</h1>
        </Tada>

        <ButtonGroup aria-label="Quick Traverse" className="ButtonGroup">
            <Button variant="dark" href='#auroraBorealis'>Aurora Borealis</Button>
            <Button variant="dark" href='#grandCanyon'>The Grand Canyon</Button>
            <Button variant="dark" href='#paricutin'>Paricutin</Button>
            <Button variant="dark" href='#victoriaFalls'>Victoria Falls</Button>
            <Button variant="dark" href='#mountEverest'>Mount Everest</Button>
            <Button variant="dark" href='#greatBarrierReef'>Great Barrier Reef</Button>
            <Button variant="dark" href='#harborRio'>Harbor of Rio de Janeiro</Button>
        </ButtonGroup>


        <br/>

        {/* Seven Wonders Nature: */}

        <div class="Carousel" id="auroraBorealis">
            <CarouselOffcanvasComponent obj={auroraBorealis}/>
        </div>

        <br/>

        <div class="Carousel" id="grandCanyon">
            <CarouselOffcanvasComponent obj={grandCanyon}/>
        </div> 

        <br/>       
        
        <div class="Carousel" id="paricutin">
            <CarouselOffcanvasComponent obj={paricutin}/>
        </div>

        <br/>       

        <div class="Carousel" id="victoriaFalls">
            <CarouselOffcanvasComponent obj={victoriaFalls}/>
        </div>

        <br/>

        <div class="Carousel" id="mountEverest">
            <CarouselOffcanvasComponent obj={mountEverest}/>
        </div>

        <br/>

        <div class="Carousel" id="greatBarrierReef">
            <CarouselOffcanvasComponent obj={greatBarrierReef}/>
        </div>

        <br/>

        <div class="Carousel" id="harborRio">
            <CarouselOffcanvasComponent obj={harborRio}/>
        </div>

        <br/>


        <Footer class="Footer"/>
    </div>
  );
}

export default Explore