import {motion,useCycle} from 'framer-motion'

const loaderVarients ={
    animateOne:{
        x:[-20,20],
        y:[0,-30],
        transition:{
            x:{
                yoyo:Infinity,
                duration:0.9
            },
            y:{
                yoyo:Infinity,
                duration:0.9
            }
        }
    },
    animateTwo:{
        x:[30,-60],
        y:[-50,100],
        transition:{
            x:{
                yoyo:Infinity,
                duration:0.9
            },
            y:{
                yoyo:Infinity,
                duration:0.9
            }
        }
    }
}

function Loader() {
    const [animation,cycleAnimation]=useCycle("animateOne","animateTwo");
    return (
        <>
        <motion.div
        variants={loaderVarients} animate={animation} 
        className='w-4 h-4 rounded-full bg-white mx-auto'
        > 
        </motion.div>

        <button className="btn" onClick={()=> cycleAnimation()}>Change the useCycle</button>
        </>
    )
}

export default Loader
