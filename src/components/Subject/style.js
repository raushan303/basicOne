import styled from 'styled-components';

const SubjectWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  flex: 1;

  .image-container {
    display: flex;
    justify-content: space-around;
    padding: 50px 0px;
    img {
      height: 500px;
      width: 500px;
    }
  }

  .subject-title {
    margin-left: 30px;
    font-size: 30px;
    font-weight: 700;
  }

  .subject-card-container {
    display: flex;
    justify-content: space-around;
    padding: 50px 0px 80px 0px;
  }

  .subject-card {
    width: 300px;
    height: 100px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 22px;
    font-weight: 700;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    .sub-subject-container {
      height: 90%;
      flex-direction: column;
    }
    .sub-subject-link {
      width: 70%;
      margin-left: 15%;
      height: 15%;
      margin-top: 6%;
    }
    .sub-subject h3 {
      margin-top: 4%;
    }
  }

  #sub0 {
    background-color: #4834d4;
  }

  #sub1 {
    background-color: #6ab04c;
  }

  #sub2 {
    background-color: #eb4d4b;
  }

  #sub3 {
    background-color: #22a6b3;
  }

  .chapter-card-container {
    width: 100%;
    padding: 60px 0px;
    background-color: #f2f4f8;
    position: relative;
  }

  .chapter-card-inner-container {
    overflow-x: scroll;
    overflow-y: hidden;
    transition: all 1.5s;
    display: flex;
  }

  .chapter-card {
    padding: 30px;
    background-color: white;
    border-radius: 5%;
    text-align: center;
    margin-left: 50px;
    img {
      width: 250px;
      height: 100px;
    }
    .chapter-name {
      font-weight: 500;
      font-size: 20px;
      margin-top: 20px;
    }
    .chapter-card-content {
      font-weight: 300;
      font-size: 16px;
      margin-top: 20px;
    }
  }

  .sub-left-slider {
    position: absolute;
    border: none;
    top: 45%;
    left: 50px;
    cursor: pointer;
  }

  .sub-right-slider {
    position: absolute;
    border: none;
    top: 45%;
    left: auto;
    right: 50px;
    cursor: pointer;
  }

  .sub-left-slider img {
    height: 50px;
    width: 50px;
  }
  .sub-right-slider img {
    height: 50px;
    width: 50px;
  }
`;

export default SubjectWrapper;
