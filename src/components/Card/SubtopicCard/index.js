import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro';

import React from 'react';

const Subheading = tw.p`text-dark-blue font-poppins text-lg my-0`;
const Heading = tw.h1`text-color-2 my-0 font-display font-normal text-base`;
const Description = tw.h1`text-color-1 my-0 text-sm font-normal font-poppins`;

const ImgBox = tw.div``;
const RightColumn = tw.div`ml-3`;

const Container = styled.div`
  ${tw`px-3 py-4 border border-solid border-white-s md:w-full flex rounded-lg`}
  width:100%;
  @media (max-width: 320px) {
    width: 100%;
  }
`;

function Index({ data, active }) {
  console.log(active);
  return (
    <Container style={{ background: active ? 'rgba(18, 18, 29, 0.05)' : '#fff' }}>
      <ImgBox>
        <img tw='w-12 h-12 rounded-full' src='/images/undraw6.svg' />
      </ImgBox>
      <RightColumn>
        <Heading>{data?.subtopicName}</Heading>
        <Description>
          {data?.subjectName} {', '}
          {data?.chapterName}
        </Description>
        <Description>{data?.videoMins} Mins</Description>
      </RightColumn>
    </Container>
  );
}

export default Index;
