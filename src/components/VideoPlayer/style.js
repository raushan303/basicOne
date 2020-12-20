import styled from 'styled-components';

const VideoPlayerWrapper = styled.div`
  .clearfix::after {
    content: '';
    display: table;
    clear: both;
  }

  .vid-component-container {
    height: 100%;
    width: 100%;
  }

  .vid-video-container {
    float: left;
    width: 65%;
    height: 100%;
    text-align: justify;
    padding-right: 20px;
    overflow-y: scroll;
  }

  .vid-video-vimeo-container {
    height: 78%;
    width: 95%;
    margin-left: 4%;
    margin-top: 4%;
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    height: auto;
  }

  .vid-video-vimeo-container iframe,
  .vid-video-vimeo-container object,
  .vid-video-vimeo-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .vid-video-content {
    width: 95%;
    margin-top: 15px;
    margin-left: 4%;
    padding: 10px;
    padding-bottom: 40px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 10px 0px;
  }

  .vid-other-videos-container {
    float: left;
    width: 32.2%;
    height: 100%;
    text-align: center;
    overflow-y: scroll;
    margin-left: 1%;
  }

  .vid-other-videos {
    width: 85%;
    height: 25%;
    margin-top: 8%;
    margin-left: 4%;
    background-color: #f2f4f8;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 10px 0px;
    border-radius: 8px;
    transition: all 0.5s;
    cursor: pointer;
  }

  .vid-other-videos:hover {
    width: 88%;
    margin-left: 3%;
  }

  .vid-other-videos img {
    width: 50%;
    height: 70%;
    margin-left: 4%;
    margin-top: 5%;
    border-radius: 5%;
    float: left;
  }

  .vid-other-videos-text {
    float: left;
    width: 40%;
    height: 100%;
    margin-left: 5%;
    margin-top: 8%;
  }
`;

const CollapsibleWrap = styled.div`
  overflow: hidden;
  .playlistTitle {
  }

  .goalCount {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #12121d;
  }
`;

const CollapsiblePlayListWrapper = styled.div`
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

  .playListTitle {
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

  .Collapsible {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    cursor: pointer;

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

export { VideoPlayerWrapper, CollapsibleWrap, CollapsiblePlayListWrapper };
