import styled from 'styled-components';

const SubjectWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  flex: 1;

  .image-container {
    justify-content: space-around;
    padding: 50px 0px;
    img {
      height: 100%;
      width: 100%;
    }
  }

  .subject-title {
    margin-left: 30px;
    font-size: 30px;
    font-weight: 700;
  }

  .subject-card-container {
    justify-content: space-around;
    padding: 50px 0px 80px 0px;
    .subject-card {
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
    padding: 80px 0px 60px 0px;
    background-color: #f2f4f8;
  }

  .slick-slider {
    position: relative;
  }

  .slick-arrow {
    position: absolute;
  }

  .slick-track {
    display: flex;
  }
  .slick-slide {
    padding: 0px 25px;
  }
  .slick-prev,
  .slick-next {
    top: -60px;
  }
  .slick-prev {
    right: 70px;
    left: auto;
  }
  .slick-next {
    right: 15px;
  }

  .chapter-card {
    padding: 30px;
    background-color: white;
    border-radius: 20px;
    text-align: center;
    height: 260px;
    img {
      width: 100%;
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
`;

export default SubjectWrapper;
