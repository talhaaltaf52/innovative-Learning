import React from 'react';
import './registeredtutorsdata.css';

const RegisteredTutorsData = ({pic, name}) => {
  return (
    <>
        <div className='row' style={{ marginTop:"20px" }}>
            <div className='col-2'>
                <img src={pic} alt='Tutors Image' className='Tut_Logo' />
            </div>
            <div className='col-7 Tname_Col'>
                <h4 className='Tut_heading'>{name}</h4>
            </div>
            <div className='col-2'>
                <span className='Tut_para'>Teachers</span>
            </div>
            <div className='col-1'></div>
        </div>
    </>
  );
}

export default RegisteredTutorsData;