import React, { useState } from 'react'
import {color, motion} from 'framer-motion'


const Test = () => {

    const [open,setOpen] = useState(false);
    const custom = {
        stateA:{
            opacity:0,
            scale:0.5,
            transition:{duration:1.4},
            x:-100,
        },
        stateB:{
            opacity:1,
            scale:[1,2,2,1,1],
            borderRadius:["0%", "0%", "50%", "50%", "0%"],
            rotate: [0, 0, 180, 180, 0],
            transition:{
                duration:2,
                ease:"easeInOut",
                times:[0,0.2,0.5,0.8,1],
                repeatDelay:1,
            },
           

        }
    }
    const list = {
        visible:{
            opacity:1,
            transition:{staggerChildren:1},
        },
        hidden:{
            opacity:0,
        },
    }
    
    const items = ["Hello","World","Again"]
  
  
  return (
    <div className="course flex gap-10">
        <motion.div className='box'
            variants={custom}
            initial="stateA"
            animate={open?'stateB':'stateA'}
        ></motion.div>
        <button onClick={()=>setOpen(e=>!e)}>Click Me</button>
        <motion.ul variants={list} initial="hidden" animate={open?"hidden":"visible"}>
            {items.map((item)=>(
                <motion.li key={item} variants={list}>
                    {item}
                </motion.li>
            ))}
        </motion.ul>
    </div>
  )
}

export default Test
