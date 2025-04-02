import MenuDropdown from "./MenuDropdown";

const RightSidebar = () => {
  return (
    <div className="bg-gray-100 rounded-3xl p-4 w-full max-w-sm mx-auto max-h-80 md:max-h-full">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-white rounded-full p-2">
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

      <div className="space-y-2">
        <MenuDropdown label="Calendar ">
          <div className="p-4">Calendar Content</div>
        </MenuDropdown>

        <MenuDropdown label="To Do">
          <div className="p-4">To Do Content</div>
        </MenuDropdown>

        <MenuDropdown label="Announcement 05">
          <div className="p-4">Announcement Content</div>
        </MenuDropdown>
      </div>

      <div className="flex flex-wrap justify-between items-center mt-4 bg-white p-2 rounded-lg gap-2">
        {[
          "bg-orange-200",
          "bg-blue-200",
          "bg-green-200",
          "bg-gray-200",
        ].map((bgColor, index) => (
          <button
            key={index}
            className={`${bgColor} rounded-lg p-3 flex-1 min-w-[45%] flex justify-center`}
          >
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
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
