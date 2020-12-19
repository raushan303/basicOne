import styled from 'styled-components';

const TopicCardWrapper = styled.div`
  .topic-card {
    background: #fff;
    height: 150px;
    width: 200px;
    cursor: pointer;

    .img-box {
      height: 75px;
      width: 200px;
      img {
        height: 100%;
        width: 100%;
      }
    }

    .title {
      font-weight: bold;
      text-align: center;
      color: black;
    }

    .content1,
    .content2 {
      display: flex;
    }

    .text {
      width: 80px;
    }
  }
  .box-shadow {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.06),
      0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
  }
`;

export default TopicCardWrapper;
