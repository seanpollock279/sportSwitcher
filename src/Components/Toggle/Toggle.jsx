import React from 'react';

import '../Toggle/Toggle.scss';

export default function Toggle() {
    return (
        <div>
            <label class="toggle-control">
                <input type="checkbox" checked="checked" />
                <span class="control"></span>
            </label>
        </div>
    )
}
