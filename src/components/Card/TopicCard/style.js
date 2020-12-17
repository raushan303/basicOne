import styled from 'styled-components';

const TopicCardWrapper = styled.div`
  .chap-box-shadow {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.06),
      0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
  }

  .medium-18 {
    font-family: medium;
    font-size: 18px;
  }

  .line-height {
    line-height: normal;
  }

  .chap-topic-card-container {
    float: left;
    width: 30%;
    height: 100%;
    margin-left: 3%;
    overflow-y: scroll;
  }

  .chap-topic-card {
    background: #fff;
    width: 84%;
    height: 22%;
    margin-left: 3%;
    margin-top: 7%;
    margin-bottom: 5%;
    float: left;
    padding: 15px;
    border-radius: 8px !important;
    font-family: Roboto, Helvetica Neue, sans-serif;
    overflow: hidden;
    cursor: pointer;
  }

  .chap-topic-card:hover {
    background: rgb(178, 235, 242);
  }

  .chap-topic-card-img-box {
    border-radius: 8px;
    margin-right: 10px;
    float: left;
    width: 40%;
    height: 100%;
  }

  .chap-topic-card-img-box img {
    width: 100%;
    height: 70%;
    border-radius: 8px;
  }

  .chap-topic-card-title {
    text-align: center;
  }

  .chap-topic-card-content-box {
    flex-direction: column;
    box-sizing: border-box;
    float: left;
    margin-top: 3%;
    margin-left: 5%;
    width: 46%;
    font-size: 80%;
  }

  .chap-topic-card-content-box li {
    margin-bottom: 3%;
    font-weight: 300;
  }
`;

export default TopicCardWrapper;
