import React from 'react';
import './JobDetails.css'
const JobDetails = ({ jobInfo }) => {
    // const {job_description, job_responsibility, education_requirements, experiences}=jobInfo
    return (
        <section>
            <div>
                <img src="/src/assets/Vector.png" alt="" />
                <h1 className='job-heading'>Job Details</h1>
            </div>
            <div>
                {/**Job Detail info */}
                <div>
                    <p>Job Description:</p>
                    <p>Job Responsibility:</p>
                    <p>Educational Requirements:</p>
                    <p>Experiences:</p>
                </div>

                {/**Job Person Detail */}
                <div>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;