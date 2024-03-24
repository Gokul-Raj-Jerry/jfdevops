import React from 'react';
import { Helmet } from "react-helmet";

const PageHelmet = ({ pageTitle }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{pageTitle} || JFD Consulting </title>
                {/* <meta name="robots" content="noindex, follow" /> */}
                <meta name="description" content="JFD - Consulting" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name='keywords' content="jfd,j f d, jfdtech,jfd tech,jfd consulting,jfdconsulting, consulting services JFD Consulting, consulting services,  business consulting, financial consulting, management consulting, strategy consulting, marketing consulting, operations consulting, technology consulting, consulting firm, consulting agency, consulting solutions, consulting expertise, consulting resources, consulting partnerships, consulting industry, consulting professionals, consulting opportunities, consulting case studies, consulting success stories, consulting testimonials, consulting blog, consulting articles, consulting news, consulting events, consulting conferences, consulting workshops, consulting seminars, consulting training, consulting education, consulting resources, consulting tools, consulting software, consulting methodologies, consulting techniques, consulting best practices, consulting industry trends, consulting industry news, consulting industry events, consulting industry conferences, consulting industry workshops, consulting industry seminars, consulting industry training, consulting industry resources, consulting industry tools, consulting industry software, consulting industry methodologies, consulting industry techniques, consulting industry best practices, consulting industry trends, consulting industry news, consulting industry events, consulting industry conferences, consulting industry workshops, consulting industry seminars, consulting industry training, consulting industry resources, consulting industry tools, consulting industry software, consulting industry methodologies, consulting industry techniques, consulting industry best practices, consulting industry trends, consulting industry news, consulting industry events, consulting industry conferences, consulting industry workshops, consulting industry seminars, consulting industry training, consulting industry resources, consulting industry tools, consulting industry software, consulting industry methodologies, consulting industry techniques, consulting industry best practices, consulting industry trends, consulting industry news, consulting industry events, consulting industry conferences, consulting industry workshops, consulting industry seminars, consulting industry training, consulting industry resources, consulting industry tools, consulting industry software, consulting industry methodologies, Animation Consulting Services, JFD Animation Experts" />
            </Helmet>
        </>
    );
};

export default PageHelmet;