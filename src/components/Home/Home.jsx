import React, { useEffect, useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';
const Home = () => {
    // const { jobs } = useLoaderData()
    // console.log(jobs)
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('jobs.json').then(res => res.json()).then(data => setJobs(data))
    }, [])
    return (
        <React.Fragment>

            {/*heading, image */}
            <section className='flex justify-around bg-slate-100 pt-10'>

                {/*heading */}
                <div className='mx-32'>
                    <h1 className='heading'>One Step <br /><span>Closer To Your</span> <br /> <span className='color'>Dream Job</span></h1>
                    <p className='paragraph'>Discover tens of thousands of employment options with the <br /> necessary knowledge. It is the future you. Locate <br /> it here. Manage every aspect of your job application process.
                    </p>
                </div>

                {/*image */}
                <img src="/src/assets/P3OLGJ1 copy 1.png" alt="" />
            </section>

            {/*Job Category List */}
            <section>
                <h4 className='job-heading'>Job Category List</h4>
                <p className='paragraph text-center mt-4 mb-8'>Discover tens of thousands of employment options with the necessary knowledge.</p>

                <div className="my-container">
                    <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
                        {jobs.map(job => (<Job job={job} />))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Home;

