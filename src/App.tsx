import './App.css'
import { NavLink } from "react-router";

import Root from './pages/Root';

function App() {
  return (
    <>
      <div className='max-w-5xl mx-auto flex flex-col items-center justify-center px-4'>
        <div className='flex flex-row justify-between w-full my-6 items-center' >
          <h1 className='text-3xl font-bold'>Vitali Bondur</h1>
          <nav>
            <ul className='flex flex-row gap-2'>
              <li><NavLink to="/" className={({ isActive }) => isActive ? "font-bold" : ""}>Blog</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? "font-bold" : ""}>About</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold" : ""}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>
        <Root />
      </div>
    </>
  )
}

export default App
