import React from 'react';
import {useParams } from 'react-router-dom';

const About = () => {
    const a = useParams();
    console.log(a)
    return (
        <div>
            {a.name}
        </div>
    );
};

export default About;