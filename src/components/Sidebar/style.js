import styled from 'styled-components';

const SideBarWrapper = styled.div`
  .main-sidebar {
    background-color: white;
    width: 70px;
    height: 100%;
    border-right: 1px solid rgb(233, 233, 233);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sidebar-icon-container {
    position: relative;
    padding: 20px 0px;
    transition: all 0.2s;
    color: black;
  }

  .svg-image:hover {
    background-color: #fff;
  }

  .svg-image {
    height: 40px;
    width: 40px;
    transition: all 0.2s;
  }

  .sidebar-icon-container:hover img {
    transform: scale(1.2);
  }

  .sidebar-icon-container:hover .image-text {
    display: block;
  }

  .image-text {
    position: absolute;
    top: 30px;
    left: 40px;
    font-size: 15px;
    display: none;
    z-index: 200;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export default SideBarWrapper;
