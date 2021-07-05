import React, { useEffect } from 'react';
import './Work.css';
import Tilt from 'react-tilt'
import { motion } from "framer-motion"
import image from './Spotify.png'
import image1 from './nike1.png'
import image2 from './kraken.png'
import image3 from './writing.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Work(){

    useEffect(() => {
        Aos.init({duration:3000});
    }, []);

    return(
        <div>



            <motion.div className='body'
             initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}
            >





            <div className='con'>
            <div className='row'>
            <div className='col-sm-2'>
            </div>
                <div className='col-sm-8'>
            <Tilt>
            <motion.h1 className='title3' >Work and Projects</motion.h1>
            </Tilt>
            <p className='welcome'>Welcome to my work and projects area, what you are looking at below is a tile screen! To get started, hover over a tile below and click it to read a product analysis or blog from me!</p>
                </div>
            <div className='col-sm-2'>
            </div>
            </div>
            </div>

            

        

            <div className='con2'>

            <div className='d-flex justify-content-around'>
            <div className='col-sm-2'>
            </div>
            <div className='col-sm-2'>

            <a href='https://tylertaaca-16330.medium.com/spotify-bands-a-look-at-gamification-and-socialization-b59c31d01a09' className='boo2'>
            <motion.div className='spotify' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
                <img src={image} className='spot'></img>
                <h3 className='spotifyt'>Spotify Bands</h3>
            </motion.div>
            </a>
            </div>

            <div className='col-sm-2'>

            <a href='https://tylertaaca-16330.medium.com/nike-train-club-a-lesson-on-new-age-consumer-empathy-3458672a0263' className='boo2'>
            <motion.div className='nike' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
                <img src={image1} className='nike1'></img>
                <h3 className='niket'>Nike TC</h3>
            </motion.div>
            </a>

            </div>


            <div className='col-sm-2'>
            <a href='https://tylertaaca-16330.medium.com/the-seattle-kraken-how-a-future-nhl-team-can-adopt-futuristic-fan-interaction-41926413b8d2' className='boo2'>
            <motion.div className='sea' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
                <img src={image2} className='krak'></img>
                <h3 className='seat'>Seattle Kraken</h3>
            </motion.div>
            </a>
            </div>


            <div className='col-sm-2'>
            <motion.div className='soon' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>

            <img src={image3} className='soon1'></img>
            <h3 className='soon2'>Blog Post: What I Learned Speaking to 100+ PMs</h3>
            </motion.div>

            </div>
            

            <div className='col-sm-2'>
            </div>



            </div>





            </div>
            </motion.div>
           





        </div>
    )
}

export default Work 