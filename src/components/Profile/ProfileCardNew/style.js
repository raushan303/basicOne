import styled from 'styled-components';

export const Wrapper = styled.div`
  background: white;
  width: 280px;
  min-height: fit-content;
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
    background: #eaf2f8;
    padding: 15px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    .center-align {
      width: 50px;
      text-align: center;
    }
  }
  .about {
    padding: 30px;
    text-align: center;
  }
  .social-links {
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
  }
  .follow-container {
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin: 30px 0;
    .follow {
      padding: 10px 50px;
      background: #1abc9c;
      color: white;
      font-family: 'Poppins';
    }
  }
`;
