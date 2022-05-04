import React from 'react';
import '../containers/Simulator.css'

const Intervention = (props) => {
  const remove = () => {
    props.remove(props.position, props.policy);
  };

  return (
    <div align='left' className='row'>
      <div className='col'>
        <p style={{ color: 'white', marginRight: '10%', textAlign: 'left', fontSize: '20px' }}>{props.policy}</p>
      </div>
      <div className='col5'>
        <p style={{ color: 'white', fontSize: '20px' }}>Duration:</p>
        <p className='durationText'
          style={{
            backgroundColor: '#1b4441ad',
            padding: '2px',
            textAlign: 'center',
            border: '2px solid #66FCF1',
            borderRadius: '40px',
            minWidth: '90px'
          }}>
          {props.days} days
        </p>
      </div>
      <div className='col4'>
        <i align='left' onClick={remove} className="fa fa-close" style={{ fontSize: '30px', color: '#66FCF1' }}></i>
      </div>
      <hr align='left' className='dotted'></hr>
    </div>
  );
};

export default Intervention;
