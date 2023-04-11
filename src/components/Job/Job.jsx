import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Job = ({ job }) => {
    // const job=useLoaderData()
    return (
            <div className="card w-64 bg-slate-100">
                <figure className="px-10 pt-10">
                    <img src={job.logo} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{job.Job_title}</h2>
                    <p>{job.job_available}</p>
                </div>
            </div>
    );
};

export default Job;