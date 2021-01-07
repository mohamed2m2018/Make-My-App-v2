import '../public/css/bootstrap.min.css'
import '../public/css/animate.min.css'
import '../public/css/boxicons.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import '../public/css/style.css'
import '../public/css/responsive.css'

import React from 'react'
import App from 'next/app'
import Head from "next/head"
import Loader from '../components/Shared/Loader'
import GoTop from '../components/Shared/GoTop'
export default class MyApp extends App {
    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    render () {
        const { Component, pageProps } = this.props
        return (
            <React.Fragment>
                <Head>
                    <title>Make-My-App Mobile Agency</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="Hepro - React Next IT & SaaS Template" />
                    <meta name="og:title" property="og:title" content="Hepro - React Next IT & SaaS Template"></meta>
                    <meta name="twitter:card" content="Hepro - React Next IT & SaaS Template"></meta>
                    <link rel="canonical" href="https://make-my-app.com/"></link>
                </Head>

                <Component {...pageProps} />
                
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
            </React.Fragment>
        );
    }
}