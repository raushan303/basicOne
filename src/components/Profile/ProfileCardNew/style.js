import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 50px;
  width: 280px;
  background: white;
  .avatar-container {
    img {
      border-radius: 200px;
      height: 150px;
      width: 150px;
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

  .icon-box {
    background: #d2dae2;
    height: 100px;
  }

  @media (max-width: 767px) {
    flex-direction: row;
    width: 100%;
  }
  @media (max-width: 575px) {
    padding: 50px 10px;
  }
`;
