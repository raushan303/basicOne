import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 50px;
  width: 280px;
  // background: #f8fbff;
  background: white;
  .avatar-container {
    background: rgba(18, 18, 29, 0.05);
    border-radius: 12px;
    padding: 25px;
    height: 150px;
    width: 150px;
    img {
      border-radius: 200px;
      height: 100px;
      width: 100px;
      @media (max-width: 575px) {
        height: 80px;
        width: 80px;
      }
    }
    @media (max-width: 575px) {
      padding: 10px;
      height: 100px;
      width: 100px;
    }
  }
  .content-container {
    .author-name {
      margin-top: 20px;
      @media (max-width: 767px) {
        margin-top: 0;
      }
    }
    @media (max-width: 767px) {
      margin-left: 20px;
    }
  }
  @media (max-width: 767px) {
    flex-direction: row;
    width: 100%;
  }
  @media (max-width: 575px) {
    padding: 30px 10px;
  }
`;
