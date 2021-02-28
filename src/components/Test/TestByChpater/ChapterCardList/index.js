import React, { useState } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from '../../../../misc/Headings.js';
import { PrimaryButton as PrimaryButtonBase } from '../../../../misc/Buttons';
import { SectionDescription } from '../../../../misc/Typography.js';
import { Container, ContentWithPaddingXl } from '../../../../misc/Layouts';

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_left } from 'react-icons-kit/md/ic_keyboard_arrow_left';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import Slider from 'react-slick';
import Link from 'next/link';

const CardSlider = styled(Slider)`
  ${tw`mt-12`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-list {
    overflow: hidden;
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Plan = styled.div`
  ${tw`w-full h-full max-w-sm lg:last:mr-0 text-center px-8 rounded-lg shadow-inner shadow-md relative pt-2 text-gray-900 bg-white flex flex-col cursor-pointer`}
  .planHighlight {
    ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
    background: #01579b;
    background: linear-gradient(135deg, #0584e8 0%, #01579b 100%) #01579b;
  }
  box-shadow: 0 4px 14px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
  border: 1px solid rgba(0, 0, 0, 0.06) !important;

  ${(props) =>
    props.color &&
    css`
      background: linear-gradient(135deg, #0584e8 0%, #01579b 100%) #01579b;
      .name {
        color: #f7fafc;
      }
      .feature {
        color: #e2e8f0 !important;
      }
    `}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col leading-relaxed py-8`}

  .name {
    ${tw`font-bold text-xl`}
    ${(props) =>
      props.featured &&
      css`
        ${tw`text-5xl`}
      `}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .duration {
    ${tw`text-gray-500 font-bold tracking-widest`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 border-t-2 border-b-2 flex-1`}
  border-top: 1px solid #01579b;
  .feature {
    ${tw`mt-2 first:mt-0 font-medium`}
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-xl font-bold tracking-wide`}
  }
`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row max-w-screen-xl w-full self-center justify-end`;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 p-2! sm:mt-0 first:ml-0 ml-6 rounded-full bg-dark-blue! hover:bg-dark-blue! border-0! cursor-pointer`}
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

const Wrapper = styled.div`
  @media (max-width: 500px) {
    padding: 0 10px;
  }
`;

export default ({ subHeading, heading, cardsList }) => {
  const sliderSettings = {
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <Wrapper style={{ background: '#fff' }}>
      <Container>
        <ContentWithPaddingXl>
          <HeaderContainer>
            {heading && <Heading className='heading'>{heading}</Heading>}
            {subHeading && <Description className='sub-heading'>{subHeading}</Description>}
          </HeaderContainer>
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
            {cardsList?.map((item, index) => (
              <Plan key={index}>
                <PlanHeader>
                  <span className='name heading'>{item.title}</span>
                </PlanHeader>
                <PlanFeatures>
                  <span className='feature sub-heading'>{item.content}</span>
                </PlanFeatures>
              </Plan>
            ))}
          </CardSlider>
        </ContentWithPaddingXl>
      </Container>
    </Wrapper>
  );
};
