import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { Subheading } from '../../misc/Headings.js';
import CommentCard from './CommentCard';
import CommentList from './CommentList';
import ReplyList from './ReplyList';
const Container = tw.div`relative`;

const ColumnContainer = tw.div`flex flex-wrap flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-20`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;
const Wrapper = styled.div``;

export default ({ background, smallHeader, heading, subHeadingList }) => {
  const [visible, setVisible] = useState(true);
  return (
    <Wrapper style={{ background }}>
      {visible ? <CommentList setVisible={setVisible} /> : <ReplyList setVisible={setVisible} />}
    </Wrapper>
  );
};
