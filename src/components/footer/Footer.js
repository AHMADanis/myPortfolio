import React from 'react';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText } from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    join our exculsive membership to receive latest news and offers...
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time</FooterSubText>
            </FooterSubscription>
        </FooterContainer>
    );
};

export default Footer;
