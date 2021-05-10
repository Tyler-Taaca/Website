import React from 'react';
import './Home.css';
import Typical from 'react-typical'
import {Link} from 'react-router-dom'
import headshot from './head.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion"

function Home(){
    return(

        
        <div>

        <div className='contain'>
            <div className='row'>
            <div className='col-sm-4'>

            <img src={headshot} alt='headshot' className='img'></img>

            </div>
                <div class='col-sm-6'>
                <h1 className='title'>Hi, I'm Tyler Taaca!</h1>
                <h2 className='mid'> I am {' '}
            <Typical
                loop={Infinity}
                wrapper="b"
                steps={
                    [
                        'an aspiring product manager 🧠',3000,
                        'passionate about statistics 🎲', 3000,
                        'a big movie fanatic 🎥', 3000,
                        'a curious tech-fan 🤖', 3000,
                        'a basketball fanatic 🏀', 3000,
                        'a big fan of autobiographies 📚', 3000
                    ]
                }
            />
            </h2>

            <p className='mini'>Thanks for taking the time to see my website, you can get started <br></br> by viewing my work below or using the menu above!</p>

            <Link to="/work" className='boo'> 
                        <motion.div className="buttons"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                            Work and Projects
                        </motion.div>
            </Link>
                </div>

           
            </div>

        
        </div>
        









        </div>
    )
}

export default Home