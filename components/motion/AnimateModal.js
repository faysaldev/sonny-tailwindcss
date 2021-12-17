import {motion,AnimatePresence} from 'framer-motion'
import {useState} from 'react'

const modalVarients ={
    hidden:{
        y:-1000,
        opacity:0,
    },
    visible:{
        y:0,
        opacity:1,
        transition:{
            type:'spring',
            duration:0.9
        }
    },
}

function AnimateModal({setModal}) {
    const [data,setData] = useState([]);

    return (
        <AnimatePresence>
        <motion.div variants={modalVarients} animate='visible' initial='hidden' exit='hidden' className="w-[500px] mx-auto rounded-md shadow-md bg-white text-black min-h-[400px] mt-[70px]">
            <ul>
                <li>Send to the state</li>
            </ul>
            <button className="btn bg-red-500 mt-6" onClick={()=> setModal(false)}>Send</button>
        </motion.div>
        </AnimatePresence>
    )
}

export default AnimateModal
