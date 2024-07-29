import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PrevPagebutton from '../../components/PrevPagebutton';

const Categorychildren = () => {

    const location = useLocation()

    return (
        <div className='py-3 d-flex justify-content-between'>
            <h5 className='text-center'>
                <span>زیر گروه:</span>
                <span className='text-info'> {location.state.parentData.title}</span>
            </h5>
            <PrevPagebutton/>
        </div>
    );
}

export default Categorychildren;
