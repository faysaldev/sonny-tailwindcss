import {motion} from 'framer-motion'
import { useState } from 'react'
import AnimateModal from './AnimateModal'
import Loader from './Loader'

const buttonVarents= {
    initi:{
        y:-1000
    },
    anima:{
        y:0,
        transition:{
            type:'spring',

        }
    },
    hover:{
        scale:[1.5,1,1.5,1,1.5],
        transition:{
            yoyo:Infinity,
            duration:2
        }
    }
}

function AnimateMotion() {
    const [modal,setModal]=useState(false)
    return (
        <motion.div>
            <h1>Hellow World I am a AnimateMotion Conponents</h1>

            <div className="mt-[50px]">
                <Loader />
            </div>

            <motion.button variants={buttonVarents} class='text-sm border rounded-md border-gray-400 px-6 py-3 bg-red-400 text-white' animate='anima' initial='initi' whileHover='hover' drag onClick={()=> setModal(true)}>CLick Me</motion.button>

            {modal && (
                <div className='text-xl fixed top-0 left-0 bg-[#000] w-screen h-screen'>
                    <AnimateModal setModal={setModal} />
                </div>
            )}
        </motion.div>
    )
}

export default AnimateMotion
