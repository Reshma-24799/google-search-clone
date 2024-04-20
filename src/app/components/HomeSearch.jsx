"use client"

import { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import  {useRouter } from 'next/navigation'

export default function HomeSearch() {
  const router = useRouter();
  const [ input, setInput] = useState('');
  const [ randomSearchLoading, setRandomSearchLoading] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }
  const  randomSearch =async  () => {
    setRandomSearchLoading(true);
    const response = await fetch('https://random-word-api.herokuapp.com/word')
        .then((res) => res.json())
        .then((data) => data[0]);
    if(!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  }

  return (
   <>
    <form 
      className='flex w-full mt-5 mx-auto max-w-[90%]
        border border-gray-200 px-5 py-3 rounded-full hover:shadow-md 
        transition-shadow sm:max-w-xl lg:max-w-2xl'
      onSubmit={handleSubmit}
    >  
      <AiOutlineSearch className='text-xl text-gray-700 mr-3 mt-1'/>
      <input 
        type="text"
        className='flex-grow focus:outline-none'
        onChange={(e) => setInput(e.target.value)}
      />
      <BsFillMicFill className='text-lg mt-1'/>
    </form>
    <div className='flex flex-col  space-y-2 sm:space-y-0 
      justify-center sm:flex-row mt-8 sm:space-x-10'>
        <button 
          className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 focus:outline-none
         active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'
          onClick={handleSubmit}
        >
          Google Search
        </button>
        <button 
          className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 focus:outline-none
           active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow
           disabled:opacity-80 disabled:shadow-sm'
           onClick={randomSearch}
           disabled={randomSearchLoading}
        >
          {randomSearchLoading ? 'Loading...' : 'I am Feeling Lucky'}
        </button>
    </div>
   </>
  )
}
