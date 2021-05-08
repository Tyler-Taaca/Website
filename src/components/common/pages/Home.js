import React from 'react';
import './Home.css';
import Typical from 'react-typical'
import {Link} from 'react-router-dom'
import headshot from './head.png'


function Home(){
    return(

        
        <div className='body'>

            <img src={headshot} alt='headshot' className='head'></img>
            <div className="Container">
            <div className="buttons">
                <Link to="/work" class='btn btn-3'>My Work </Link>
            </div>
            </div>

            <div className='parent'>
            <h1 className='title'>Hi, I'm Tyler Taaca!</h1>
            <p className='mid'> I am {' '}
            <Typical
                loop={Infinity}
                wrapper="b"
                steps={
                    [
                        'an aspiring product manager 🧠',3000,
                        'passionate about statistics and data-science 🎲', 3000,
                        'a big movie fanatic 🎥', 3000,
                        'a curious tech-fan 🤖', 3000,
                        'a basketball fanatic 🏀', 3000,
                        'an avid reader of autobiographies 📚', 3000
                    ]
                }
            />
            </p>
            <p className='mini'>Thanks for taking the time to see my website, you can get started by viewing  <br/> my work below or using the menu above!</p>

            </div>




        </div>
    )
}

export default Home