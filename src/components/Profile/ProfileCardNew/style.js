import styled from 'styled-components';

export const Wrapper = styled.div`
  background: white;
  width: 280px;
  .upper-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 50px;

    .avatar-container {
      img {
        border-radius: 200px;
        height: 120px;
        width: 120px;
        @media (max-width: 575px) {
          height: 100px;
          width: 100px;
        }
      }
      @media (max-width: 575px) {
        padding: 10px;
        height: 100px;
        width: 100px;
      }
    }

    .progress-container {
      margin-top: 30px;
      .ant-progress-steps-item {
        height: 3px !important;
        width: 35px !important;
        margin-right: 10px;
      }
      .ant-progress-text {
        display: none;
      }
    }

    .author-name {
      margin-top: 20px;
      @media (max-width: 767px) {
        margin-top: 0;
      }
    }
  }

  .icon-box {
    background: #f1f2f6;
    background: #eaf2f8;
    // background: #F7F9F9;
    padding: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  .about {
    padding: 30px;
    text-align: center;
  }
`;
