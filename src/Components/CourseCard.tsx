import React from 'react';
import { FaRegFolder } from 'react-icons/fa';
import { RiUserVoiceLine } from 'react-icons/ri';
import { TfiWrite } from 'react-icons/tfi';
import StatusBadge from './StatusBadge';

interface CardProps {
  imageUrl: string;
  badgeText: string;
  title: string;
  id: string;
  bgColor:string;
  textColor:string;
  onLike: () => void;
  onShare: () => void;
  onSave: () => void;
  onMore: () => void;
}

const CourseCard: React.FC<CardProps> = ({
  imageUrl,
  badgeText,
  title,
  id,
  onLike,
  onShare,
  onSave,
  onMore,
  bgColor,
  textColor
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-full  mx-auto relative">
      <div className="relative">
        <img src={imageUrl} alt="Card Image" className="h-45 w-full object-cover" />
        <button
          onClick={onLike}
          className="absolute top-2 right-2 bg-white rounded-full p-2 text-red-500 hover:bg-gray-100"
        >
          {/* Replace with your like icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      <span className={` absolute bottom-24 left-3`}>
      <StatusBadge   text={badgeText} bgColor={bgColor} textColor={textColor}/>
        </span>
      <div className="p-4 flex flex-col flex-grow">
      
        <h2 className="text-lg font-semibold mb-1">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{id}</p>

        <div className="flex  items-center mt-auto">
          <div className="flex space-x-2">
            <button onClick={onShare} className="text-gray-500">
              {/* Replace with your share icon */}
              <RiUserVoiceLine />

            </button>
            <button onClick={onSave} className="text-gray-500">
              {/* Replace with your save icon */}
              <TfiWrite />

            </button>
            <button onClick={onMore} className="text-gray-500">
            {/* Replace with your more icon */}
            <FaRegFolder />
          </button> 
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default CourseCard;