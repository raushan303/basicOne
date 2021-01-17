import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  .card {
    perspective: 150rem;
    position: relative;
    width: 260px;
    height: 260px;
  }
  .card__side {
    width: 260px;
    height: 260px;
    border-radius: 8px;
    // padding:20px 10px;
    cursor: pointer;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    overflow: hidden;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.06), 0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
  }
  .card__side--front {
    background: #fff;
    .img-box {
      height: 130px;
      width: 260px;
      padding: 10px 45px;
      background-image: linear-gradient(to right bottom, #9c88ff, #8c7ae6);
      img {
        height: 110px;
        width: 150px;
      }
    }
    .stats-container {
      padding: 0 25px;
      .stats {
        width: 210px;
        display: flex;
        border-radius: 20px;
        justify-content: center;
        background-color: #f5f6f8;
        padding: 5px 10px;
        .view,
        .like,
        .comment {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .view {
          width: 57px;
        }
        .like {
          width: 57px;
        }
        .comment {
          width: 76px;
        }
      }
    }
  }
  .card__side--back {
    transform: rotateY(180deg);
    // background-image: linear-gradient(to right bottom, #487eb0, #40739e);
    display: flex;
    flex-direction: column;

    padding: 20px 30px;
    .sub-text {
      font-style: Roboto;
      letter-spacing: 1.5px;
    }

    .ant-form-item {
      margin-bottom: 2px;
      &-label {
        width: 80px;
        max-width: 80px;
        label {
          color: #fa983a;
        }
      }
      &-control {
        margin-left: 10px;
        flex: 1;
      }
    }
    .btn,
    .btn:link,
    .btn:visited {
      align-self: center;
      text-transform: uppercase;
      text-decoration: none;
      padding: 8px 20px;
      display: inline-block;
      border-radius: 30px;
      transition: all 0.2s;
      position: relative;
      font-size: 16px;
      border: none;
      cursor: pointer;
    }

    .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    }
    .btn:hover::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }

    .btn:active,
    .btn:focus {
      outline: none;
      transform: translateY(-1px);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    }

    .btn--orange {
      background-color: #fa983a;
      color: #fff;
    }
    .btn--orange::after {
      background-color: #fa983a;
    }

    .btn::after {
      content: '';
      display: inline-block;
      height: 100%;
      width: 100%;
      border-radius: 30px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all 0.4s;
    }
  }
  .card:hover .card__side--front {
    transform: rotateY(-180deg);
  }
  .card:hover .card__side--back {
    transform: rotateY(0);
  }
`;
