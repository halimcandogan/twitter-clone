import React from 'react'


const Navigation = ({ name, Icon, active, itemClick }) => {
  const isActive = active === name;
  return (
    <li className="group mx-3" onClick={() => itemClick(name)}>
        <a href={name.toLowerCase()} className="cursor-pointer block text-xl pointer-events-none">
              <div className="inline-block mb-3">
                  <div className={`flex items-center group-hover:bg-gray-extraLight  rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200
                  ${isActive ? "font-bold" : ""}
                  `}>
                  <Icon /> 
                   <span className="ml-4 ">{name}</span>
                  </div>
              </div>
        </a>
    </li>
  );
};

export default Navigation
