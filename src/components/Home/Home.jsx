import React, { useEffect, useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {

    // category list
    // const jobs=useLoaderData()

    // featured job list
    // const jobState=useLoaderData()

    // category list
    const [jobs, setJobs] = useState([])
    // featured job list
    const [jobState, setJobState] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(false)

    // category list
    useEffect(() => {
        fetch('jobs.json').then(res => res.json()).then(data => setJobs(data))
    }, [])


    // featured job list
    useEffect(() => {
        fetch('featured.json').then(res => res.json()).then(data => setJobState(data))
    }, []);

     // featured job list
    useEffect(() => {
        fetch('featured.json').then(res => res.json()).then(data => setJobState(data))
    }, [jobState]);

    const handleShowAllJobs = () => {
        setShowAllJobs(true)
    }
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
                <img src="/public/P3OLGJ1 copy 1.png" alt="" />
            </section>

            {/*Job Category List start*/}
            <section>
                <p className='job-heading'>Job Category List</p>
                <p className='paragraph text-center mt-4 mb-8'>Discover tens of thousands of employment options with the necessary knowledge.</p>

                {/**card */}
                <div className="my-container">
                    <div className='grid mb-6 mx-32 gap-10 md:gap-32 lg:grid-cols-4 sm:grid-cols-2'>
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
                    <div className='grid mb-1 md:mb-2 mx-16 gap-8 lg:grid-cols-2 sm:grid-cols-1'>
                        {jobState.slice(0, showAllJobs ? 6 : 4).map(jobInfo => <FeaturedJobs key={jobInfo.id} jobInfo={jobInfo}></FeaturedJobs>)}
                    </div>
                </div>
                <div className='text-center mb-12'>
                    {
                        (!showAllJobs) && <span onClick={handleShowAllJobs}><button className='btn rounded-lg'>See All Jobs</button></span>
                    }
                </div>
            </section>
            {/*Featured Jobs end */}
        </React.Fragment>
    );
};
// {(!showAll) && <span onClick={handleShowAll}>
//                 <Button>See More</Button></span>}
export default Home;

