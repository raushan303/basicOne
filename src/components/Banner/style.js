import WrapperStatistic from 'antd/lib/statistic/Statistic';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #280098;
  padding: 20px 30px 40px 50px;
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
  .banner-title {
    margin-top: 20px;
    font-size: 20px;
    color: white;
  }
  .banner-info1 {
    margin-top: 20px;
    font-size: 16px;
    color: white;
  }
  .banner-info2 {
    margin-top: 30px;
    background-color: white;
    padding: 5px 15px;
    border-radius: 20px;
    color: #280098;
    text-align: center;
  }
  @media only screen and (max-width: 767px) {
    padding: 20px 30px 40px 20px;
  }
`;

export default Wrapper;
