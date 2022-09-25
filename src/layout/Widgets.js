import React from 'react'
import Timeline from '../components/Timeline'
import { SearchIcon } from '../icons/Icons'

const Widgets = () => {
  return (
    <aside className="w-96">
    <div className='flex items-center space-x-4 p-2.5 m-5 mt-1 bg-gray-timeline rounded-full text-gray-dark focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base focus-within:bg-white'>
       <SearchIcon  />
       <input type="Search" placeholder='Search Twitter' className='bg-transparent ml-2 outline-none' />
    </div>
    <div>
      <Timeline />
    </div>
   
    </aside>
  )
}

export default Widgets
