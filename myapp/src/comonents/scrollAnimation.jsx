import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { easeIn, easeInOut, motion } from "framer-motion";

import gojo from "./gojo.jpeg"
import tanjiro from "./tanjiro.jpeg"

 function ScrollAnimation(){
    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1]);
    return(<>
    <div className="w-full h-[200vh] bg-black">
        <section className="h-screen w-full flex items-center justify-center bg-gray-800 text-white text-4xl font-bold">
            Welcome to home page
        </section>
        <div style={
            {width: 3000, height:3000 , top: 1000, margin: 1000}
        }>
        <motion.section 
        ref= {ref}
        style= {{scale}}
        className="h-screen w-full flex items-center justify-center overflow-hidden">
            <img src={tanjiro}
             alt="Zoom Section"
          className="w-full h-full object-cover"
            />
      
                {/* <img
          src={gojo}
          alt="Zoom Section"
          className="fullimage"
        /> */}
       

            <h1 className="absolute text-white text-5xl font-bold drop-shadow-lg">
                samle text for testing
            </h1>

        </motion.section>
        </div>


    </div>
    
    </>);
}

export default ScrollAnimation;