import React, { FC } from 'react';
import { Icon } from '@mui/material';
import { SocialIconProps } from "./SNETFooter.types";

const SocialIcon: FC<SocialIconProps> = ({ link, title, className }) => {
    return (
        <li>
            <a
                href={link}
                title={title}
                target='_blank'
                rel='noopener noreferrer'
            >
                <Icon className={className} fontSize='large' />
            </a>
        </li>
    );
};

export default SocialIcon;
