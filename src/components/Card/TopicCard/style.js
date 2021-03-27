import styled from 'styled-components';

const SubTopicCardWrapper = styled.div`
  padding: 30px 20px;
  .box-shadow {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.06),
      0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
  }
  .sub-topic-card {
    background: #fff;
    width: 260px;
    height: 210px;
    border-radius: 8px;
    padding: 20px;
    cursor: pointer;
    &:hover {
      background: rgba(18, 18, 29, 0.05);
    }
    .img-box {
      height: 100px;
      width: 210px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .sub-topic-card-content {
      .title {
        font-weight: bold;
        text-align: center;
        color: black;
      }
      .concepts-videos {
        display: flex;
        margin-top: 3px;

        li {
          width: 120px;
          list-style: disc;
        }
      }
      .learnt-practiced {
        display: flex;
        margin-top: 3px;
        li {
          width: 120px;
          list-style: disc;
        }
      }
    }
  }
`;
export default SubTopicCardWrapper;
