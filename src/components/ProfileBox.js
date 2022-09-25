import React from 'react'
import dot from "../images/dot.svg";

{/*Api veya veritabanından gelen veriler burada render edilecek */}

const ProfileBox = ({name, username}) => {
  return (
    <div className='flex justify-start items-center mb-4 hover:bg-gray-extraLight transform transition-colors duration-200 rounded-full p-3 ml-3 mr-3'>
      <img className='w-11 h-11 rounded-full' src='https://avatars.githubusercontent.com/u/99968182?s=400&u=2f7b439eab77cfab0eedd5ce81e45fbb9264365c&v=4'></img>
      <div className='flex flex-col pl-3'>
        <span className='font-bold text-sm '>
            {name}
        </span>
        <span className='text-sm text-gray-dark'>
            {username}
        </span>
      </div>
         <img src={dot} className="h-4 w-4 ml-8 "/>
    </div>
  )
}

export default ProfileBox
