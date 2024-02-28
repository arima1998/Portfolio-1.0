import React from 'react'
import '../css/navbar.scss'
import Test from './Test'

import {motion} from "framer-motion"


const Navbar = () => {
  const spanVariants = {
    visible:{
      opacity:1,
      scale:1.2,
    },
    hidden:{
      opacity:0,
      scale:0.5,
    },
  };
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <div className="wrapper">
        <motion.span
          variants={spanVariants}
          initial="hidden"
          animate="visible"
          transition={{duration:0.5}}
        >Tawsif_Kz</motion.span>
        <div className="social">
            <a href='#'>Facebook</a>
            <a href='#'>Instagram</a>
            <a href='#'>Linked In</a>
            <a href='#'>Github</a>
        </div>
      </div>
      {/* <Test/> */}
    </div>
  )
}

export default Navbar
