import React from 'react'


const Home = () => {
  return (
    <div  className='lg:px-12 px-6 py-14 flex flex-col lg:flex-row justify-around lg:justify-between items-center w-full h-[70vh] '>
     
     <div className=' lg:pt-0 space-y-6 flex flex-col'>
        <p className=' font-semibold space-y-3 sm:text-4xl md:text-5xl text-2xl text-black'>The free, fun and effective<br/> way to learn language!</p>
        <div>
        <button className='bg-blue-500 rounded-lg text-white px-3 py-2  text-lg '>contact us</button>
        </div>
        
     </div>
     <img className=' mb-44 lg:w-[600px]'  src="https://i.ibb.co/Z6jBvHb/Web-development-Flatline-1.png" alt="edu" />
    </div>
  )
}

export default Home