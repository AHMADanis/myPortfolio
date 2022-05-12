import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import { SiAnsible } from 'react-icons/si'

import {
    FooterContainer,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './Footer.elements';
import Contact from '../contact/Contact';

function Footer() {
    return (
        <FooterContainer>
            <Contact />
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                    <SiAnsible />
                         Anees
                    </SocialLogo>
                    <WebsiteRights>IM © 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink 
                        href={'//www.facebook.com/ahmad.anis.524/' }
                        target='_blank' 
                        aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink 
                        href='/' 
                        target={'//www.instagram.com/ahmad_anis_/'} 
                        aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink
                            href={
                                '//www.youtube.com/'
                            }
                            rel='noopener noreferrer'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink 
                        href={'//twitter.com/AHMAD_aniis/'}
                        target='_blank' 
                        aria-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink 
                        href={'//www.linkedin.com/in/anees-ahmad-0711/' }
                        target='_blank' 
                        aria-label='LinkedIn'>
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
}

export default Footer;