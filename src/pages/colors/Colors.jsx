import React from 'react';
import ColorsTable from './ColorsTable';
import AddColor from './AddColor';

const Colors = () => {
    return (
        <div
            id="manage_color_section"
            className="add_color_section main_section"
        >
            <h4 className="text-center my-3">مدیریت رنگ ها</h4>
            <ColorsTable/>
        </div>
    );
}

export default Colors;
