import React from 'react';
import { Wrapper } from './style';
import { Form } from 'antd';
const data = ['Grade', 'Subject', 'Chapter', 'Topic'];

function index(props) {
  return (
    <Wrapper>
      <div className='question-card '>
        <div className='question'>
          Which of the following statements about the given reaction are correct ? 3Fe (s) + 4H2O
          (g) → Fe3O4 (s) + 4 H2 (g)
        </div>
        <div className='option'>1.&nbsp;&nbsp; Iron metal is getting oxidised</div>
        <div className='option'>2.&nbsp;&nbsp; Water is getting reduced</div>
        <div className='option'>3.&nbsp;&nbsp; Water is acting as reducing agent</div>
        <div className='option'>4.&nbsp;&nbsp; Water is acting as oxidising agent</div>
        <div className='option'>Ans.&nbsp; Water is acting as reducing agent</div>
        <div className='note'>
          Magnesium ribbon should be cleaned with sandpaper before burning in the air because of the
          following reasons: Magnesium very reactive element which rapidly reacts with oxygen in the
          air to form a white layer of magnesium oxide and this layer will not burn
        </div>
        <div className='button-container'>
          <div className='button'>Edit</div>
          <div className='button'>Delete</div>
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
