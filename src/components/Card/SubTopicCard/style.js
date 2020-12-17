import styled from 'styled-components';

const SubTopicCardWrapper = styled.div`
  .chap-box-shadow {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.06),
      0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
  }
  .chap-subject-card {
    background: #fff;
    width: 35%;
    height: 35%;
    margin-left: 9%;
    margin-top: 4%;
    margin-bottom: 4%;
    float: left;
    padding: 20px !important;
    border-radius: 8px !important;
    font-family: Roboto, Helvetica Neue, sans-serif;
    font-size: 70%;
    text-align: center;
    cursor: pointer;
  }

  .chap-subject-card:hover {
    background: rgb(178, 235, 242);
  }

  .chap-subject-card-img-box {
    height: 60%;
    border-radius: 8px;
    width: 100%;
  }

  .chap-subject-card-img-box img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  .chap-subject-card-title {
    text-align: center;
    color: black;
  }

  .chap-subject-card-content-first {
    color: #03a826;
    margin-left: 4%;
    margin-top: 4%;
    display: flex;
  }

  .chap-subject-card-content-second {
    margin-left: 4%;
    margin-top: 4%;
    display: flex;
    color: black;
  }

  .chap-subject-card-list-style {
    list-style-type: none;
    padding-right: 15px;
  }
`;
export default SubTopicCardWrapper;
