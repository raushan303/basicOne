import styled from 'styled-components';

export const Wrapper = styled.div`
  background: white;
  width: 280px;
  min-height: fit-content;
  @media (max-width: 767px) {
    display: flex;
    padding: 20px 10px;
    width: 100%;
  }
  .author-name {
    margin-top: 20px;
    @media (max-width: 767px) {
      margin-top: 0;
    }
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
        @media (max-width: 767px) {
          height: 100px;
          width: 100px;
        }
        @media (max-width: 500px) {
          height: 80px;
          width: 80px;
        }
      }
    }

    .progress-container {
      margin-top: 30px;
      .ant-progress-steps-item {
        height: 3px !important;
        width: 35px !important;
        margin-right: 10px;
        @media (max-width: 767px) {
          width: 25px !important;
          margin-right: 8px;
        }
        @media (max-width: 400px) {
          width: 20px !important;
          margin-right: 5px;
        }
      }
      .ant-progress-text {
        display: none;
      }
      @media (max-width: 767px) {
        margin-top: 15px;
      }
    }
    .author-name {
      @media (max-width: 767px) {
        display: none;
      }
    }
    .designation {
      @media (max-width: 767px) {
        display: none;
      }
    }
    .follow-container {
      display: none;
      @media (max-width: 767px) {
        display: flex;
        margin: 20px 0;
      }
      .follow {
        @media (max-width: 400px) {
          padding: 10px 20px;
        }
      }
    }
    @media (max-width: 767px) {
      padding: 10px 50px;
      justify-content: center;
    }
    @media (max-width: 500px) {
      padding: 10px 20px;
    }
    @media (max-width: 400px) {
      padding: 10px;
    }
  }

  .lower-container {
    .author-name {
      display: none;
      @media (max-width: 767px) {
        display: flex;
      }
    }
    .designation {
      display: none;
      @media (max-width: 767px) {
        display: flex;
      }
    }
    .icon-box,
    .icon-box2 {
      background: #eaf2f8;
      background: #f2f2f2;
      padding: 10px;
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
      @media (max-width: 767px) {
        padding: 0;
        margin-top: 10px;
        text-align: left;
      }
    }
    .social-links {
      padding: 10px 20px;
      display: flex;
      justify-content: space-around;
      @media (max-width: 767px) {
        padding: 0;
        margin-top: 10px;
        justify-content: flex-start;
      }
      i {
        @media (max-width: 767px) {
          margin-right: 25px;
        }
      }
    }
    .icon-box,
    .follow-container {
      @media (max-width: 767px) {
        display: none;
      }
    }
    .icon-box2 {
      display: none;
      @media (max-width: 767px) {
        display: flex;
        margin-top: 20px;
        padding: 5px;
      }
    }
    @media (max-width: 767px) {
      padding: 10px;
    }
  }
`;
