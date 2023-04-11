import React, { useEffect, useState } from 'react';
import './JobDetails.css'
import { useLoaderData, useParams } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';
const JobDetails = () => {
    // const {job_description, job_responsibility, education_requirements, experiences}=jobInfo
    // const {job_description, job_responsibility, education_requirements, experiences}=useLoaderData()
    // console.log(jobInfo)
    // const jobDetails=useLoaderData()
    // const [jobState, setJobState] = useState([]);
    // useEffect(() => {
    //     fetch('featured.json').then(res => res.json()).then(data => setJobState(data))
    // }, []);

    // eivabe rekhe dibo
    // const { id } = useParams()
    // const jobFeatured = useLoaderData()
    // // console.log(jobFeatured)


    // const [jobDetailing, setJobDetailing] = useState([])
    // useEffect(() => {
    //     jobFeatured.find(jf => jf.id == id)
    //     setJobDetailing(jobFeatured)
    // }, [])
    // console.log(jobFeatured.job_description)



    let { id } = useParams()
    // const jobFeatured = useLoaderData()
    // console.log(jobFeatured)
    // {jobFeatured.job_description}

    const [jobDetailing, setJobDetailing] = useState([])
    useEffect(() => {
        fetch('/featured.json').then(res => res.json()).then(data => setJobDetailing(data))
    }, [])
    const details = jobDetailing?.filter(job => job.id === id)
    console.log(details[0])
    // const { job_description, job_responsibility, education_requirements, experiences } = details[0]
    return (
        <section>
            <div>
                <img src="/src/assets/Vector.png" alt="" />
                <h1 className='job-heading'>Job Details</h1>
            </div>
            <div className='flex justify-around'>
                {/**Job Detail info */}

                <div className='mb-2'>
                    <p>Job Description:</p>
                    <p>Job Responsibility:</p>
                    <p>Educational Requirements:</p>
                    <p>Experiences:</p>
                </div>

                {/**Job Person Detail */}
               
                
            </div>
        </section>
    );
};

export default JobDetails;
{/**
<p><span className='font-bold'>Job Description:</span>{job_description}</p>
                    <p><span className='font-bold'>Job Responsibility:</span>{job_responsibility}</p>
                    <p><span className='font-bold'>Educational Requirements:</span>{education_requirements}</p>
                    <p><span className='font-bold'>Experiences:</span>{experiences}</p> */}



                    {/** <div className='bg-purple-100 p-5 rounded-lg'>
                    <p className="jobs-heading mt-3">Job Details</p>
                    <div className='gap-2 flex flex-row'>
                        <img className='salary-logo' src="/src/assets/Frame.png" alt="" />
                        <p>Salary: </p>
                    </div>
                    <div>
                        <img className='' src="/src/assets/Frame-1.png" alt="" />
                        <h2 className="jobs-heading mt-3">Job Title :</h2>
                    </div>
                    <p className="jobs-heading mt-3">Contact Information</p>
                    <hr className='font-bold border' />
                    <div className='gap-2 flex flex-row mb-2'>
                        <img className='' src="/src/assets/Frame-2.png" alt="" />
                        <p>Phone: </p>
                    </div>
                    <div className='gap-2 flex flex-row mb-2'>
                        <img className='' src="/src/assets/Frame-3.png" alt="" />
                        <p>Email: </p>
                    </div>
                    <div className='gap-2 flex flex-row mb-2'>
                        <img className='' src="/src/assets/Frame-4.png" alt="" />
                        <p>Address: </p>
                    </div>
                    <button className='btn mt-5'>Apply Now</button>
                </div> */}