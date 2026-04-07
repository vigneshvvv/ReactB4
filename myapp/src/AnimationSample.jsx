import {motion} from "framer-motion"

function AnimationSample(){
    return(<>
    {/* <motion.h1  initial={{x: -100, opacity:0}} animate={{x:400, opacity:1}} 
    transition={{duration: 2}} whileHover={{scale: 1.2}} >
        welcome to sample animation
    </motion.h1>
    <motion.h1 initial={{x: -100, opacity:0}} animate={{x:400, opacity:1}} 
    transition={{duration: 2}} whileHover={{scale: 1.2}} >
        This is sample content
    </motion.h1>
    <motion.div style={{backgroundColor: "blue", width: 100,
         height:100, display: "flex", margin: 200, left: 500}} 
         animate= {{rotate:360}}  whileHover={{scale: 1.1}}>

    </motion.div> */}

        <motion.div
         initial = "hidden"
         animate = "visible"
         variants={{
            hidden: {},
            visible:{
                transition:{
                    staggerChildren: 1,
                },
            },
         }}
        
        >
            <motion.h1  variants={{hidden: {x: -600, opacity: 0}, 
            visible:{x: 300, opacity:1}}} >Hi welcome</motion.h1>
             <motion.h1  variants={{hidden: {x: -600, opacity: 0}, 
            visible:{x: 300, opacity:1}}} >This is sample content</motion.h1>

        </motion.div>

    </>);
}

export default AnimationSample