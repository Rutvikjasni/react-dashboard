import { FaFilter, FaThLarge, FaRegFileAlt, FaBriefcase, FaBullhorn, FaEdit, FaUsers, FaEnvelope, FaInfoCircle, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-full md:w-20 bg-yellow-800 p-4 flex md:flex-col items-center space-y-4">
      <button className="p-2 rounded-full bg-yellow-600 text-white hover:bg-yellow-500">
        <FaFilter size={20} />
      </button>
      <div className="p-2 rounded-full bg-white text-yellow-800">
        <FaThLarge size={20} />
      </div>
      <div className="flex flex-col bg-yellow-700 rounded-lg p-2 space-y-4 items-center">
        <FaRegFileAlt size={20} className="text-white" />
        <FaBriefcase size={20} className="text-white" />
        <FaBullhorn size={20} className="text-white" />
        <FaEdit size={20} className="text-white" />
        <FaUsers size={20} className="text-white" />
        <FaEnvelope size={20} className="text-white" />
        <FaInfoCircle size={20} className="text-white" />
        <FaQuestionCircle size={20} className="text-white" />
      </div>
      <div className="p-2 rounded-full bg-yellow-700 text-white hover:bg-yellow-600">
        <FaSignOutAlt size={20} />
      </div>
    </div>
  );
};

export default Sidebar;
