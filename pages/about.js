import React, { Component } from 'react';
import MainContent from '../components/about/MainContent';
import Features from '../components/home/Features';
import Funfacts from '../components/home/Funfacts';
import Team from '../components/about/Team';
import Feedback from '../components/home/Feedback';
import Subscribe from '../components/home/Subscribe';
import Layout from "../components/shared/Layout";
import Meta from "../components/shared/Meta";

class About extends Component {
    render() {
        return (
            <Layout>
                <Meta 
                    title="About us"
                    description="Get to know us more"
                />
                <MainContent />
                <Features />
                <Funfacts />
                <Team />
                <Feedback />
                <Subscribe />
            </Layout>
        );
    }
}

export default About;
