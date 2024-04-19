import React from 'react';

const AlertLink = ({ link, linkTo }) => {
    return (
        <a href={linkTo} title={link} target='_blank' rel='noreferrer'>
            {link}
        </a>
    );
};

export default AlertLink;
