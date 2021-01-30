import React from 'react';
import { Wrapper } from './style';

function index(props) {
  return (
    <Wrapper>
      <div className='question-card '>
        <div className='question tc-2 regular-14'>
          Which of the following statements about the given reaction are correct ? 3Fe (s) + 4H2O
          (g) → Fe3O4 (s) + 4 H2 (g)
        </div>
        <div className='regular-14 font-3 poppins mt-5 tc-1'>
          Chemistry, Surface Chemistry, adsorption
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
