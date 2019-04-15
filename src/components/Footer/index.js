import React from 'react';
import { FiGithub } from 'react-icons/fi';

import { FooterText } from './styles';

const Footer = () => (
    <FooterText>
        <a href="https://github.com/adrcav/simple-status-page" target="_blank" rel="noopener noreferrer">
            <FiGithub style={{ marginRight: '5px' }} />
            Simple Status Page
        </a>
    </FooterText>
);

export default Footer;