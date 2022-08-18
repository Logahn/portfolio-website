import React from 'react';

import { AppWrap } from '../../wrapper';
import {motion } from 'framer-motion';
import {images}from '../../constants';
import { SocialMedia } from '../../components';

import './header.scss';


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div className = "app__header app__flex">
            {/* <SocialMedia /> */}

        <motion.div
        whileInView={{x: [-100,0], opacity: [0,1]}}
        transition = {{duration: 0.5}}
        className = "app__header-info"
        >
          <div className = "app__header-badge">
            <div className = "badge-cmp app__flex">
            {/* <span>👋</span> */}
            
            <div style = {{marginLeft: 20}}>
              {/* <p className = "p-text">Hello, I am</p> */}
              <h3 className= "head-text">Adele Chinda</h3>
            </div>
            </div>

            <div className = "tag-cmp app_flex">
                <p className = "p-text">AI Developer & Software Engineer</p>
                {/* <p className = "p-text">Android Developer</p> */}
            </div>  
          </div>
          </motion.div>

          <motion.div
            whileInView = {{opacity: [0, 1]}}
            transition = {{duration: 0.5, delayChildren: 0.5}}
            className = "app__header-img"
            >

              {/* <img src = {images.profile} alt = 'profile' /> */}
              <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.icon}
        alt="profile_picture"
        className="profile_circle"
        />
          </motion.div>
          

{/* <motion.div
  variants={scaleVariants}
  whileInView={scaleVariants.whileInView}
  className="app__header-circles"
>
  {[images.flutter, images.python, images.react, images.git, images.javascript].map((circle, index) => (
    <div className="circle-cmp app__flex" key={`circle-${index}`}>
      <img src={circle} alt="profile_bg" />
    </div>
  ))}
</motion.div> */}
</div>

);}

  export default AppWrap(Header, 'home');
