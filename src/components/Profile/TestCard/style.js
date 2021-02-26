import styled from "styled-components";

export const Wrapper = styled.div`
  // padding: 20px;
  cursor: pointer;


  .ant-checkbox-wrapper-checked{
    span{
      color:#0A986D;
    }
  }

  .secondary{  
    input{
    display:none;
  }
}


  .question-card {
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(0, 0, 0, 0.12);
    // border-radius: 8px;
    max-width: 500px;
    .question-section {
      background-color: #2ca1e2;
    padding: 15px ;

    }
    .question {
      color: #ffffff;
      font-family: "Poppins";
    }
    .option {
      padding: 12px 0;
      font-size: 14px;
      font-family: "Roboto";
    }
    .note {
      padding: 20px 0px;
      font-size: 14px;
      font-family: "Roboto";
    }

    .solution{
    padding: 15px;

    }


    .ant-checkbox-group {
      display: flex;
      flex-direction: column;
      margin:10px;
    }
  
    .ant-checkbox-group-item {
      margin-bottom: 25px;
    }


    .ant-checkbox-inner {  
      width: 19px;
      height: 19px;
    }
  
  
    .FeedbackInput{
      margin-top: 26px;
      display: flex;
      justify-content: center;
  
      input{
        align-text: left;
        border-bottom: 1px solid #888;
        // border-radius: 8px;
        width: 100%;
        padding: 12px;
      }
    }
    
    .Submit{
      margin-top: 26px;
      display: flex;
      justify-content: center;
  
      button{
        width: 305px;
        height: 36px;
        background-color: #EF5350;
        border-radius:200px;
        text-align: center;
        color: white;
  
        &:hover{
          color: white;
          background-color: #DD5350;
        }
      }
  }
`;
