import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { PrimaryButton as PrimaryButtonBase } from '../../../misc/Buttons';

const Container = tw.div`flex justify-center py-32 bg-white-s h-full`;
const ColumnContainer = tw.div`flex max-w-screen-xl bg-white`;

const LeftColumn = tw.div`px-12 py-12 lg:w-6/12 font-display`;
const RightColumn = tw.div`lg:w-6/12`;

const Heading = tw.h1`font-black text-3xl md:text-4xl leading-tight max-w-3xl`;
const Paragraph = tw.p`my-5 text-sm lg:text-lg font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-4 border-none font-normal text-lg py-2 bg-dark-blue hover:bg-dark-blue`;

export default () => {
  return (
    <Container>
      <ColumnContainer>
        <LeftColumn>
          <Heading>My advice is, never do tomorrow what you can do today</Heading>
          <Paragraph>
            You can start giving test Subject wise, Find out where you stand. We will help you get
            better
          </Paragraph>
          <PrimaryButton>Get Started</PrimaryButton>
        </LeftColumn>
        <RightColumn>
          <img height='100%' width='100%' src='/images/testPage.jpg' />
        </RightColumn>
      </ColumnContainer>
    </Container>
  );
};
