import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  .select-container {
    display: flex;
    padding: 8px;
    .ant-select {
      border: 0;
      .ant-select-selector {
        border-radius: 100px;
        width: 140px;
        border: 1px solid #d9d9d9 !important;
      }
    }
  }
`;
