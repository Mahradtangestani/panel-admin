import React from 'react';

const SpinnerLoad = ({inline , clorClass , isSmall}) => {
    return (
        <span className={`text-center ${!inline ? "d-block" : "mx-2"} ${clorClass}`}>
            <div className={`spinner-border ${isSmall ? "spinner-border-sm" : ""}`} role='status'>

            </div>
        </span>
    );
}

export default SpinnerLoad;
