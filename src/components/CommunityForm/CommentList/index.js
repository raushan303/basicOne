import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { Subheading } from '../../../misc/Headings.js';
import CommentCard from '../CommentCard';

const Container = tw.div`relative`;

const ColumnContainer = tw.div`flex flex-wrap flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-6 md:py-20`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;
const Wrapper = styled.div``;

export default ({ background, smallHeader, heading, subHeadingList, setVisible }) => {
  const commentList = [1, 2, 3, 4, 5];
  return (
    <Wrapper style={{ background }}>
      <Container>
        {smallHeader && <Subheading style={{ color: '#01579b' }}>{smallHeader}</Subheading>}
        {heading && <Heading className='heading'>{heading}</Heading>}
        {subHeadingList &&
          subHeadingList?.map((subHeading) => (
            <Paragraph className='sub-heading'>{subHeading}</Paragraph>
          ))}
        <ColumnContainer>
          {commentList?.map((comment) => (
            <CommentCard setVisible={setVisible} />
          ))}
        </ColumnContainer>
      </Container>
    </Wrapper>
  );
};
