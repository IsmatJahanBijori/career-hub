import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='flex justify-around bg-slate-100 pt-10'>
            {/*heading */}
            <div className='mx-32'>
            <h1 className='heading'>One Step <br /><span>Closer To Your</span> <br /> <span className='color'>Dream Job</span></h1>
            <p className='paragraph'>Discover tens of thousands of employment options with the <br /> necessary knowledge. It is the future you. Locate <br /> it here. Manage every aspect of your job application process.
            </p>
            </div>
            {/*image */}
            <img src="/src/assets/P3OLGJ1 copy 1.png" alt="" />
            <div>
            </div>
        </div>
    );
};

export default Home;