import React from 'react';
import './header.scss';
import {motion } from 'framer-motion';
import {images}from '../../constants';


const Header = () => {
  return (
    <div className = "app__header app__flex">
        <motion.div
        whileInView={{x: [-100,0], opacity: [0,1]}}
        transition = {{duration: 0.5}}
        className = "app__header-badge">
          <div className = "app__header-badge">
            <div className = "badge-cmp app__flex">
            <span>👋</span>
            
            <div style = {{marginLeft: 20}}>
              <p className = "p-text">Hello, I am</p>
              <h3 className= "head-text">Logan</h3>
            </div>
            </div>

            <div className = "tag-cmp app_flex">
                <p className = "p-text">AI Developer</p>
                <p className = "p-text">Android Developer</p>
            </div>  
          </div>
          </motion.div>

          <motion.div
            whileInView = {{opacity: [0, 1]}}
            transition = {{duration: 0.5, delayChildren: 0.5}}
            className = "app_header-img">'

              <img src = {images.profile} alt = 'profile' />
              <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circles}
        alt="profile_circle"
        className="overlay_circle"
        />
          </motion.div>
    </div>
  )
}

export default Header