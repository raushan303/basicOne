import React from 'react';
import { Wrapper } from './style';
import { Progress } from 'antd';
import Icon from 'react-icons-kit';
import { ic_bookmark_border } from 'react-icons-kit/md/ic_bookmark_border';
import { ic_bookmark } from 'react-icons-kit/md/ic_bookmark';
import { share2 } from 'react-icons-kit/feather/share2';

function index(props) {
  return (
    <Wrapper>
      <div className='video-card'>
        <div className='heavy-18 roboto font-1'>
          Factors affecting adsorption of gases on solids
        </div>
        <div className='regular-14 font-3 poppins mt-10'>
          Chemistry, Surface Chemistry, adsorption
        </div>
        <Progress strokeColor="#303F9F" percent={30} size="small" />
        <div className='mt-10 icon-container'>
          <Icon
            icon={ic_bookmark_border}
            style={{
              color: 'rgba(18, 18, 29, 0.6)',
            }}
            size={20}
          />
          <Icon
            icon={share2}
            style={{
              color: 'rgba(18, 18, 29, 0.6)',
              margin: '0 0 0 20px',
            }}
            size={18}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
