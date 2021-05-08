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

function Work(){

    useEffect(() => {
        Aos.init({duration:3000});
    }, []);

    return(
        <div>



            <motion.div className='body'
             initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}
            >


            <Tilt>
            <motion.h1 className='title3' 

            >Work and Projects</motion.h1>
            </Tilt>

            <p className='welcome'>Welcome to my work and projects area, what you are looking at below is a tile screen! To get started, hover over a tile below and click it to read a product analysis or blog from me!</p>


            <div className='contain'>
            <a href='https://tylertaaca-16330.medium.com/spotify-bands-a-look-at-gamification-and-socialization-b59c31d01a09'>
            <motion.div className='spotify' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
            <img src={image} alt="Grad" className='spot'></img>
            <p className='spotifyt'> Spotify Bands</p>
           
            </motion.div>
            </a>


            <a href='https://tylertaaca-16330.medium.com/nike-train-club-a-lesson-on-new-age-consumer-empathy-3458672a0263'>
            <motion.div className='nike' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <img src={image1} alt="Grad" className='nike1'></img>
            <p className='niket'> Nike Train Club </p>

            </motion.div>
            </a>

            <a href='https://tylertaaca-16330.medium.com/the-seattle-kraken-how-a-future-nhl-team-can-adopt-futuristic-fan-interaction-41926413b8d2'>
            <motion.div className='sea' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <img src={image2} alt="Grad" className='krak'></img>
            <p className='seat'> Seattle Kraken </p>

            
            </motion.div>
            </a>

            <motion.div className='soon' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <img src={image3} alt="Grad" className='soon1'></img>
            <p className='soon2'> Coming Soon </p>
            </motion.div>

            







            </div>

            </motion.div>
           





        </div>
    )
}

export default Work 