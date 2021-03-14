import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro';

import React from 'react';

const Subheading = tw.p`text-dark-blue font-poppins text-lg my-0`;
const Heading = tw.p`text-color-2 mb-0 mt-3 font-display font-medium text-xl`;
const ListContainer = tw.ul``;
const Description = tw.li`text-color-1 mb-0 mt-4 text-base font-normal font-poppins`;
const Action = tw.div`mt-4 flex justify-end mt-auto`;
const Button = tw.button`px-4 py-2 text-dark-blue border border-solid border-dark-blue bg-white cursor-pointer mt-4`;

const Container = styled.div`
  ${tw`px-4 py-6 shadow-bs-2 md:h-full flex flex-col`}
  width:300px;
  @media (max-width: 320px) {
    width: 100%;
  }
`;

function Index({ data }) {
  return (
    <Container>
      <Subheading>{data?.subjectName}</Subheading>
      <Heading>{data?.subtopicName}</Heading>
      <ListContainer style={{ paddingLeft: '20px' }}>
        <Description>{data?.chapterName}</Description>
        <Description tw='mt-1'>{data?.topicName}</Description>
      </ListContainer>
      <Action>
        <Button>Start Learning</Button>
      </Action>
    </Container>
  );
}

export default Index;
