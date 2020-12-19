import WrapperStatistic from 'antd/lib/statistic/Statistic';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #280098;
  padding: 20px 50px 40px 50px;
  width: 100%;
  .arrow {
    padding: 10px;
    background-color: white;
    width: 50px;
    border-radius: 10px;
    img {
      height: 30px;
      width: 30px;
    }
  }
  .h1 {
    margin-top: 20px;
    font-size: 20px;
    color: white;
  }
  .h2 {
    margin-top: 20px;
    font-size: 16px;
    color: white;
  }
  .h3 {
    margin-top: 30px;
    background-color: white;
    padding: 5px 15px;
    border-radius: 20px;
    color: #280098;
    text-align: center;
  }
`;

export default Wrapper;
