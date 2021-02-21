import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { Subheading } from '../../../misc/Headings.js';
import AskCard from '../AskCard';
import Icon from 'react-icons-kit';
import { arrowLeft2 } from 'react-icons-kit/icomoon/arrowLeft2';

const Container = tw.div`relative py-20 flex flex-col items-center`;
const Banner = tw.div`bg-white py-4 px-10 max-w-screen-xl w-full`;
const IconContainer = tw.div`bg-grey w-fit cursor-pointer py-2 px-2 rounded-full`;

const ColumnContainer = tw.div`flex flex-wrap flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-20`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;
const Wrapper = styled.div``;

export default ({ background, smallHeader, heading, subHeadingList, setVisible }) => {
  const commentList = [1, 2];
  return (
    <Wrapper style={{ background }}>
      <Container>
        <Banner>
          <IconContainer>
            <Icon size={25} onClick={() => setVisible(true)} icon={arrowLeft2} />
          </IconContainer>
        </Banner>
        {smallHeader && <Subheading style={{ color: '#01579b' }}>{smallHeader}</Subheading>}
        {heading && <Heading className='heading'>{heading}</Heading>}
        {subHeadingList &&
          subHeadingList?.map((subHeading) => (
            <Paragraph className='sub-heading'>{subHeading}</Paragraph>
          ))}
        {commentList?.map((comment) => (
          <AskCard />
        ))}
      </Container>
    </Wrapper>
  );
};
