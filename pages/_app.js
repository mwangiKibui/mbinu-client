import '../public/styles/bootstrap.min.css';
import '../public/styles/animate.min.css';
import '../public/styles/progresscircle.min.css';
import '../public/styles/flaticon.css';
import '../public/styles/fontawesome.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-toastify/dist/ReactToastify.css';
import '../public/styles/style.scss';
import '../public/styles/responsive.scss';

import App from 'next/app';
import Head from 'next/head';
import GoTop from '../components/shared/GoTop';


class MyApp extends App {
    render () {
        const { Component, pageProps} = this.props

        return (
            <React.Fragment>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <title>Opstar - React Next AI Startups Template</title>
                </Head>
                               
                <Component {...pageProps} />
                
                <GoTop scrollStepInPx="50" delayInMs="5.66" />
            </React.Fragment>
        );
    }
}

export default MyApp;