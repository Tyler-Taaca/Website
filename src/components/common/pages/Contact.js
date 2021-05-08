import React, { useEffect } from 'react';
import './Contact.css';
import { motion } from "framer-motion"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Tilt from 'react-tilt'
import headshot from './head.png'
import Typical from 'react-typical'


function Contact(){
    return(
        <div>

            <div className='body'>
            <motion.div className='container'
            initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}
            >
            <Tilt>
            <h1 className='title4'>Contact</h1>
            </Tilt>

            
            <p className='end'> Thanks for taking the time to visit my website, you can find me in the following ways below ✌🏽 </p>
            <img src={headshot} alt='headshot' className='head1'></img>

            <Typical className='move'
                loop={Infinity}
                wrapper="b"
                steps={
                    [
                        'Email: tylerTaaca@gmail.com 📩',3000,
                        'LinkedIn: Tyler Taaca 🤝', 3000,
                        'Medium: Tyler Taaca 📚', 3000
                    
                    ]
                }
            />

            </motion.div>

            </div>
        </div>
    )
}

export default Contact