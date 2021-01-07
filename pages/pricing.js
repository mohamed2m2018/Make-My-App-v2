import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarThree';
import PageTitleArea from '../components/Common/PageTitleArea';
import FaqContent from '../components/Faq/FaqContent';
import OurLovingClients from '../components/Common/OurLovingClients';
import FreeTrialAreaTwo from '../components/Common/FreeTrialAreaTwo';
import Footer from '../components/Layouts/Footer';
import PricingStyleThree from '../components/Pricing/PricingStyleThree';

class Pricing extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarThree />
                <PageTitleArea 
                    pageTitle="Transparent Pricing" 
                    pageDescription="Border-less account pricing" 
                />
                <PricingStyleThree />
                <FaqContent />
                {/* <OurLovingClients /> */}
                <FreeTrialAreaTwo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Pricing;