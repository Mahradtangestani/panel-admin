import React from 'react';

const ShowInMenu = ({rowData}) => {
    return (
        <div className='text-center'>
            <span className={rowData.show_in_menu ? "text-success" : "text-danger"}>{rowData.show_in_menu ? "هست" : "نیست"}</span> 
        </div>
    );
}

export default ShowInMenu;
