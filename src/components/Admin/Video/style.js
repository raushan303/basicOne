import styled from 'styled-components';

export const Wrapper = styled.div`
  .select-container {
    display: flex;
    padding: 0 8px;
    .ant-select {
      border: 0;
      .ant-select-selector {
        border-radius: 100px;
        width: 140px;
        border: 1px solid #d9d9d9 !important;
      }
    }
    .add {
      font-size: 25px;
      line-height: 25px;
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .video-form-container {
    padding: 30px;
    background-color: #f5f6f8;
    border-radius: 20px;
    .ant-form-item {
      margin-bottom: 8px;
      &-label {
        width: 80px;
      }
      &-control {
        margin-left: 10px;
      }
    }
  }
`;
