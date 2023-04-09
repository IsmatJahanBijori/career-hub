import React, { useEffect, useState } from 'react';
import './Home.css'
// import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
const Home = () => {

    const [jobs, setJobs] = useState([])
    const [jobState, setJobState] = useState([]);
    useEffect(() => {
        fetch('jobs.json').then(res => res.json()).then(data => setJobs(data))
    }, [])

    useEffect(() => {
        fetch('featured.json').then(res => res.json()).then(data => setJobState(data))
    }, []);


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

            {/*Job Category List start*/}
            <section>
                <p className='job-heading'>Job Category List</p>
                <p className='paragraph text-center mt-4 mb-8'>Discover tens of thousands of employment options with the necessary knowledge.</p>

                {/**card */}
                <div className="my-container">
                    <div className='grid mb-8 mx-32 gap-32 lg:grid-cols-4 sm:grid-cols-2'>
                        {jobs.map(job => (<Job job={job} />))}
                    </div>
                </div>
            </section>
            {/*Job Category List end */}


            {/*Featured Jobs start */}
            <section>
                <p className='job-heading'>Featured Jobs</p>
                <p className='paragraph text-center mt-4 mb-8'>Discover tens of thousands of employment options with the necessary knowledge.</p>

                {/**card */}
                <div className="my-container">
                    <div className='grid mb-4 mx-16 gap-16 lg:grid-cols-2 sm:grid-cols-1'>
                        {jobState.map(jobInfo => (<FeaturedJobs key={jobInfo.id} jobInfo={jobInfo}></FeaturedJobs>))}
                    </div>
                </div>
            </section>
            {/*Featured Jobs end */}
        </React.Fragment>
    );
};

export default Home;

