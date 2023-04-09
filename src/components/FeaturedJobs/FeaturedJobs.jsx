import React from 'react';
import './FeaturedJobs.css'
import { Link } from 'react-router-dom';
const FeaturedJobs = ({ jobInfo }) => {
    return (
        <div className=" w-full bg-slate-100 border rounded-lg">
            <figure className="px-10 pt-10">
                <img src={jobInfo.logo} alt="" className="rounded-xl logo" />
            </figure>
            <div className="ml-10">
                <h2 className="jobs-heading mt-3">{jobInfo.job_title}</h2>
                <p className='jobs-paragraph'>{jobInfo.company_name}</p>
                <div className='flex flex-row gap-3 mt-3'>
                    <button className='text-outlined color'>{jobInfo.remote_or_onsite}</button>
                    <button className='text-outlined color'>{jobInfo.full_time_or_part_time}</button>
                </div>

                <div className='location-salary gap-6 mt-4 mb-6 flex flex-row'>

                    <div className='gap-2 flex flex-row'>
                        <img className='loco-logo' src={jobInfo.location_logo} alt="" />
                        <p>{jobInfo.location}</p>
                    </div>

                    <div className='gap-2 flex flex-row'>
                        <img className='salary-logo' src={jobInfo.frame} alt="" />
                        <p>Salary: {jobInfo.location}</p>
                    </div>
                </div>     
                <Link to='/job'><button className='btn mb-4 mt-auto rounded-lg' jobInfo={jobInfo}>View Details</button></Link>
            </div>
        </div>
    );
};

export default FeaturedJobs;