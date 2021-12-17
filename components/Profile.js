function Profile() {
    return (
        <div className='p-5 text-center sm:max-w-7xl sm:mx-auto sm:flex sm:items-center sm:text-left'>
            <div className='w-[400px] h-[400px] ring-4 ring-green-500 ring-offset-gray-800 rounded-full relative bg-red-400 transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer'>
                <img src="/faysal Untitled-1.png" className=' object-contain' />
                
                {/* this for active icon */}
                <div className='absolute -top-10 left-20 w-[20px] h-[20px] rounded-full bg-green-500 animate-ping' />
            </div>

            <div className='mt-10 sm:ml-10'>
                <h1 className='text-gray-500 hover:underline cursor-pointer sm:text-red-400 text-6xl dark:text-gray-100'>Faysal Mridha</h1>
                <p className='text-md pt-5 dark:text-green-900'>Love coding with the learning learning</p>
            </div>

        </div>
    )
}

export default Profile
