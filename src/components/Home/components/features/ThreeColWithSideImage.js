import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
//eslint-disable-next-line
import { css } from 'styled-components/macro';
import { SectionHeading, Subheading as SubheadingBase } from '../../../../misc/Headings.js';
import { SectionDescription } from '../../../../misc/Typography.js';

const defaultCardImage = '/images/shield-icon.svg';

const SupportIconImage = '/images/support-icon.svg';
const ShieldIconImage = '/images/shield-icon.svg';
const CustomizeIconImage = '/images/customize-icon.svg';
const FastIconImage = '/images/fast-icon.svg';
const ReliableIconImage = '/images/reliable-icon.svg';
const SimpleIconImage = '/images/simple-icon.svg';

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

export default ({
  cards = null,
  heading = 'Amazing Features',
  subheading = 'Features',
  description = 'Take the next step towards your acedemic goals with Basic One.',
}) => {
  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: 'Secure',
      description:
        'Your data is in safe hands, we have a dedicated team to moniter the site security.',
    },
    {
      imageSrc: SupportIconImage,
      title: '24/7 Support',
      description:
        'If you face any type of difficulties related to technical assistance or acedemics councelling, feel free to contact us.',
    },
    {
      imageSrc: CustomizeIconImage,
      title: 'Customizable',
      description:
        'Personalized plans are available for students having weak internet connectivity also.',
    },
    {
      imageSrc: ReliableIconImage,
      title: 'Reliable',
      description:
        "Every detail of a student's journey is planned and executed at the deepest level with subject matter experts, teachers and tools like videos, interactive animations, quizzes and assessments.",
    },
    {
      imageSrc: ShieldIconImage,
      title: 'Excellents results',
      description:
        'We have tremendous results for years and are commited to provide you the best teachers with practical knowledge.',
    },
    {
      imageSrc: SimpleIconImage,
      title: 'Simple',
      description: 'Simple and affordable payment options with heavy discounts and EMI options.',
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className='imageContainer'>
                <img src={card.imageSrc || defaultCardImage} alt='' />
              </span>
              <span className='textContainer'>
                <span className='title'>{card.title || 'Fully Secure'}</span>
                <p className='description'>
                  {card.description ||
                    'Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.'}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
