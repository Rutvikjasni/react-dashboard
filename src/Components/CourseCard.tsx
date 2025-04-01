import React from 'react';

interface CardProps {
  imageUrl: string;
  badgeText: string;
  title: string;
  id: string;
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
      <span className="bg-red-500 text-white rounded-full px-3 py-1 text-xs font-semibold mb-2 inline-block absolute bottom-26 left-5">
          {badgeText}
        </span>
      <div className="p-4 flex flex-col flex-grow">
      
        <h2 className="text-lg font-semibold mb-1">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{id}</p>

        <div className="flex justify-between items-center mt-auto">
          <div className="flex space-x-2">
            <button onClick={onShare} className="text-gray-500">
              {/* Replace with your share icon */}
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
                  d="M8.684 13.342C8.886 12.93 9 12.482 9 12c0-.482-.114-.93-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6-6m-6 6L6.316 6.316a2.478 2.478 0 00-3.485-.69c-.113.884.64 1.705 1.524 1.797a2.477 2.477 0 013.485-.691z"
                />
              </svg>
            </button>
            <button onClick={onSave} className="text-gray-500">
              {/* Replace with your save icon */}
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
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
          <button onClick={onMore} className="text-gray-500">
            {/* Replace with your more icon */}
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;