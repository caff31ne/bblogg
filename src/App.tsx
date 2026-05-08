import './App.css'
import { NavLink } from "react-router";
import { FaLinkedinIn } from "react-icons/fa";

import Root from './pages/Root';

function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-center px-4'>
        <header className='w-full bg-gray-100 py-6 text-neutral-800' >
          <nav className='flex flex-row justify-between my-6 items-center max-w-5xl mx-auto'>
            <h1 className='text-3xl font-bold'>VITALII BONDUR</h1>
            <ul className='flex flex-row gap-4 items-center text-xl font-medium'>
              <li><NavLink to="/" className={({ isActive }) => isActive ? "font-bold text-orange-500" : ""}>Blog</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? "font-bold text-orange-500" : ""}>About</NavLink></li>
              <li><a className="text-sky-500" href="https://www.linkedin.com/in/vitalii-bondur/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
            </ul>
          </nav>
        </header>
        <div className='w-full max-w-5xl mx-auto py-6'>
          <Root />
        </div>
      </div>
    </>
  )
}

export default App
