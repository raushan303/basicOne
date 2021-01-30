import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  cursor: pointer;
  .question-card {
    display: flex;
    flex-direction: column;
    padding: 25px 20px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    max-width: 400px;
    .question {
      font-size: 16px;
      font-family: 'Poppins';
    }
    .option {
      padding: 12px 0;
      font-size: 14px;
      font-family: 'Roboto';
    }
    .note {
      padding: 20px 0px;
      font-size: 14px;
      font-family: 'Roboto';
    }
  }
`;
