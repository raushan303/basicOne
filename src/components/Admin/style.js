import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 60px;
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  @media (max-width: 991px) {
    padding: 30px;
  }
  @media (max-width: 767px) {
    padding: 0;
    flex-direction: column;
  }
`;

const TabWrapper = styled.div`
  padding: 10px 50px;
  flex: 1;
  @media (max-width: 767px) {
    padding: 0;
    flex-direction: column;
  }

  .ant-tabs-tab-btn {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    color: #9c9c9c;
    padding-bottom: 15px;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    color: #ef5350;
    padding-bottom: 15px;
  }

  .ant-tabs-nav .ant-tabs-tab-active {
    padding-left: 5%;
    padding-right: 5%;
  }

  .ant-tabs-ink-bar {
    background: #ff5756;
    border-radius: 4px;
    opacity: 1;
  }

  .ant-tabs-top > .ant-tabs-nav::before,
  .ant-tabs-bottom > .ant-tabs-nav::before,
  .ant-tabs-top > div > .ant-tabs-nav::before,
  .ant-tabs-bottom > div > .ant-tabs-nav::before {
    border: 0px;
  }

  .overlaytabs {
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.2px;
      text-transform: uppercase;
      color: #9c9c9c;
      padding-bottom: 15px;
    }
    .ant-tabs-ink-bar {
      opacity: 0;
    }
  }

  .ant-tabs-nav-operations {
    display: none !important;
  }
`;

export { Wrapper, TabWrapper };
