import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='flex justify-around bg-slate-100'>
            <div className='text-2xl font-bold color'>
                <h1>Job Explorer</h1>
            </div>
            <div className='text-xl font-semibold'>
                <Link className='color' to='/'>Home</Link>
                <Link className='color' to='/statistics'>Statistics</Link>
                <Link className='color' to='/appliedJobs'>Applied Jobs</Link>
                <Link className='color' to='/blog'>Blog</Link>
            </div>
            <div>
            <button className='btn'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;