import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import backImg from "./back.png";

const HomePage = () => {


   

  return (
    <div className='app__Home'>
      <div className="app__Home__container">
            <div className="app__Home__text">
                <h1>Build Your First Resume With Automation</h1>
                <p>Lorem ipsum dolor sit amet. Velit fugiat quas quasi est, quae eius praesentium quibusdam sunt dicta asperiores. Tempora soluta modi explicabo!</p>
                <Button variant="contained" endIcon='✔' type='submit' >
                <Link to='/resume' className='home-link-resume' >Lets Begin Now</Link>
             </Button>
            </div>
            <div className="app__Home__animation">
                <div className="lottie-container"><img src={backImg} alt="Background img" /></div>
            </div>
      </div>
    </div>
  )
}

export default HomePage
