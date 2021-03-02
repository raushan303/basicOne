import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { Subheading } from '../../../misc/Headings';

const Container = tw.div`relative`;

const TwoColumn = styled.div`
  ${tw`flex flex-col lg:flex-row md:items-center px-4 md:px-16 w-full py-16 md:py-20`}
`;

const LeftColumn = styled.div`
  ${tw`relative lg:w-6/12 flex-shrink-0 text-center lg:text-left`}
`;

const RightColumn = styled.div`
  ${tw`relative lg:w-6/12 mt-12 lg:pl-12 lg:mt-0 flex flex-col justify-center`}
`;

const Heading = tw.h1`font-black text-2xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`text-sm lg:text-lg font-medium text-gray-600 max-w-lg`;
const CtaContent = tw.p`px-8 flex-1 text-sm lg:text-lg font-medium max-w-sm`;

const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start mt-4`;
const PrimaryButton = tw.button`cursor-pointer border-0 font-bold px-8 lg:px-10 py-3 rounded bg-dark-blue text-gray-100 hocus:bg-dark-blue focus:shadow-outline focus:outline-none transition duration-300`;

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

const Wrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
  @media (max-width: 1280px) {
    padding: 0 30px;
  }
  @media (max-width: 500px) {
    padding: 0 10px;
  }
`;

export default ({ setStart, background }) => {
  return (
    <Wrapper style={{ background }}>
      <Container>
        <TwoColumn className='box'>
          <LeftColumn>
            <IllustrationContainer>
              <img tw='w-full h-auto' src='/images/OurStory_SocialCollaborate.webp' alt='Hero' />
            </IllustrationContainer>
          </LeftColumn>
          <RightColumn>
            <Subheading tw='text-xl' style={{ color: '#01579b' }}>
              Mock Test
            </Subheading>
            <Heading>You will get 15 Minutes to finish this test</Heading>
            <Paragraph>You have to solve 10 questions</Paragraph>
            <Actions>
              <PrimaryButton onClick={() => setStart(true)}>START</PrimaryButton>
            </Actions>
          </RightColumn>
        </TwoColumn>
      </Container>
    </Wrapper>
  );
};
