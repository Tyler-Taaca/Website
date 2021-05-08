import React, { useEffect } from 'react';
import './About.css';
import image from './P1.png'
import image2 from './P2.png'
import image3 from './Grad.svg'
import image4 from './d.svg'
import image5 from './dog.svg'
import image6 from './code.svg'
import image7 from './image7.svg'
import image8 from './t1.png'
import image9 from './t2.png'
import image10 from './Pampers_logo.png'
import image11 from './S1.png'
import image12 from './S2.png'
import image13 from './S3.png'
import image14 from './shoe.png'
import image15 from './manc.png'
import image16 from './book.png'
import { motion } from "framer-motion"
import Aos from 'aos'
import 'aos/dist/aos.css'

function About(){

    useEffect(() => {
        Aos.init({duration:3000});
    }, []);

    return(

        <div className='body'>
            
            <div className='side'>
                
                <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3}} className='title2'>About</motion.h1>
                <motion.div className='block' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3}}></motion.div>
                <motion.p className='t' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3}} ></motion.p>

            
                <motion.div className='b1' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:4}}>
                    <img src={image3} alt="Grad" className='grad'></img>
                    <p className='b1t'> I am third year university at the Schulich <br />  School of Business who is <b>graduating in Summer 2022!</b></p>
                </motion.div>
                
                <motion.div className='b2' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:6}}>
                <img src={image7} alt="Grad" className='graph'></img>
                    <p className='b1t'> I love cooking Asian food, such as KBBQ, Sushi, and Dim Sum!</p>
                </motion.div>

                <motion.div className='b3' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:5}}>
                    <img src={image4} alt="Grad" className='graph'></img>
                    <p className='b1t'> I am an operations and <br /> information systems  student with a concentration in <b>statistics!</b></p>
                </motion.div>


                <motion.div className='b4' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:7}}>
                    <img src={image6} alt="Grad" className='graph'></img>
                    <p className='b1t'> I love using tech as a way <br /> to be creative and explore data!</p>
                </motion.div>

                <motion.div className='b5' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:8}}>
                    <img src={image5} alt="Grad" className='graph'></img>
                    <p className='b1t'> I have a dog named Koddy, whom I love taking to the <br /> dog park!</p>
                </motion.div>

            
            
            <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} src={image} alt='dog' className='ban'>

            </motion.img>


        
            <motion.img src={image2} alt='dog' className='ban2' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}}></motion.img>
    

            </div>
            
           
    
            <div className='pg'>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:9}} className='time'></motion.div>
            <img data-aos='fade-up' src={image8} alt='text' className='text'></img>
            <img data-aos='fade-up' src={image9} alt='text' className='text2'></img>
            <div data-aos='fade-up' className='time2'></div>
            <h2  data-aos='fade-up' className='twentyone'>2021</h2>

            </div>

            <div data-aos='fade-up' className='events'>
            <div data-aos='fade-up' className='time3'></div>

            <h2 className='pgt' data-aos='fade-right'> Procter and Gamble Intern | Pampers, Walmart</h2>
            <h2 className='pgt2' data-aos='fade-right'> May - Aug </h2>
            <p className='pgtt' data-aos='fade-right'> Procter and Gamble is the world’s leading CPG company, and for this summer, I have the pleasure of working for Pamper’s on the Walmart team. I will be developing distribution strategies, drafting new consumer journeys, and understand successful launch strategies.</p>
            <img src={image10} alt='pamp' className='pamp' data-aos='fade-left'></img>
            <div className='taga' data-aos='fade-up'>
                <p className='tagword'>Co-op Experience</p>
            </div>

            <div className='taga2' data-aos='fade-up' >
                <p className='tagword'>Product Role</p>
            </div>

            </div>





            <div data-aos='fade-up' className='events2'>
            <div data-aos='fade-up' className='time3'></div>

            <h2 className='pgt' data-aos='fade-right'> Data-Science Researcher | Toronto Hospital</h2>
            <h2 className='pgt2' data-aos='fade-right'> Jan - Apr </h2>
            <p className='pgtt' data-aos='fade-right'> This past semester, I had the opportunity to work with a Toronto Hospital to help develop a goal-based programming model which leveraged prescriptive analytics, Python, and its other data libraries. From the findings, physician quality and speed were strengthened! </p>
            <img src={image11} alt='pamp' className='pamp' data-aos='fade-left'></img>
            <img src={image12} alt='pamp1' className='pamp1' data-aos='fade-left'></img>
            <img src={image13} alt='pamp2' className='pamp2' data-aos='fade-left'></img>
            <div className='taga' data-aos='fade-up'>
                <p className='tagword'>Data-Science</p>
            </div>

            </div>


            <div data-aos='fade-up' className='events3'>
            <div data-aos='fade-up' className='time3'></div>

            <h2 className='pgt' data-aos='fade-right'> Coding, Reading, and Running</h2>
            <h2 className='pgt2' data-aos='fade-right'> Jan - Present </h2>
            <p className='pgtt' data-aos='fade-right'> I made a commitment to expand my knowledge in more domains that are not just professional! I began learning to code for front-end development, like this website, read more often, and run! Sometimes the biggest change in thought can come from small accumulations of good habits. </p>
            <img src={image14} alt='pamp' className='a' data-aos='fade-left'></img>
            <img src={image15} alt='pamp' className='b' data-aos='fade-left'></img>
            <img src={image16} alt='pamp' className='c' data-aos='fade-left'></img>
           

            <div className='taga' data-aos='fade-up'>
                <p className='tagword'>Self-Development</p>
            </div>
            <div className='taga2' data-aos='fade-up' >
                <p className='tagword'>Long Term Goals</p>
            </div>

            </div>


        </div>
    )
} 

export default About