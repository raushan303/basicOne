import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { Subheading } from '../../misc/Headings.js';
import Icon from 'react-icons-kit';
import { ic_insert_comment } from 'react-icons-kit/md/ic_insert_comment';

const Container = tw.div`relative`;

const ColumnContainer = tw.div`flex flex-wrap flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-20`;

const Column = tw.div`relative flex lg:w-6/12 px-8 py-8 flex-shrink-0`;

const RightColumn = tw.div`px-4 font-display`;
const UserBox = tw.div`flex py-4`;
const Avatar = tw.div`h-12 w-16 px-2`;
const Card = tw.div`cursor-pointer bg-white flex px-4 py-4 hover:shadow-bs-1 border border-grey border-solid`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;
const Wrapper = styled.div`
  
`;

export default ({ background, smallHeader, heading, subHeadingList }) => {
  const commentList = [1, 2, 3, 4, 5];
  return (
    <Wrapper style={{ background }}>
      <Container>
        {smallHeader && <Subheading style={{ color: '#01579b' }}>{smallHeader}</Subheading>}
        <Heading className='heading'>{heading}</Heading>
        {subHeadingList &&
          subHeadingList?.map((subHeading) => (
            <Paragraph className='sub-heading'>{subHeading}</Paragraph>
          ))}
        <ColumnContainer>
          {commentList?.map((comment) => (
            <Column>
              <Card>
                <Icon
                  tw='py-1'
                  icon={ic_insert_comment}
                  style={{ color: '#0096d6' }}
                  size={35}
                  alt=''
                />
                <RightColumn>
                  <div className='tc-1'>
                    Using laptop of wall power without actually charging the battery.
                  </div>
                  <span className='tc-1'>
                    My question is pretty straight forward:1. Is there a way (without removing the
                    battery) to
                  </span>
                  <UserBox>
                    <Avatar>
                      <img tw='rounded-full' src='/images/userimg.png' height='100%' width='100%' />
                    </Avatar>
                    <div tw='flex-1 px-1'>
                      <span>Posted by Julian_Mörk</span>
                      <span>in Notebook Software and How To Questions 01-25-2021</span>
                    </div>
                  </UserBox>
                </RightColumn>
              </Card>
            </Column>
          ))}
        </ColumnContainer>
      </Container>
    </Wrapper>
  );
};
