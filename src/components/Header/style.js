import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 70px;

  .outer-container {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    background-color: #101d2c;
    height: 100%;

    .main-menu-container {
      display: none;
      svg {
        height: 25px;
        width: 25px;
        color: white;
      }
    }

    .app-logo {
      margin-left: 80px;
      img {
        height: 40px;
        width: 150px;
      }
    }
  }

  .menu-container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .main-menu-title {
      margin-right: 80px;
      height: 40px;
      width: 100px;
      display: flex;
      justify-content: space-around;
      justify-self: flex-end;
      color: #c69963;
      border: 1px solid #c69963;
      padding: 7px;
      transition: all 0.3s;
    }

    .main-menu-title:hover {
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }

    .main-menu-title:active {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
      transform: translateY(0);
    }
  }

  @media only screen and (max-width: 767px) {
    .outer-container {
      .main-menu-container {
        display: flex;
      }
      .app-logo {
        margin-left: 30px;
        img {
          height: 40px;
          width: 90px;
        }
      }
    }
    .menu-container {
      .main-menu-title {
        margin-right: 0px;
        height: 35px;
        width: 90px;
      }
    }
  }
`;

const DrawerWrapper = styled.div`
  .container {
    padding: 10px;
    display: flex;
    border-bottom: 1px solid #f2f4f8;
    img {
      height: 30px;
      width: 30px;
    }
    .text {
      padding: 0px 30px;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
export { HeaderWrapper, DrawerWrapper };
