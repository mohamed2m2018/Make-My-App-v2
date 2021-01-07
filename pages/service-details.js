import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarThree';
import PageTitleArea from '../components/Common/PageTitleArea';
import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import OurLovingClients from '../components/Common/OurLovingClients';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarThree />
                <PageTitleArea 
                    pageTitle="Service Details" 
                />
                <ServiceDetailsContent />
                <SubscribeStyleTwo />
                <OurLovingClients />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;