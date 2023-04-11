import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='flex justify-around bg-slate-100'>
            <div className='text-2xl font-bold color'>
                <h1>Job Explorer</h1>
            </div>
            <div className='text-xl font-semibold'>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/statistics'>Statistics</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/appliedJobs'>Applied Jobs</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/blog'>Blog</NavLink>
            </div>
            <div>
            <button className='btn'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;

// {({ isActive }) => (isActive ? 'active' : 'default')}