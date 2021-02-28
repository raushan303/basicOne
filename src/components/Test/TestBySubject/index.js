import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';

const Container = tw.div`bg-pink-300 px-4 md:px-12 lg:px-20 py-20`;
const ColumnContainer = tw.div`flex flex-col lg:flex-row md:items-center justify-between mb-16 md:mb-24`;

const Heading = tw.h1`text-center lg:text-left px-2 lg:pr-8 text-white font-medium font-poppins text-3xl md:text-5xl leading-tight`;

import SubjectCardList from './SubjectCardList';

const ExperienceContent = {
  heading: "Online Mock Tests: A Key To A New World Of Education",
  data: [
    {
      title: 'Maths',
      content:
        'A degree in math is a professional pathway for those interested in solutions and solving real-world problems.',
      percent: 30,
    },
    {
      title: 'Physics',
      content:
        'Physics encompasses the study of the universe from the largest galaxies to the smallest subatomic particles.',
      percent: 46,
    },
    {
      title: 'Chemistry',
      content: 'Chemistry is the study of matter and the chemical reactions between substances.',
      percent: 64,
    },
  ],
  background: '#F5F6F8',
};

export default () => {
  return (
    <Container style={{ background: '#EE5351' }}>
      <ColumnContainer>
        <Heading>Here You can attempt test subject wise</Heading>
        <img tw='w-full lg:w-6/12 h-auto' src='/images/cmp2.png' />
      </ColumnContainer>
      <SubjectCardList {...ExperienceContent} />
    </Container>
  );
};
