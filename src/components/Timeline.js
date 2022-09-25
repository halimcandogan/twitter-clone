import React from 'react'
import Trends from './Trends';

{/*Api veya veritabanından gelen veriler burda render edilecek */}
const trends = [
  {
    name: "React Js",
    tweet: "52,7 Tweet",
    subject: "Developer",
  },
  {
    name: "Javascript",
    tweet: "42,8 Tweet",
    subject: "Developer",
  },
  {
    name: "Html/Css",
    tweet: "23,6 Tweet",
    subject: "Developer",
  },
  {
    name: "Assembly",
    tweet: "47,1 Tweet",
    subject: "Developer",
  },
  {
    name: "Angular",
    tweet: "12,7 Tweet",
    subject: "Developer",
  },
  {
    name: "C++",
    tweet: "22,5 Tweet",
    subject: "Developer",
  },
  {
    name: "Fronted Developer",
    tweet: "19,8 Tweet",
    subject: "Developer",
  },
];

const Timeline = () => {
  return (
    <div className='flex justify-center' > 
    <div className='flex flex-col items-start bg-gray-timeline  rounded-lg'>
       <div className='font-bold text-lg  pl-4 pt-2 pb-2'>Trends for you</div>
       <div>
        <ul>
          {/* Apiden veya veritabanından gelen veriler */}
        {trends.map(({ name, tweet, subject }) => (
              <Trends
                key={name}
                name={name}
                tweet={tweet}
                subject={subject}     
              />
            ))}
        </ul>
       </div>
       <div className='text-primary-base cursor-pointer pl-4 pb-2 pt-1  hover:bg-gray-extraLight w-80  transform transition-colors duration-200'>
        Show more
       </div>
    </div>   
   </div> 
  )
}

export default Timeline
