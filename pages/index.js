import { useTheme } from 'next-themes';
import Head from 'next/head'
import Profile from '../components/Profile'

export default function Home() {

  const {theme,setTheme} = useTheme();

  return (
    <div>
      <Head>
        <title>Test tailwind css with sonny sangha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={`p-10 text-3xl text-pink-300 mb-10 text-center underline ${true? 'bg-red-800':'bg-green-700'} dark:bg-yellow-500 text-white dark:no-underline`}>Lets build a profile commponents with tailwindcss</h1>
      <Profile />

      <button className="mb-10 btn bg-yellow-300 text-black" onClick={()=> setTheme(theme ==="dark"?"light":"dark")}>Theme Change</button>


      <div className='p-3 grid sm:grid-cols-3 grid-cols-2 gap-4 sm:w-1/2 sm:mx-auto mb-20 grid-flow-row-dense'>
          <button className='btn bg-gray-400'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn col-start-4'>Click Me 3</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>
          <button className='btn'>Click Me 1</button>

      </div>


      <h1 className='text-2xl text-green-600 fm:text-4xl fm:hover:underline dark:text-white dark:hover:text-purple-400'>Hello Faysal Break Points</h1>

      {/* postion property */}

<div className="mt-10 w-[700px] sm:mx-auto">
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10 relative'>
          Example. Change this div position
            <div className='absolute h-12 w-12 bg-yellow-800 rounded-full top-3 -right-52 animate-bounce'/>
        </div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
        <div className='rounded border-gray-300 mb-2 border p-10'>Example 1</div>
</div>



    </div>
  )
}
