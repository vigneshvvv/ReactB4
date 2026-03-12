import { easeIn, easeInOut, motion } from "framer-motion";
import { useState } from "react";

function AnimationSample(){

    const [postion , setPosition] = useState(false);
    return (
        <>
        {/* <motion.h1
        initial={{x: -100, opacity: 0}}
        animate= {{x:500, opacity: 1}}
        transition={{duration: 2}}
        whileHover={{scale: 1.2}}
        >
        Welcome to home page
        </motion.h1>
         <motion.h1
        initial={{x: -100, opacity: 0}}
        animate= {{x:500, opacity: 1}}
        transition={{duration: 2}}
        whileHover={{scale: 1.2}}
        >
        This is sample content
        </motion.h1>
        <motion.div style={{backgroundColor: "blue", width: 100, height: 100, display: "flex",margin: 200, left: 500}}
        // animate= {{rotate: 360}}
        animate = {{x: postion? -200: 200}}
        // transition={{duration: 2}}
        // whileHover={{scale: 1.1}}
        onClick={() => setPosition(!postion)}
        >
            
        </motion.div> */}

        <motion.div
        initial = "hidden"
        animate = "visible"
        variants={{
            hidden: {},
            visible: {
                transition:{
                    staggerChildren: 1,
                },
            },
        }}>

            <motion.h1 variants={{hidden: {x: -600, opacity: 0}, visible:{x: 500, opacity: 1, transition:{duration: 2, ease: easeIn}}}}>
                Welcome to react animation
            </motion.h1>
            <motion.h1 variants={{hidden: {x: -600, opacity: 0}, visible:{x: 560, opacity: 1, transition:{duration: 2, ease: easeIn}}}}>
                let's get started
            </motion.h1>

        </motion.div>


        </>
    );
}

export default AnimationSample;