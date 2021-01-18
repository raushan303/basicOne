import styled from 'styled-components';

export const Wrapper = styled.div`
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
    .add {
      font-size: 25px;
      line-height: 25px;
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .form-container {
    margin: 30px 0 0 10px;
    .video-form-container {
      padding: 30px;
      background-color: #f5f6f8;
      border-radius: 20px;
      .ant-form-item {
        margin-bottom: 8px;
        &-label {
          width: 80px;
          max-width: 80px;
        }
        &-control {
          margin-left: 10px;
          flex: 1;
        }
      }
    }
    .upload-container {
      margin-left: 100px;
      @media (max-width: 1156px) {
        margin: 30px 0;
      }
    }
    @media (max-width: 1156px) {
      margin: 20px 0;
      flex-direction: column;
    }
  }
  .add-field-container {
    margin: 30px 0 0 30px;
    .add-field {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 991px) {
      margin: 10px 0;
      flex-direction: column;
    }
    @media (max-width: 767px) {
      margin: 10px 30px;
    }
    @media (max-width: 575px) {
      margin: 10px 0;
    }
  }
`;
