import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { SectionHeading } from '../../../../misc/Headings';
import { Progress } from 'antd';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import { book } from 'react-icons-kit/icomoon/book';
import { question } from 'react-icons-kit/icomoon/question';

const Container = tw.div`relative py-20`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-12`}
`;
const Heading = tw(SectionHeading)`max-w-screen-xl text-3xl px-2 text-center md:text-left`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-4 md:px-6 flex cursor-pointer`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-6 md:py-10 border-2 border-dashed rounded-lg mt-4 mb-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-4 md:p-6 flex-shrink-0 relative`}
  }

  .textContainer {
    ${tw`mt-3 md:mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

export default ({ heading, data, background }) => {
  return (
    <Container style={{ background }}>
      <div tw='flex flex-wrap max-w-screen-xl mx-auto items-center'>
        <Heading className='heading'>Chemistry</Heading>
        <Progress tw='max-w-xl ml-8' type='circle' percent={66} width={80} />
      </div>

      <ThreeColumnContainer>
        {data.map((card, i) => (
          <Link href={`/test/chapter-wise/${card.title}`}>
            <Column key={i}>
              <Card style={{ borderColor: '#01579b' }}>
                <span className='imageContainer'>
                  <Progress type='circle' percent={card.percent} width={80} />
                </span>
                <span className='textContainer'>
                  <span className='title heading'>{card.title}</span>
                  <p className='description sub-heading'>{card.content}</p>
                </span>
              </Card>
            </Column>
          </Link>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
