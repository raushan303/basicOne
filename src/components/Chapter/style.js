import styled from 'styled-components';

const ChapterWrapper = styled.div`
  flex: 1;
  .chap-component-container {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  .chap-component-container h1 {
    font-weight: 500;
    margin-top: 1%;
    margin-left: 3%;
  }
  .chap-topic-card-container {
    float: left;
    width: 30%;
    height: 100%;
    margin-left: 3%;
    overflow-y: scroll;
  }
  .chap-subject-card-container {
    float: left;
    width: 65%;
    margin-left: 2%;
    height: 100%;
    overflow-y: scroll;
  }
`;

export default ChapterWrapper;
