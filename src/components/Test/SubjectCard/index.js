import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
//eslint-disable-next-line
import { css } from 'styled-components/macro';
import { SectionHeading } from '../../../misc/Headings';
import { Progress } from 'antd';

// import defaultCardImage from "../../images/shield-icon.svg";

// import SupportIconImage from "../../images/support-icon.svg";
// import ShieldIconImage from "../../images/shield-icon.svg";
// import CustomizeIconImage from "../../images/customize-icon.svg";
// import FastIconImage from "../../images/fast-icon.svg";
// import ReliableIconImage from "../../images/reliable-icon.svg";
// import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
  }

  .textContainer {
    ${tw`mt-6 text-center`}
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
      <ThreeColumnContainer>
        <Heading className='heading'>{heading}</Heading>
        {data.map((card, i) => (
          <Column key={i}>
            <Card style={{ borderColor: '#01579b' }}>
              <span className='imageContainer'>
                <Progress type='circle' percent={30} width={80} />
              </span>
              <span className='textContainer'>
                <span className='title heading'>{card.title}</span>
                <p className='description sub-heading'>{card.content}</p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
