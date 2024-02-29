import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
const Search = ({onSearch}) => {
  const [username,setUsername]=useState('');
  
  return (
    <div className='w-full'>
        <div className='flex px-5 py-2 h-full w-full bg-brown-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 border border-gray-100 items-center  justify-between '>
         <div className='flex items-center gap-2 w-full pr-5 '>
         <FiSearch/>
         <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Search repos...' className='bg-transparent outline-none w-full' />
         </div>
         <button  onClick={(e)=>onSearch(e,username?username:"")}  class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Search</button>
        </div>
    </div>
  )
}

export default Search