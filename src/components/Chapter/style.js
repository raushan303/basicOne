import styled from 'styled-components';

const ChapterWrapper = styled.div`
  flex: 1;
  // overflow-y: scroll;
  // overflow-x: hidden;

  .tab-container {
    padding: 30px 100px;
  }
  .ant-tabs-nav-operations {
    display: none !important;
  }
  .sub-topic-card-container {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 767px) {
    .tab-container {
      padding: 30px 0px 50px 30px;
    }
  }
  @media only screen and (max-width: 576px) {
    .tab-container {
      padding: 30px 0px 50px 10px;
    }
  }
`;

export default ChapterWrapper;
