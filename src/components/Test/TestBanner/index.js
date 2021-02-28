import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { PrimaryButton as PrimaryButtonBase } from '../../../misc/Buttons';
import Icon from 'react-icons-kit';
import { book } from 'react-icons-kit/icomoon/book';
import { question } from 'react-icons-kit/icomoon/question';
import { ic_keyboard_arrow_left } from 'react-icons-kit/md/ic_keyboard_arrow_left';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import Slider from 'react-slick';
import Link from 'next/link';

const CardSlider = styled(Slider)`
  ${tw`mt-12`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;

const Container = tw.div`py-8 lg:py-0 bg-white-s h-full flex flex-col lg:justify-center`;
const ColumnContainer = tw.div`flex! flex-col-reverse lg:flex-row max-w-screen-xl bg-white`;

const LeftColumn = tw.div`px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-10 lg:w-6/12 font-display flex flex-col`;
const RightColumn = tw.div`lg:w-6/12`;
const BottomBox = tw.div`mt-8 lg:mt-auto border-0 border-t-2 border-solid border-white-b w-full pt-4 flex`;

const Heading = tw.h1`text-dark-blue font-semibold font-display text-2xl sm:text-3xl md:text-4xl leading-tight max-w-3xl`;
const Paragraph = tw.p`my-1 text-sm lg:text-base font-medium font-poppins text-gray-600 max-w-lg`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-6 w-fit border-none font-normal text-base px-6 py-2 bg-green-400 hover:bg-green-500 cursor-pointer`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row max-w-screen-xl w-full self-center justify-end`;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2 bg-dark-blue! hover:bg-dark-blue! border-0! cursor-pointer`}
  svg {
    ${tw`w-6 h-6`}
  }
  &:hover {
    background: #01579b;
  }
  &:focus {
    background: #01579b;
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

export default () => {
  const sliderSettings = {
    arrows: false,
    slidesToShow: 1,
    slidesToShow: 1,
    infinite: false,
  };
  const [sliderRef, setSliderRef] = useState(null);
  const data = [
    {
      heading: 'My advice is, never do tomorrow what you can do today',
      subHeading:
        ' You can start giving test Subject wise, Find out where you stand. We will help you get better',
      testSeriesCount: 10,
      questionCount: 230,
      img: '/images/testPage.jpg',
      link: '/test/subject-wise',
    },
    {
      heading: 'My advice is, never do tomorrow what you can do today',
      subHeading:
        ' You can start giving test Subject wise, Find out where you stand. We will help you get better',
      testSeriesCount: 14,
      questionCount: 315,
      img: '/images/testPage4.jpg',
      link: '/test/chapter-wise',
    },
  ];
  return (
    <Container>
      <Heading tw='text-center max-w-full! text-green-500!'>
        Here You can attempt test subject or chapter wise
      </Heading>
      <HeadingWithControl>
        <Controls>
          <PrevButton onClick={sliderRef?.slickPrev}>
            <Icon icon={ic_keyboard_arrow_left} size={24} alt='' />
          </PrevButton>
          <NextButton onClick={sliderRef?.slickNext}>
            <Icon icon={ic_keyboard_arrow_right} size={24} alt='' />
          </NextButton>
        </Controls>
      </HeadingWithControl>
      <CardSlider ref={setSliderRef} {...sliderSettings}>
        {data?.map((obj) => (
          <ColumnContainer>
            <LeftColumn>
              <Heading>{obj.heading}</Heading>
              <Paragraph>{obj.subHeading}</Paragraph>
              <Link href={obj.link}>
                <PrimaryButton>Get Started</PrimaryButton>
              </Link>
              <BottomBox>
                <Icon style={{ color: '#b9b9b9' }} size={20} icon={book} />
                <span tw='pl-2 pr-8 text-white-m'>{obj.testSeriesCount} Test Series</span>
                <Icon style={{ color: '#b9b9b9' }} size={20} icon={question} />
                <span tw='pl-2 text-white-m'>{obj.questionCount} Questions</span>
              </BottomBox>
            </LeftColumn>
            <RightColumn>
              <img height='100%' width='100%' src={obj.img} />
            </RightColumn>
          </ColumnContainer>
        ))}
      </CardSlider>
    </Container>
  );
};
