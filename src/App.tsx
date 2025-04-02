import './App.css';
import ActionIcons from './Components/RightSidebar';
import WelcomeBanner from './Components/Header';
import Sidebar from './Components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
    <div className="flex flex-col md:flex-row h-screen flex-wrap">
      {/* Sidebar */}
      <aside className="w-full md:w-20 bg-yellow-800 p-4 flex md:flex-col items-center space-y-4">
      <Sidebar />

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <div className="p-4 rounded-md text-center text-lg font-semibold">
        <WelcomeBanner name={"Rutvik"} />
        </div>

        {/* Cards Grid */}
        <div className="grid  gap-4 md:gap-6 mt-4">
              <Dashboard />
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="lg:w-1/4 w-full">
      <ActionIcons />
      
      </aside>
    </div>
    </>
  );
}

export default App;
