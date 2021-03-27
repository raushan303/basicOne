import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { Subheading } from '../../../misc/Headings.js';
import Icon from 'react-icons-kit';
import { ic_insert_comment } from 'react-icons-kit/md/ic_insert_comment';
import { connect } from 'react-redux';

import { updateActiveComment } from '../../../redux/action/getComments';

const Column = tw.div`relative flex lg:w-6/12 px-2 md:px-8 py-4 md:py-6 flex-shrink-0`;

const RightColumn = tw.div`px-4`;
const UserBox = tw.div`flex pt-4`;
const Avatar = tw.div`h-12 w-16 px-2`;
const Card = tw.div`w-full cursor-pointer bg-white flex px-2 md:px-4 py-4 md:py-6 hover:shadow-bs-1 border border-grey border-solid`;

const Title1 = tw.h1`my-0 font-normal text-color-2 text-lg font-Inter leading-tight`;
const Title2 = tw.h1`my-0 font-normal text-black text-base font-display`;
const Paragraph = tw.p`my-0 text-base font-poppins text-gray-600`;

const index = ({ setVisible, comment, updateActiveComment }) => {
  return (
    <Column
      onClick={() => {
        setVisible(false);
        updateActiveComment(comment);
      }}
    >
      <Card>
        <Icon tw='py-1' icon={ic_insert_comment} style={{ color: '#0096d6' }} size={35} alt='' />
        <RightColumn>
          <div tw='h-10'>
            <Title1 className='tc-2'>
              {comment?.title} and {comment?.description}
            </Title1>
          </div>

          <UserBox>
            <Avatar>
              <img tw='rounded-full' src='/images/userimg.png' height='100%' width='100%' />
            </Avatar>
            <div tw='flex-1 px-1'>
              <Title2>Posted by {comment?.name}</Title2>
              <Paragraph>Date:- {comment?.date}</Paragraph>
            </div>
          </UserBox>
        </RightColumn>
      </Card>
    </Column>
  );
};

export default connect(null, { updateActiveComment })(index);
