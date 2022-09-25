import React, { useState } from 'react'
import { HomeIcon, ExploreIcon, NotificationsIcon, BookmarksIcon,ListsIcon,ProfileIcon,MoreIcon } from '../icons/Icons'

import Navigation from '../components/Navigation';
import twitterLogo from "../images/twitter.svg";
import ProfileBox from '../components/ProfileBox';

const navigation = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];


const Sidebar = () => {
 const [active, setActive] = useState("home");
 const ItemClick = (name) => {
  setActive(name);
 };

  return (
   <div className="h-screen sticky top-0 flex flex-col justify-between w-72 px-2 cursor-pointer">
     <div>
        <div className="mx-4 mb-1 mt-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest transform transition-colors duration-200">
          <img src={twitterLogo} alt="Twitter Logo" className=" cursor-pointer w-10" />
        </div>
        <nav className="mb-4">
          <ul>
            {/* Tekrar eden kod olmaması için map fonksiyonu ile sıralayabiliriz. */}
            {navigation.map(({ name, icon }) => (
              <Navigation
                key={name}
                name={name}
                Icon={icon}
                itemClick={ItemClick}
                active={active}
              />
            ))}
          </ul>
        </nav>
        <button className=" bg-primary-base hover:bg-primary-deark text-white shadow-lg rounded-full py-3.5  w-5/6 transform transition-colors duration-200 font-bold">
          Tweet
        </button>
     </div>
     <div>
      {/* Apiden veya veritabanından gelen bilgiler propslara yazılabilir */}
      <ProfileBox name="Halimcan Doğan" username="@halimcandogan" />
     </div>
   </div>
  )
}

export default Sidebar
