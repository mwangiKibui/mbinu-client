import React, { Component } from 'react';

import MainContent from '../components/team/MainContent';
import Layout from '../components/shared/Layout';
import Meta from '../components/shared/Meta';

export class Team extends Component {
    render() {
        return (
            <Layout>
                <Meta 
                title="Mbinu team"
                description="The team behind Mbinu."
                />
                <MainContent />
            </Layout>
        );
    }
}

export default Team;
