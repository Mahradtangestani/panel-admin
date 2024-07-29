import React from 'react';

const Validatetion = ({rowData}) => {
    return (
        <div className='text-center'>
            <span className={rowData.for_all ? "text-success" : "text-danger"}>{rowData.for_all ? "دارد" : "ندارد"}</span>
        </div>
    );
}

export default Validatetion;
