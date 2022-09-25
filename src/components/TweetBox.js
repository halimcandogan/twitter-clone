import React from 'react'
import { ImageIcon,GIFIcon, PollIcon, EmojiIcon, ScheduleIcon } from '../icons/Icons'

const TweetBox = () => { 
  return (
    <div className='flex-1 flex-col mt-2 px-2 '>
      <textarea name="" id=""  placeholder="What's happening ? " className='w-full text-xl outline-none overflow-hidden resize-none' />
    <div className='flex items-center justify-between'>
      <div className='flex -ml-3'>
         <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-timeline'>
          <ImageIcon /> 
         </div>
         <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-timeline'>
          <GIFIcon /> 
         </div>
         <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-timeline'>
          <PollIcon /> 
         </div>
         <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-timeline'>
          <EmojiIcon/> 
         </div>
         <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-timeline'>
          <ScheduleIcon /> 
         </div>
      </div>
    <button className='hover:bg-primary-base/50 bg-primary-base text-white rounded-full px-4 py-2 text-md font-bold' >Tweet</button>
    </div>
    </div>
  )
}

export default TweetBox
