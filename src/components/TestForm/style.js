import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/test1.jpeg');
  background-color: #eee;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow-y: scroll;
  width: 100%;

  .test-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .test-container {
      background-color: white;
      margin: 50px 0;
      width: 630px;
      z-index: 9999;
      background-color: white;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
      border: 2px solid #009688;

      @media (max-width: 650px) {
        width: 100%;
      }

      .test-question {
        width: 100%;
        min-height: 140px;
        margin-top: 20px;
        display: inline-block;
        border-bottom: 1px solid #009688;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
        padding: 5%;
        h3 {
          font-weight: 500;
          margin: 0;
        }
      }

      .test-option {
        width: 100%;
        border-bottom: 0.9px solid #009688;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;

        .test-check {
          width: 100%;
          background-color: white;
          cursor: pointer;
          display: flex;
          padding: 20px 0;

          &:hover {
            background-color: rgb(240, 240, 240);
            border-bottom-left-radius: 50px;
            border-bottom-right-radius: 50px;
          }
          .test-radio {
            margin-left: 50px;
            width: 10%;
            height: 80%;
            @media (max-width: 650px) {
              margin-left: 10px;
            }
          }
          .test-h3 {
            margin-left: 30px;
            width: 70%;
            display: flex;
            align-items: center;
            @media (max-width: 650px) {
              margin-left: 10px;
            }
            h3 {
              font-weight: 500;
              margin: 0;
            }
          }
        }
      }

      .test-btn-container {
        padding: 45px 100px;
        display: flex;
        justify-content: space-between;
        @media (max-width: 650px) {
          padding: 20px;
        }
        .test-btn-skip,
        .test-btn-submit {
          border: none;
          padding: 12px 0;
          width: 150px;
          @media (max-width: 650px) {
            width: 100px;
          }
          cursor: pointer;
          h3 {
            margin: 0;
          }
        }

        .test-btn-continue {
          border: none;
          height: 50px;
          width: 100%;
          padding: 12px 0;
          cursor: pointer;
          h3 {
            margin: 0;
          }
        }
      }
    }

    .test-answer {
      background-color: white;
      margin: 50px 5px;
      max-width: 630px;
      z-index: 9999;
      background-color: white;
      padding: 30px;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
      border: 2px solid #009688;
      text-align: center;
      h3 {
        font-size: 100%;
        font-weight: 500;
        margin: 0;
      }
    }

    .test-container-s {
      background-color: white;
      margin-left: 30%;
      margin-top: 9%;
      margin-bottom: 5%;
      width: 40%;
      height: 60%;
      /* box-shadow: 5px 5px 5px #efefef; */
      z-index: 9999;
      background-color: white;
      .test-title {
        margin-left: 20%;
        margin-top: 5%;
        display: inline-block;
      }

      .test-result {
        margin-left: 20%;
        margin-top: 5%;
        font-weight: 500;
      }

      .test-finish {
        border: none;
        cursor: pointer;
        width: 60%;
        height: 10%;
        margin-top: 7%;
        margin-left: 20%;
      }
    }
  }
`;

export default Wrapper;
