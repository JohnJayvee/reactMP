import React, { useState } from 'react';
import useAuth from '../../components/Auth';
import useInactivityTimeout from '../../components/useInactivityTimeout'


const AdminIndex = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isLoggedIn = useAuth();

  useInactivityTimeout(() => {
    if (sessionStorage.getItem("token")) {
      sessionStorage.removeItem("token");
      window.location.reload();
    } else if (localStorage.getItem("token")) {
      return null;
    }
  });

  if (!isLoggedIn) {
    return null;
  }


  return (
    <div className="flex h-screen bg-gray-100">
      <div className={`fixed md:static inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-50`}>
        <nav>
          <ul className="space-y-2">
            <li className={`${activeSection === 'dashboard' ? 'bg-gray-700' : ''} rounded-lg`}>
              <a
                href="#dashboard"
                className="block p-2 rounded-lg transition duration-300 transform hover:scale-105"
                onClick={() => { setActiveSection('dashboard'); setIsSidebarOpen(false); }}
              >
                Dashboard
              </a>
            </li>
            <li className={`${activeSection === 'users' ? 'bg-gray-700' : ''} rounded-lg`}>
              <a
                href="#users"
                className="block p-2 rounded-lg transition duration-300 transform hover:scale-105"
                onClick={() => { setActiveSection('users'); setIsSidebarOpen(false); }}
              >
                Users
              </a>
            </li>
            <li className={`${activeSection === 'settings' ? 'bg-gray-700' : ''} rounded-lg`}>
              <a
                href="#settings"
                className="block p-2 rounded-lg transition duration-300 transform hover:scale-105"
                onClick={() => { setActiveSection('settings'); setIsSidebarOpen(false); }}
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'ml-64 md:ml-0' : ''}`}>
        <header className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-lg">
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <h1 className="text-2xl font-bold transition duration-300 transform hover:scale-105">Admin Panel</h1>
          <div>
            <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400 transition duration-300 transform hover:scale-105">
              Logout
            </button>
          </div>
        </header>
        <main className="p-4 flex-1 overflow-y-auto">
          <section
            id="dashboard"
            className={`${activeSection === 'dashboard' ? 'block' : 'hidden'} p-4`}
          >
            <h2 className="text-xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 shadow-lg rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-lg font-semibold">Card 1</h3>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className="bg-white p-4 shadow-lg rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-lg font-semibold">Card 2</h3>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className="bg-white p-4 shadow-lg rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-lg font-semibold">Card 3</h3>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </section>
          <section
            id="users"
            className={`${activeSection === 'users' ? 'block' : 'hidden'} p-4`}
          >
            <h2 className="text-xl font-bold mb-4">Users</h2>
            <p>This is the Users page.</p>
          </section>
          <section
            id="settings"
            className={`${activeSection === 'settings' ? 'block' : 'hidden'} p-4`}
          >
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            <p>This is the Settings page.</p>
          </section>
        </main>
      </div>
      {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
    </div>
  )
}

export default AdminIndex