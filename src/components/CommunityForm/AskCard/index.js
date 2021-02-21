import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { Subheading as SubheadingBase } from '../../../misc/Headings.js';
import { PrimaryButton as PrimaryButtonBase } from '../../../misc/Buttons.js';
import Icon from 'react-icons-kit';
import { ic_insert_comment } from 'react-icons-kit/md/ic_insert_comment';
import { ic_mode_comment } from 'react-icons-kit/md/ic_mode_comment';
import { thumbsUp } from 'react-icons-kit/fa/thumbsUp';
import { checkCircle } from 'react-icons-kit/fa/checkCircle';
import { ic_remove_red_eye } from 'react-icons-kit/md/ic_remove_red_eye';

const ColumnContainer = tw.div`flex flex-wrap flex-col lg:flex-row md:items-center py-20`;
const TwoColumn = tw.div`relative flex flex-wrap flex-shrink-0 border border-grey border-solid max-w-screen-xl mx-auto`;
const LeftColumn = tw.div`px-4 py-10 md:w-1/3 lg:w-1/4 font-display flex justify-center w-full`;
const RightColumn = tw.div`px-8 py-10 md:w-2/3 lg:w-3/4 font-display bg-white`;
const PrimaryButtonFollow = tw(
  PrimaryButtonBase
)`bg-dark-blue font-display uppercase font-normal text-lg tracking-wider text-white py-2 px-8 border-none mt-4 hover:bg-dark-blue cursor-pointer`;
const PrimaryButtonReply = tw(
  PrimaryButtonBase
)`bg-dark-blue font-display uppercase font-normal text-xl tracking-wider text-white py-2 px-12 border-none hover:bg-dark-blue cursor-pointer rounded-md mt-2`;
const PrimaryButtonSame = tw(
  PrimaryButtonBase
)`ml-8 bg-white font-display uppercase font-normal text-xl tracking-wider text-dark-blue hover:text-dark-blue py-2 px-12 border border-solid border-dark-blue hover:bg-white cursor-pointer rounded-md mt-2`;

const UserBox = tw.div`flex flex-col items-center w-full`;
const Avatar = tw.div`h-16 w-16`;
const IconBox = tw.div`flex py-4`;

const Name = tw.h1`text-dark-blue text-lg lg:my-2`;
const Designation = tw.h1`text-black text-xl font-normal`;
const Heading = tw.h1`font-black text-2xl md:text-3xl leading-snug`;
const Paragraph = tw.p`text-sm lg:text-base font-medium text-gray-600`;
const Subheading = tw(SubheadingBase)`text-dark-blue`;
const Count = tw.h1`text-black text-sm pl-1 last:pr-0 pr-8 mb-0 flex items-center`;

export default ({ background }) => {
  return (
    <ColumnContainer style={{ background }}>
      <TwoColumn>
        <LeftColumn>
          <UserBox>
            <Avatar>
              <img tw='rounded-full' src='/images/userimg.png' height='100%' width='100%' />
            </Avatar>
            <Name>Raushan</Name>
            <Designation>Student</Designation>
            <IconBox>
              <Icon style={{ color: '#01579b' }} size={22} icon={ic_mode_comment} />
              <Count>6</Count>
              <Icon style={{ color: '#01579b' }} size={22} icon={checkCircle} />
              <Count>5</Count>
              <Icon style={{ color: '#01579b' }} size={22} icon={thumbsUp} />
              <Count>3</Count>
            </IconBox>
            <Designation>Message 1 of 5</Designation>
            <IconBox>
              <Icon style={{ color: '#01579b' }} size={28} icon={ic_remove_red_eye} />
              <Count>14</Count>
            </IconBox>
            <PrimaryButtonFollow>Follow</PrimaryButtonFollow>
          </UserBox>
        </LeftColumn>
        <RightColumn>
          <Heading>
            What psychological effect makes notes on a piano that are an octave apart sound the
            same?
          </Heading>
          <Subheading>Posted on ‎01-28-2021 03:41 PM</Subheading>
          <Paragraph>
            The effect is not psychological. It is physical. Notes on a piano that are separated by
            an octave are very similar physically. To understand why this is so, you have to
            understand first the basics of sound. Sound is a waving vibration of air that travels as
            it oscillates. The pattern of the vibrations in the air (the sound's waveshape) is
            determined by the vibrating pattern of the object that created it. For a piano, the
            sound is created by hitting metal strings to get them vibrating. The piano strings then
            knock into the air and get it vibrating in the same pattern. The sound is launched from
            the string, through the air, and into our ears. If you take a single string of metal and
            clamp the two ends down, there are only certain ways you can get it vibrating. Let's
            take a look at the basic components of a string's vibration. The simplest and strongest
            vibration a string clamped at both ends can experience (the "fundamental" or "first
            harmonic") is half of a sine wave (one hump), as demonstrated in the top of the
            animation. Because the ends are clamped, they cannot move, so the wavelength of the
            simplest vibration is determined by the distance between the clamps. The next simplest
            possible vibration is a full sine wave (two humps), shown in the middle of the
            animation. This vibration has a wavelength equal to half the wavelength of the
            fundamental vibration. The next simplest possible vibration is one and a half sine waves
            (three humps), shown in the bottom of the animation.
          </Paragraph>
          <PrimaryButtonReply>Reply</PrimaryButtonReply>
          <PrimaryButtonSame>I have the same question</PrimaryButtonSame>
        </RightColumn>
      </TwoColumn>
    </ColumnContainer>
  );
};
