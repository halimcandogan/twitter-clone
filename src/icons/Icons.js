import React from "react";
import IconPath from '../icons/IconPath.json'

{/*İconları twitter sitesinden path şeklinde aldığımız için tek tek component haline getirdim. Pathlarını  bir json dosyasında toplayarak daha düzgün olmasını sağladım. */}

const Svg = ({ children, className }) => {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`}>
      {children}
    </svg>
  );
};

export const Icon = ({ className, path, path2, path3, path4, children }) => {
  return (
    <Svg className={className}>
      <g>
        <path d={path}></path>
        <path d={path2}></path>
        <path d={path3}></path>
        <path d={path4}></path>
        {children}
      </g>
    </Svg>
  );
};

export const HomeIcon = () => {
  return (
    <Icon className="w-7 h-7" path={IconPath.Homeİcon}/>
  );
};

export const ExploreIcon = () => {
  return (
    <Icon className="w-7 h-7" path={IconPath.ExploreIcon}/>
  );
};

export const NotificationsIcon = () => {
  return (
    <Icon className="w-7 h-7" path={IconPath.NotificationsIcon}/>
  );
};

export const BookmarksIcon = () => {
  return (
    <Icon className="w-7 h-7" path={IconPath.BookmarksIcon}/>
  );
};

export const ListsIcon = () => {
  return (
    <Icon className="w-7 h-7" path={IconPath.ListsIcon.ListsIcon1} path2={IconPath.ListsIcon.ListsIcon2}/>
  );
};

export const ProfileIcon = () => {
  return (
    <Icon className="w-7 h-7" path={IconPath.ProfileIcon}/>
  );
};

export const MoreIcon = () => {
  return (
    <Icon className="w-7 h-7" path={IconPath.MoreIcon}>
    <circle cx="17" cy="12" r="1.5"></circle>
    <circle cx="12" cy="12" r="1.5"></circle>
    <circle cx="7" cy="12" r="1.5"></circle>
    </Icon>
  );
};

export const SearchIcon = () => {
  return (
    <Icon className="w-5 h-5" path={IconPath.SearchIcon}/>
  );
};

export const PopulerIcon = () => {
  return (
    <Icon className="w-6 h-6 cursor-pointer text-black" path={IconPath.PopulerIcon}/> 
  );
};

export const ImageIcon = () => {
  return (
    <Icon className="w-6 h-6 text-primary-base" path={IconPath.ImageIcon}/>
  );
};

export const GIFIcon = () => {
  return (
    <Icon className="w-6 h-6 text-primary-base" path={IconPath.GIFIcon.GIFIcon1} path2={IconPath.GIFIcon.GIFIcon2}/>
  );
};

export const PollIcon = () => {
  return (
    <Icon className="w-6 h-6 text-primary-base" path={IconPath.PollIcon}/>
  );
};

export const ReplyIcon = () => {
  return (
    <Icon className="w-5 h-5 text-gray-light" path={IconPath.ReplyIcon}/>
  );
};

export const ReTweetIcon = () => {
  return (
    <Icon className="w-5 h-5 text-gray-light" path={IconPath.ReTweetIcon}/>
  );
};

export const LikeIcon = () => {
  return (
    <Icon className="w-5 h-5 text-gray-light " path={IconPath.LikeIcon}/>
  );
};

export const ShareIcon = () => {
  return (
    <Icon className="w-5 h-5 text-gray-light" path={IconPath.ShareIcon.ShareIcon1} path2={IconPath.ShareIcon.ShareIcon2}/>  
  );
};

export const EmojiIcon = () => {
  return (
    <Icon className="w-6 h-6 text-primary-base" path={IconPath.EmojiIcon.EmojiIcon1} path2={IconPath.EmojiIcon.EmojiIcon2}>
        <circle cx="14.738" cy="9.458" r="1.478"></circle>
        <circle cx="9.262" cy="9.458" r="1.478"></circle></Icon> 
  );
};

export const ScheduleIcon = () => {
  return (
    <Icon className="w-6 h-6 text-primary-base" path={IconPath.ScheduleIcon.ScheduleIcon1} path2={IconPath.ScheduleIcon.ScheduleIcon2} path3={IconPath.ScheduleIcon.ScheduleIcon3} path4={IconPath.ScheduleIcon.ScheduleIcon4}/> 
  );
};

