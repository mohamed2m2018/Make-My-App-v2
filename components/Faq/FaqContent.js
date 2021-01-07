import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

class FaqContent extends Component {
    render() {
        return (
            <section className="faq-area ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <div className="faq-accordion">
                                <h2>Get To Know About <span>Make My App</span></h2>

                                <Accordion>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What if one of the plans doesn't suit?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                               If you want something in between, we can always create custom plan for you.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Can I get a screen trial for my app?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Yes, you can get a screen trial, to see how we works, and what quality we have, before you pay any money.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How can I contact you?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Initially through the contact us form, then we will mail you. and after that our project manager will always follow up with you.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Are there any additional fees?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                The only additional fee will be that of playStore and app store supscription. App store takes 99$ years, playStore takes 25$ one time.
                                                If you don't have an account, or don't want to buy one. We will be glad to host you on our own accounts with no fees:D
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Can I pay Through any method other than upwork?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                               Currently No, because Upwork is safe for you and for us, as it's an escrow system :D
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12">
                            <div className="faq-image">
                                <img src="/images/faq-img1.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaqContent;