import MenuDropdown from './MenuDropdown';

const ActionIcons = () => {
    return (
        <div className="bg-gray-100 rounded-3xl p-4 w-full max-w-sm mx-auto max-h-80">
          <div className="flex justify-between items-center mb-4">
            <button className="bg-white rounded-full p-2">
              {/* Replace with your notification icon */}
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.158a2.032 2.032 0 01-1.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
    
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-1 bg-white rounded-lg px-2 py-1">
                <span>En</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
    
              <button className="rounded-full overflow-hidden w-10 h-10">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </button>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
    
          <MenuDropdown label="Calendar ">
            <div className="p-4">
              {/* Add your calendar content here */}
              Calendar Content
            </div>
          </MenuDropdown>
    
          <MenuDropdown label="To Do">
            <div className="p-4">
              {/* Add your to-do content here */}
              To Do Content
            </div>
          </MenuDropdown>
    
          <MenuDropdown label="Announcement 05">
            <div className="p-4">
              {/* Add your announcement content here */}
              Announcement Content
            </div>
          </MenuDropdown>
    
          <div className="flex justify-between items-center mt-4">
            <button className="bg-orange-200 rounded-lg p-3">
              {/* Replace with your icon */}
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m11-3H9m12-3v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2h10m0 0l-2-2m2 2l2-2"
                />
              </svg>
            </button>
            <button className="bg-blue-200 rounded-lg p-3">
              {/* Replace with your icon */}
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
                  d="M9.663 17h4.673M12 12v.01M12 3v.01M12 18v.01M12 23v.01M12 16H9.663M12 16h4.673M14.337 6H9.663M12 6v.01M14.337 11H9.663"
                />
              </svg>
            </button>
            <button className="bg-green-200 rounded-lg p-3">
              {/* Replace with your icon */}
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
                  d="M3 9a2 2 0 012-2h.276a2 2 0 001.414-.586l.828-.828A2 2 0 0111.314 6H12a2 2 0 012 2v1h8m-8 3v1a3 3 0 00-3 3h-1a3 3 0 01-3-3v-1m6 0h6m-6 0a3 3 0 00-3-3v-1a3 3 0 013 3v1"
                />
              </svg>
            </button>
            <button className="bg-gray-200 rounded-lg p-3">
              {/* Replace with your icon */}
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9.828v10M10 3.93c-1.666-.314-3.288.59-3.66 2.25l-.24 1.44a.75.75 0 00.96 1.07l1.44-.24c1.666-.314 3.288.59 3.66 2.25l.24 1.44a.75.75 0 00.96 1.07l1.44-.24c1.666-.314 3.288.59 3.66 2.25l.24 1.44a.75.75 0 00.96 1.07l1.44-.24c1.666-.314 3.288.59 3.66 2.25"
                />
              </svg>
            </button>
            <button className="bg-purple-200 rounded-lg p-3">
              {/* Replace with your icon */}
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      );
}

export default ActionIcons
