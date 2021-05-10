import React, { useEffect } from 'react';
import './Contact.css';
import { motion } from "framer-motion"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Tilt from 'react-tilt'
import headshot from './head.png'
import Typical from 'react-typical'
import logo from './in.png'
import med from './med.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact(){
    return(
        <div>

            <div className='body'>



            <div className='con'>
            <div className='row'>
            <div className='col-sm-2'>
            </div>
                <div className='col-sm-8'>
            <Tilt>
            <motion.h1 className='title3' >Contact</motion.h1>
            </Tilt>
            <p className='welcome1'>Thanks for taking the time to visit my website, you can find me in the following ways below ✌🏽</p>
                </div>
            <div className='col-sm-2'>
            </div>
            </div>

            <div className='row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6'>
                <img src={headshot} className='head1'></img>
            </div>
            <div className='col-sm-3'></div>


          

            </div>

            <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <div className='d-flex justify-content-around'>
                
                <a href='https://www.linkedin.com/in/tyler-taaca/'>
                <motion.div className='blue'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                    <img src={logo} className='lin'></img>
                </motion.div>
                </a>

                <a href='https://tylertaaca-16330.medium.com'>
                <motion.div className='blue'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                    <img src={med} className='lin2'></img>
                </motion.div>
                </a>


                </div>
            </div>
            <div className='col-sm-4'></div>

            </div>





            </div>

        
    

            </div>
        </div>
    )
}

export default Contact