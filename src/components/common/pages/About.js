import React, { useEffect } from 'react';
import './About.css';
import image from './P1.png'
import image2 from './P2.png'
import image3 from './Grad.svg'
import image5 from './dog.svg'
import image7 from './image7.svg'
import image8 from './t1.png'
import image9 from './t2.png'
import image10 from './Pampers_logo.png'
import image12 from './ta1.png'
import image14 from './shoe.png'
import image15 from './ky.png'
import image16 from './book.png'
import image17 from './think.png'
import image18 from './comp.png'
import image19 from './sweat.png'


import { motion } from "framer-motion"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Tilt from 'react-tilt'

function About(){

    useEffect(() => {
        Aos.init({duration:3000});
    }, []);

    return(

        <div className='body'>


            <div className='row'>
                <div className='col-sm-5'>

                </div>
                <div className='col-sm-4'>
                </div>
                <div className='col-sm-3'>
                    
                </div>
            </div>








            <div className='row'>
            <div className='col-sm-1'> </div>
            <div className='col-sm-2'> 
                <Tilt>
                <motion.img src={image} className='ban'
                initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}}></motion.img>
                </Tilt>
            </div>
            <div className='col-sm-2'> 
            <Tilt>
            <motion.img src={image2} className='ban'
            initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3}}
            ></motion.img>
            </Tilt>
            </div>

            <div className='col-sm-6'> 

                <Tilt>
                <motion.h1 className='about'
                initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}
                >About Me</motion.h1>
                </Tilt>


                <div className='box'> 

            
                
                    <div className='row'>


                                    <div className='col-sm-1'> </div>
                                    <div className='col-sm-5'> 
                                    
                                        <motion.div className='fact1'
                                        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:4}}
                                        >
                                            
                                            <img src={image3} className='grad'></img>
                                            <p className='fact1t'>I go to the Schulich School of Business for <b>Ops and Information Systems</b>, my expected <b>graduation is Apr 2022.</b></p>
                                            
                                        </motion.div>

                                    </div>

                                    <div className='col-sm-5'> 

                                            <motion.div className='fact1'
                                            initial={{opacity:0}} animate={{opacity:1}} transition={{delay:5}}
                                            >
                                            <img src={image16} className='grad'></img>
                                            <p className='fact1t'> <b>I am a storyteller who enjoys all forms of creating a narrative</b> whether it be creating movies, music, or even art!</p>
                                            </motion.div>

                                    </div>

                                    <div className='col-sm-1'> </div>
                
                    </div>









                    

                <div className='row'>


                



                    <div className='col-sm-4'>
                                            <motion.div className='fact2'
                                            initial={{opacity:0}} animate={{opacity:1}} transition={{delay:6}}
                                            >
                                            
                                            <img src={image5} className='grad'></img>
                                            <p className='fact1t'>I have a Shih Tzu named Koddy, who I love taking to the dog park!</p>
                                            
                                            </motion.div>
                    </div> 



                    <div className='col-sm-4'>
                                             <motion.div className='fact2'
                                             initial={{opacity:0}} animate={{opacity:1}} transition={{delay:7}}
                                             >
                                            
                                            <img src={image7} className='grad'></img>
                                            <p className='fact1t'>In my spare time, <b>I enjoy being a home-chef</b> as I explore different foods primarily from asian cultures!</p>
                                            
                                            </motion.div>
                    
                    </div> 
                    <div className='col-sm-4'>
                        
                                            <motion.div className='fact2'
                                            initial={{opacity:0}} animate={{opacity:1}} transition={{delay:8}}
                                            >
                                            
                                            <img src={image14} className='grad'></img>
                                            <p className='fact1t'>When I can, I have taken running as a hobby as <b>I try to be ready to run a half-marathon this year!</b></p>
                                            
                                            </motion.div>    
                    </div> 







                </div>
                
                </div>
            </div>

            <div className='col-sm-1'> </div>
            </div>



            <div className='row'>
            <div className='col-sm-4'> </div>
            <div className='col-sm-4'> 
            
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:9}} className='strip'></motion.div>

            </div>
            <div className='col-sm-4'> </div>
            </div>
       





            <div className='row'>
            <div className='col-sm-2'> </div>
            <div className='col-sm-3'> 
            
            <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{delay:10}} src={image8} className='imsg'></motion.img>

            </div>
            <div className='col-sm-7'> </div>
            </div>




            <div className='row'>
            <div className='col-sm-7'> </div>
            <div className='col-sm-3'> 
            
            <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{delay:11}} src={image9} className='imsg2'></motion.img>

            </div>
            <div className='col-sm-2'> </div>
            </div>


            <div className='row'>
            <div className='col-sm-4'> </div>
            <div className='col-sm-4'> 
            
            <div data-aos='fade-up' className='strip'></div>

            </div>
            <div className='col-sm-4'> </div>
            </div>


            <div className='row'>
            <div className='col-sm-3'> </div>
            <div className='col-sm-6'> 
            
            <h1 data-aos='fade-up' className='twen'>Here's how my 2021 has gone so far . . .</h1>

            </div>
            <div className='col-sm-3'> </div>
            </div>



            <div className='row'>
            <div className='col-sm-4'> </div>
            <div className='col-sm-4'> 
            
            <div data-aos='fade-up' className='strip'></div>

            </div>
            <div className='col-sm-4'> </div>
            </div>


            <div className='row'>
            <div className='col-sm-2'> </div> 
            <div className='col-sm-4'> 


            <img src={image10} data-aos='fade-right' className='pampers'></img>


            </div>


            <div className='col-sm-5'> 

            <h2 data-aos='fade-left' className='pamperst'>Procter and Gamble | Pampers, Walmart</h2>
            <h2 data-aos='fade-left' className='pamperst2'>May-Aug</h2>
            <p data-aos='fade-left' className='pampersp'>During my summer, I will be working at Procter and Gamble developing product with Pampers under the Walmart Team. The experience will give me a great opportunity to understand what it takes to iterate on product, understand consumer behaviors, leverage data from platforms such Power BI, and lastly, understand stakeholder management. As they say, making real progress takes baby steps!</p>

            <div className='row'>

            <div className='col-sm-6'>
    
            </div>

            <div className='col-sm-6'>
    
            </div> 
            </div>


            <div className='row'>

                <div className='col-sm-6'>
                    <div data-aos='fade-up' className='tag123'> 
                    <h3 className='tagt'>Co-op Experience</h3>
                    </div>
                </div>

                <div data-aos='fade-up' className='col-sm-6'>
                    <div className='tag456'> 
                    <h3 className='tagt'>Product Experience</h3>
            
                </div>
                </div> 
            </div>

            </div>
            <div className='col-sm-2'> </div>
            </div>










            <div className='row'>
            <div className='col-sm-4'> </div>
            <div className='col-sm-4'> 
            
            <div data-aos='fade-up'className='strip'></div>

            </div>
            <div className='col-sm-4'> </div>
            </div>


            <div className='row'>
            <div className='col-sm-1'> </div>
            <div className='col-sm-5'> 

            
            <img src={image12} data-aos='fade-right' className='kyrie'></img>
            <img src={image15} data-aos='fade-right' className='s8'></img>

            </div>

            <div className='col-sm-5'> 

            <h2 data-aos='fade-left' className='pamperst'>Product, Product, and Product</h2>
            <h2 data-aos='fade-left' className='pamperst2'>Jan-Present</h2>
            <p data-aos='fade-left' className='pampersp'>I’ve been lucky enough to find Product Management early in my career and have loved every moment to learn more about it. During this time period, I have “virtually back-packed” to talk to over 90 PM’s in the past four-months, learning countless lessons. Furthermore, I’ve been able to really hone in on my research skills, working as a prescriptive analytics researcher for a Toronto Hospital and doing PM for a sustainable fashion company! As I continue this journey, I’ve created product analysis’ which you can see on my works and projects, such as the Nike one shown on your left!</p>


            <div className='row'>

            <div className='col-sm-6'>
    
            </div>

            <div className='col-sm-6'>
    
            </div> 
            </div>



            <div className='row'>

                <div className='col-sm-6'>
                    <div className='tag7' data-aos='fade-up'> 
                    <h3 className='tagt'>Research Analysis</h3>
                    </div>
                </div>

                <div className='col-sm-6'>
                    <div className='tag8' data-aos='fade-up'> 
                    <h3 className='tagt'>Data-Science</h3>

                </div>
                </div> 
                </div>

            </div>
            <div className='col-sm-2'> </div>



            </div>










            <div className='row'>
            <div className='col-sm-4'> </div>
            <div className='col-sm-4'> 
            
            <div data-aos='fade-up' className='strip1'></div>

            </div>
            <div className='col-sm-4'> </div>
            </div>


            <div className='row'>
            <div className='col-sm-2'> 


            <img data-aos='fade-right' src={image17} className='emoji'></img>


            </div>

            <div className='col-sm-2'> 


            <img data-aos='fade-up' src={image18} className='emoji'></img>


            </div>

            <div className='col-sm-2'> 


            <img data-aos='fade-left' src={image19} className='emoji'></img>


            </div>


            <div className='col-sm-5'> 

            <h2 data-aos='fade-left' className='pamperst'>Read, Code, and Run</h2>
            <h2  data-aos='fade-left'className='pamperst2'>Jan-Present</h2>
            <p  data-aos='fade-left'className='pampersp'>I’ve always believed that learning something that isn’t your speciality is a way to grow so much faster and offer much more thoughtful inflection. I took up running as a hobby because I honestly admired the mental endurance that runners had and wanted that for myself. I started learning coding again because I enjoyed it in high school, and it offered me a way to build empathy for what developers do on daily basis. Lastly, I returned to daily reading because I wanted to immerse myself in something that I enjoyed, and I look cool in public when I do it sometimes.</p>

            <div className='row'>

            <div className='col-sm-6'>
                
            </div>

            <div className='col-sm-6'>
                
            </div> 
            </div>

            <div className='row'>

                <div className='col-sm-6'>
                    <div data-aos='fade-up' className='tag123'> 
                    <h3 className='tagt'>Self-Development</h3>
                    </div>
                </div>

                <div className='col-sm-6'>
                    <div data-aos='fade-up' className='tag456'> 
                    <h3 className='tagt'>Long-Term Goals</h3>

                </div>
                </div> 
                </div>

            </div>
            <div className='col-sm-2'> </div>

            </div>



            <div className='row'>
                <div className='space'></div>
            </div>



        </div>
    )
} 

export default About