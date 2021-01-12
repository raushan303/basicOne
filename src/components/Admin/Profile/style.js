import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 50px;
  width: 280px;
  background: #f8fbff;
  .avatar-container {
    background: rgba(18, 18, 29, 0.05);
    border-radius: 12px;
    padding: 25px 25px;
    height: 150px;
    width: 150px;
    img {
      border-radius: 200px;
      height: 100px;
      width: 100px;
    }
  }
`;
