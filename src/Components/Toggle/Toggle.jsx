import React from 'react';

import '../Toggle/Toggle.scss';

export default function Toggle({ onClick }) {
    return (
        <div>
            <span onClick={onClick} class="switcher switcher-1">
                <input type="checkbox" id="switcher-1"/>
                <label for="switcher-1"></label>
            </span>
        </div>
    )
}
