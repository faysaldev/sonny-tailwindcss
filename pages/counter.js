import {useState} from 'react'

function Counter() {

    const [counter,setCounter] = useState(0)

    return (
        <div className={`h-screen ${counter >=0?'bg-red-300 text-white ':'bg-green-400 text-black'}`}>
            
            <h1 className='text-7xl'>Number: <span min={0}>{counter}</span></h1>

        <div className='space-x-5'>
            <button className="counterBtn" onClick={() => setCounter(counter+1)}>+</button>
            <button className="counterBtn" onClick={() => setCounter(counter-1)}>-</button>
        </div>

        </div>
    )
}

export default Counter
