import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  .test-wrapper {
    height: 100%;
    width: 100%;
    background-color: #eee;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url('/images/test1.jpeg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .test-container {
    background-color: white;
    // margin-left: 30%;
    width: 40%;
    // height: 90%;
    z-index: 9999;
    background-color: white;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border: 2px solid #009688;
  }

  .test-question {
    width: 100%;
    height: 140px;
    margin-top: 20px;
    display: inline-block;
    border-bottom: 1px solid #009688;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    padding: 5%;
  }

  .test-option {
    height: 85px;
    width: 100%;
    border-bottom: 0.9px solid #009688;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }

  .test-option:last-child {
    border: none;
    height: 120px;
  }

  .test-check {
    height: 100%;
    width: 100%;
    background-color: white;
    cursor: pointer;
  }

  .test-check:hover {
    background-color: rgb(240, 240, 240);
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }

  .test-radio {
    float: left;
    margin-left: 12%;
    margin-top: 2%;
    width: 10%;
    height: 80%;
  }

  .test-h3 {
    float: left;
    margin-left: 6%;
    margin-top: 4%;
    width: 70%;
    height: 71%;
  }

  .test-question h3,
  .test-answer h3,
  .test-h3 h3 {
    font-weight: 500;
  }

  .test-btn-skip,
  .test-btn-submit {
    border: none;
    height: 40%;
    width: 25%;
    cursor: pointer;
    margin-top: 6%;
  }

  .test-btn-skip {
    margin-left: 14%;
  }

  .test-btn-submit {
    margin-left: 22%;
  }

  .test-btn-continue {
    margin-left: 10%;
    border: none;
    height: 40%;
    width: 80%;
    cursor: pointer;
    margin-top: 6%;
  }

  .test-answer {
    background-color: white;
    margin-left: 30%;
    margin-top: 3%;
    margin-bottom: 3%;
    width: 40%;
    height: 40%;
    z-index: 9999;
    background-color: white;
    padding: 2% 3% 2% 3%;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border: 2px solid #009688;
    text-align: center;
  }
  .test-answer h3 {
    font-size: 100%;
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
  }

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
`;

export default Wrapper;
