import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { PrimaryButton as PrimaryButtonBase } from '../../../misc/Buttons';
import Icon from 'react-icons-kit';
import { book } from 'react-icons-kit/icomoon/book';
import { question } from 'react-icons-kit/icomoon/question';
import Link from 'next/link';

const Container = tw.div`bg-pink-300 px-20 pb-24`;
const ColumnContainer = tw.div`flex justify-between mb-24`;

const LeftColumn = tw.div`px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-10 lg:w-6/12 font-display flex flex-col`;
const RightColumn = tw.div`lg:w-6/12`;
const BottomBox = tw.div`mt-8 lg:mt-auto border-0 border-t-2 border-solid border-white-b w-full pt-4 flex`;

const Heading = tw.h1`py-12 text-white font-medium font-poppins text-2xl sm:text-3xl md:text-6xl leading-tight px-4`;
const Paragraph = tw.p`my-1 text-sm lg:text-base font-medium font-poppins text-gray-600 max-w-lg`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-6 w-fit border-none font-normal text-base px-6 py-2 bg-green-400 hover:bg-green-500 cursor-pointer`;

import SubjectCardList from '../SubjectCard';

const ExperienceContent = {
  heading: "What you'll get out of this program",
  data: [
    {
      title: 'Maths',
      content: 'Delivered by top global professionals with years of relevant experience',
    },
    {
      title: 'Physics',
      content: 'Get your hands dirty by executing multiple real world projects/ live campaigns',
    },
    {
      title: 'Chemistry',
      content: 'Personalised mentor sessions to guide you during the training camp',
    },
  ],
  background: '#F5F6F8',
};

export default () => {
  return (
    <Container style={{ background: '#EE5351' }}>
      <ColumnContainer>
        <div tw='h-128 w-full flex items-center justify-center'>
          {/* <img tw='h-80 w-80' src='/images/testPage5.jpg' /> */}
          <Heading>Here You can attempt test subject wise</Heading>
        </div>
        <img tw='w-7/12 h-128' src='/images/cmp2.png' />
        {/* 
        <img tw='h-80 w-96' src='/images/testPage5.jpg' />
        <Heading tw='text-center' style={{ fontFamily: 'cursive' }}>
          Here You can attempt test subject wise
        </Heading>
        <img tw='h-24 w-32' src='/images/testPage7.jpg' />
        <img tw='h-80 w-56' src='/images/testPage6.jpg' /> */}
      </ColumnContainer>
      <SubjectCardList {...ExperienceContent} />
    </Container>
  );
};
