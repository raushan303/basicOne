import styled from 'styled-components';

const VideoPlayerWrapper = styled.div`
  // overflow-y: scroll;
  // overflow-x: hidden;
  // flex: 1;
  padding: 50px;
  .outer-container {
    justify-content: center;
  }
  .vimeo-container {
    padding: 50px;
    height: 525px;
    background-color: rgba(18, 18, 29, 0.05);
    .vimeo-player {
      width: 100%;
      height: 100%;
      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }

  .collapsible-head {
    margin-top: 30px;
    padding: 0px 10%;
    height: 60px;
    width: 100%;
    border-radius: 8px;
    cursor: pointer;
    background-color: rgba(18, 18, 29, 0.05);
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .is-open {
    .collapsible-head {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }

  .content-container {
    padding: 20px;

    background-color: rgba(18, 18, 29, 0.05);
    // background-color: rgba(237, 242, 247, 1);
  }

  .other-videos-container {
    padding: 0px 20px;
    height: 70vh;
    overflow-y: scroll;
  }

  @media only screen and (max-width: 991px) {
    padding: 50px 30px;
    .vimeo-container {
      padding: 30px;
      height: 440px;
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 30px 20px;
    .vimeo-container {
      padding: 20px;
      height: 350px;
    }
    .other-videos-container {
      padding: 0 5px;
    }
  }

  @media only screen and (max-width: 576px) {
    padding: 0;
    .vimeo-container {
      padding: 0px;
      height: 250px;
    }
  }
`;

const CollapsibleWrap = styled.div`
  .topicName {
    background: #f8fbff !important;
    min-height: 82px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;

    h5 {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      color: black;
      mix-blend-mode: normal;
    }

    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 14px;
      letter-spacing: 0.4px;
      color: black;
      mix-blend-mode: normal;
    }

    .anticon {
      color: black;
      margin-left: 10px;
      font-size: 20px;
    }
  }

  .chapter-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > span {
      margin-top: 2px;
      margin-left: 15px;
      margin-right: 15px;
    }
  }
  .topic-count {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #12121d;
  }

  .Collapsible {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    cursor: pointer;

    .Collapsible__contentInner {
      display: flex;
      overflow-x: scroll;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none;
      }
    }

    h6 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.15px;
      color: rgba(0, 0, 0, 0.87);
      mix-blend-mode: normal;
      margin-top: 15px;
      margin-left: 15px;
      margin-right: 15px;
    }

    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: flex-end;
      letter-spacing: 0.25px;
      color: rgba(0, 0, 0, 0.6);
      mix-blend-mode: normal;
      margin-bottom: 15px;
      margin-left: 15px;
      margin-right: 15px;
    }

    .wrapper {
      width: auto !important;
      box-shadow: none;
      border-top: 1px solid rgba(0, 0, 0, 0.08);
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }
  }
`;

export { VideoPlayerWrapper, CollapsibleWrap };
