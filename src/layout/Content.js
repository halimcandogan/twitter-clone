import React from 'react'
import Feed from '../components/Feed'
import TweetBox from '../components/TweetBox'
import { PopulerIcon } from '../icons/Icons'

const Content = () => {
  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight" >
      <header className='flex justify-between items-center p-4  sticky top-0 z-5 bg-white/95'>
        <span className='font-bold text-gray-900 text-xl cursor-pointer'>
          Home
        </span>
        <PopulerIcon />
      </header>
      <div className='flex space-x-4 p-3 border-b '>
        <img src="https://avatars.githubusercontent.com/u/99968182?s=400&u=2f7b439eab77cfab0eedd5ce81e45fbb9264365c&v=4" className='w-11 h-11 rounded-full' alt="" />
      
      <TweetBox />
      </div>
      {/* Tweet verileri apiden veya veri tabanından çekilebilir */}
      <Feed name="Halimcan" username="@halimcandogan" time="25 Eylül" image="https://reactjs.org/logo-og.png" profileimage="https://avatars.githubusercontent.com/u/99968182?s=400&u=2f7b439eab77cfab0eedd5ce81e45fbb9264365c&v=4" content="React Js " />
      <Feed name="Halimcan" username="@halimcandogan" time="25 Eylül" image="https://reactjs.org/logo-og.png" profileimage="https://avatars.githubusercontent.com/u/99968182?s=400&u=2f7b439eab77cfab0eedd5ce81e45fbb9264365c&v=4" content="React Js " />
      
    </main>
    
  )
}

export default Content
