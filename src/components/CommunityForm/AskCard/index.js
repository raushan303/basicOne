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

import { connect } from 'react-redux';

const ColumnContainer = tw.div`w-full flex flex-wrap flex-col lg:flex-row md:items-center py-6 md:py-8`;
const TwoColumn = tw.div`w-full relative flex flex-wrap flex-shrink-0 border border-grey border-solid max-w-screen-xl mx-auto`;
const LeftColumn = tw.div`px-4 py-6 md:py-10 md:w-1/3 lg:w-1/4 font-display flex justify-center w-full`;
const RightColumn = tw.div`px-4 md:px-8 py-6 md:py-10 md:w-2/3 lg:w-3/4 font-display bg-white flex flex-col items-start`;
const PrimaryButtonFollow = tw(
  PrimaryButtonBase
)`bg-dark-blue font-display uppercase font-normal text-sm tracking-wider text-white py-2 px-6 border-none mt-2 md:mt-4 hover:bg-dark-blue cursor-pointer`;
const PrimaryButtonReply = tw(
  PrimaryButtonBase
)`mr-4 md:mr-6 bg-dark-blue! font-display uppercase font-normal text-sm md:text-base tracking-wider text-white py-1 md:py-2 px-4 md:px-8 border-none cursor-pointer rounded-md`;
const PrimaryButtonSame = tw(
  PrimaryButtonBase
)`mr-4 md:mr-6 bg-white! font-display uppercase font-normal text-sm md:text-base tracking-wider text-dark-blue! hover:text-dark-blue py-1 md:py-2 px-4 md:px-6 border border-solid border-dark-blue cursor-pointer rounded-md`;

const UserBox = tw.div`flex flex-col items-center w-full`;
const Avatar = tw.div`h-16 w-16`;
const IconBox = tw.div`flex py-2 md:py-4`;

const Name = tw.h1`text-dark-blue text-lg lg:my-2`;
const Designation = tw.h1`text-black text-sm md:text-xl font-normal my-0`;
const Heading = tw.h1`font-black text-2xl md:text-3xl leading-snug`;
const Paragraph = tw.p`text-sm lg:text-base font-medium text-gray-600`;
const Subheading = tw(SubheadingBase)`text-dark-blue`;
const Count = tw.h1`text-black text-sm pl-1 last:pr-0 pr-8 mb-0 flex items-center`;

const index = ({
  background,
  button,
  data,
  index,
  count,
  type,
  userId,
  setReplyModalVisible,
  removeReply,
}) => {
  const handleDelete = () => {
    if (type) {
      removeReply(data);
    } else {
    }
  };

  return (
    <ColumnContainer style={{ background }}>
      <TwoColumn>
        <LeftColumn>
          <UserBox>
            <Avatar>
              <img tw='rounded-full' src='/images/userimg.png' height='100%' width='100%' />
            </Avatar>
            <Name>{data?.name}</Name>
            <Designation>Student</Designation>
            <IconBox>
              <Icon style={{ color: '#01579b' }} size={22} icon={ic_mode_comment} />
              <Count>{count - 1}</Count>
              <Icon style={{ color: '#01579b' }} size={22} icon={checkCircle} />
              <Count>{count}</Count>
              <Icon style={{ color: '#01579b' }} size={22} icon={thumbsUp} />
              <Count>{data?.likeCount || 0}</Count>
            </IconBox>
            <Designation>
              Message {index} of {count}
            </Designation>
            {/* <IconBox>
              <Icon style={{ color: '#01579b' }} size={28} icon={ic_remove_red_eye} />
              <Count>14</Count>
            </IconBox>
            <PrimaryButtonFollow>Follow</PrimaryButtonFollow> */}
          </UserBox>
        </LeftColumn>
        <RightColumn>
          <Heading>{data?.title}</Heading>
          <Subheading>Posted on ‎{data?.date}</Subheading>
          <Paragraph>{data?.description}</Paragraph>
          <div tw='flex flex-wrap mt-auto'>
            {button && (
              <PrimaryButtonReply onClick={() => setReplyModalVisible(true)}>
                Reply
              </PrimaryButtonReply>
            )}
            {data?.userId === userId && (
              <>
                <PrimaryButtonSame>Edit</PrimaryButtonSame>
                <PrimaryButtonSame onClick={handleDelete}>Delete</PrimaryButtonSame>
              </>
            )}
          </div>
        </RightColumn>
      </TwoColumn>
    </ColumnContainer>
  );
};

function mapStateToProps(state) {
  const { userId } = state.userDetails.userDetails.data;
  return {
    userId,
  };
}

export default connect(mapStateToProps, null)(index);
