import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from "qs";

const About = () => {
    const a = useLocation();
    const b = queryString.parse(a.search,{ ignoreQueryPrefix: true })
    console.log(b)
    return (
        <div>
            {b.name}
        </div>
    );
};

export default About;