import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import EditModal from '../EditModal';
function index() {
  const [visible, setVisible] = useState(false);
  return (
    <Wrapper>
      <EditModal visible={visible} setVisible={setVisible} />
      <div onClick={() => setVisible(true)} className='avatar-container'>
        <img alt='profile' src='/images/undraw6.svg' />
      </div>
      <div className='content-container'>
        <div className='bold-16 author-name' style={{ alignSelf: 'flex-start' }}>
          Raushan Kumar
        </div>
        <div className='normal-14 font-5 mt-10'>
          Marketing Leader, Author & Founder Women Leaders of Sarjapur Rd | Ex KPMG Achieving
          business outcomes through strategic marketing I Speaker
        </div>
        <div className='normal-14 font-5 mt-10' style={{ alignSelf: 'flex-start' }}>
          20 Videos 40 Question
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
