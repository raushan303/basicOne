import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 70px;
  .main-navbar-container {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #101d2c;
    color: #fff;
  }

  .main-navbar-inner-container {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 0 1%;
  }

  .main-navbar-content {
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    margin-right: auto;
  }

  .main-app-logo {
    height: 100%;
    margin-left: 12%;
    width: 25%;
    align-items: center;
  }

  .main-app-logo img {
    margin-top: 1%;
    height: 100%;
    width: 100%;
  }

  .main-sep {
    margin-left: 8%;
    transform: scale(2.3);
  }

  .main-page-name {
    font-weight: 500;
    font-size: larger;
    margin-left: 8%;
  }

  .main-menu-buttons {
    max-width: 30%;
    min-width: 15%;
    display: flex;
    justify-content: space-around;
  }

  .main-menu-title:link,
  .main-menu-title:visited {
    font-size: 120%;
    color: #c69963;
    display: inline-block;
    text-decoration: none;
    border: 1px solid #c69963;
    padding: 7px;
    transition: all 0.3s;
  }

  .main-menu-title:hover {
    background-color: #c69963;
    color: #fff;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  .main-menu-title:active {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }
`;

export default HeaderWrapper;
