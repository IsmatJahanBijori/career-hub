import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const Statistics = () => {
    const assignment = [
        {
            "name": "Portfolio",
            "mark": 47
        },
        {
            "name": "HTML, CSS",
            "mark": 57
        },
        {
            "name": "Responsive Landing Page",
            "mark": 57
        },
        {
            "name": "Javascript basic",
            "mark": 53
        },
        {
            "name": "Integrate JS",
            "mark": 35
        },
        {
            "name": "Intermediate JS with API",
            "mark": 41
        },
        {
            "name": "Quiz Debugging",
            "mark": 60
        },
        {
            "name": "Knowledge Cafe",
            "mark": 52
        }
    ];
    return (
        <div>
            <PieChart width={1700} height={700}>
                <Tooltip />
                <Pie data={assignment} dataKey="mark" nameKey="name" cx="50%" cy="50%" outerRadius={200} fill="#8884d8" />
            </PieChart>
        </div>
    );
};

export default Statistics;