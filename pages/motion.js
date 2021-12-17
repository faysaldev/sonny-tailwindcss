import {motion, useMotionValue, useTransform} from 'framer-motion'
import AnimateMotion from '../components/motion/AnimateMotion.js'
import Banner from '../components/motion/Banner.js';


const containerVarients={
    hidden:{
        x:'100vw',
        y:0
    },
    visible:{
        x:0,
        y:0
    }
}


function Motion() {

const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);


    return (
        <motion.div
        variants={containerVarients}
        animate='visible'
        initial="hidden"
        className="text-6xl text-purple-500 text-center pt-10">
            <h1>Hello I want to create a motion image</h1>
            <AnimateMotion />


        <motion.div
           style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100 }}
              drag
              dragElastic={0.16}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0, }}
              whileTap={{ cursor: "grabbing" }}
              className='bg-gray-100 back w-[100%] bg-opacity-50'

        >
                <motion.button 
            style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100, cursor:'grab' }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }} className="btn shadow-lg">Drag Button</motion.button>
        </motion.div>

          <Banner />
        </motion.div>
    )
}

export default Motion
