import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { Subheading } from '../../../misc/Headings.js';
import Icon from 'react-icons-kit';
import { ic_insert_comment } from 'react-icons-kit/md/ic_insert_comment';
import { ic_mode_comment } from 'react-icons-kit/md/ic_mode_comment';
import { thumbsUp } from 'react-icons-kit/fa/thumbsUp';
import { checkCircle } from 'react-icons-kit/fa/checkCircle';

const ColumnContainer = tw.div`flex flex-wrap flex-col lg:flex-row md:items-center py-20`;
const TwoColumn = tw.div`relative flex flex-wrap flex-shrink-0 border border-grey border-solid max-w-screen-xl mx-auto`;
const LeftColumn = tw.div`px-4 py-10 md:w-1/3 lg:w-1/4 font-display flex justify-center w-full`;
const RightColumn = tw.div`px-8 py-10 md:w-2/3 lg:w-3/4 font-display bg-white`;

const UserBox = tw.div`flex flex-col items-center w-full`;
const Avatar = tw.div`h-16 w-16`;
const IconBox = tw.div`flex justify-around w-full md:px-12 py-4`;

const Name = tw.h1`text-dark-blue text-lg lg:my-2`;
const Designation = tw.h1`text-black text-xl font-normal`;
const Heading = tw.h1`font-black text-2xl md:text-3xl leading-snug`;
const Paragraph = tw.p`text-sm lg:text-base font-medium text-gray-600`;

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
              <Icon style={{ color: '#01579b' }} size={22} icon={checkCircle} />
              <Icon style={{ color: '#01579b' }} size={22} icon={thumbsUp} />
            </IconBox>
          </UserBox>
        </LeftColumn>
        <RightColumn>
          <Heading>
            Re: HP Solution Center not working : Adobe Flash Player Error and Unable to scan
          </Heading>
          <Subheading>Posted on ‎01-28-2021 03:41 PM</Subheading>
          <Paragraph>
            The simple and down & dirty way to get the original Solution Center to work ONLY if you
            DID NOT uninstall Flash player. Ready for this one.... It's just this simple: SET THE
            DATE on your computer to a date BEFORE 1/12/21, and everything works perfectly. As soon
            as Solution Center loads you can set your date back to the correct date. Leave Time/Date
            settings open during the load of Solution Center. Others have already proved this works
            in Win10 in another thread here. It works FLAWLESSLY in WIN7ULT for me. Of course, the
            DATE of your scanned file will be that date you just set, so set it back right away.
            Also, disable any automatic clock-setting software like Dimension4 etc., during this
            load of Solution Center. You need not change the time, as FLASH only scans the DATE and
            dies after the date 1/12/21, so we can "get over" on that date now. At least until
            someone comes up with a hack for Flash's date search. Suggestion to HP, please make a
            patch such that Solution Center can't "see" the date upon loading, it might mask flash
            from seeing it too. Hope this saves some headaches .. F'Now.
          </Paragraph>
        </RightColumn>
      </TwoColumn>
    </ColumnContainer>
  );
};
