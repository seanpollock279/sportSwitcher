import React from 'react';

import '../Icon/Icon.scss';

export default function Icon({ icon }) {
    return (
        <img className="icon fade-in-image" src={icon} />
    )
}
