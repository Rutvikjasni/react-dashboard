import './App.css';
import ActionIcons from './Components/ActionIcons';
import WelcomeBanner from './Components/Header';
import Sidebar from './Components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar - Hidden on small screens, visible on medium+ screens */}
          <Sidebar />

        {/* Main Content */}
        <main className="p-4  flex-1">
          <WelcomeBanner name={"Rutvik"} />

          {/* Dashboard Content */}
          <div className='h-full'>
            <Dashboard />
          </div>
        </main>

        {/* Right Sidebar (Action Icons) - Shows below on small screens */}
        <aside className="mt-4 md:mt-0 md:col-span-1">
          <ActionIcons />
        </aside>
      </div>
    </>
  );
}

export default App;
