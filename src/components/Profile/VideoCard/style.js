import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  .video-card {
    padding: 20px;
    border: 1px solid rgba(18, 18, 29, 0.1);
    border-radius: 12px;
    width: 300px;
    .icon-container {
      display: flex;
      width: 100%;
    }
    .ant-progress-bg {
      height: 4px !important;
    }
  }
`;
