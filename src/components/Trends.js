import React from 'react'

{/*Api veya veritabanından gelen veriler burda render edilecek */}
const Trends = ({subject, tweet, name}) => {
  return (
    <div >
      <li className=' hover:bg-gray-extraLight h-20 w-80 pl-4 cursor-pointer flex flex-col justify-center transform transition-colors duration-200 '>
        <div className='text-sm'>{subject}</div>
        <div className='font-bold'>{name}</div>
        <div className='text-sm'>{tweet}</div>
      </li>
    </div>
  )
}

export default Trends
