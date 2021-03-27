import React, { useEffect } from 'react';
import { Container as ContainerBase } from '../../misc/Layouts';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line

import { connect } from 'react-redux';
import { register } from '../../redux/action/user';
import Loading from '../Loader';

import { useRouter } from 'next/router';
import Password from 'antd/lib/input/Password';
const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 lg:shadow-xl sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`w-full lg:w-1/2 xl:w-5/12 sm:p-12 flex flex-col items-center`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-0 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 border-0 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function index({ register, registerResponse, userDetails }) {
  const router = useRouter();

  const handlesubmit = async (event) => {
    event.preventDefault();
    const tmpUserDetails = {
      phoneNo: userDetails.phoneNo,
      name: document.getElementsByTagName('input')[0].value,
      gender: document.getElementsByTagName('input')[1].value,
      password: document.getElementsByTagName('input')[2].value,
      email: document.getElementsByTagName('input')[3].value,
      state: document.getElementsByTagName('input')[4].value,
      city: document.getElementsByTagName('input')[5].value,
      grade: document.getElementsByTagName('input')[6].value,
      board: document.getElementsByTagName('input')[7].value,
    };
    register(tmpUserDetails);
  };

  useEffect(() => {
    if (!registerResponse?.error) {
      if (registerResponse?.data?.data?.success) {
        const userInfo = registerResponse?.data?.data?.user?.userInfo;
        const token = userInfo.token;
        cookies.set('token_id', token, {
          path: '/',
          maxAge: 31540000,
        });
        router.push('/subject');
      }
    }
  }, [registerResponse]);

  return (
    <Container>
      {registerResponse?.isLoading && <Loading />}
      <Content>
        <MainContainer>
          <MainContent>
            <Heading>Sign Up To Basic One</Heading>
            <FormContainer>
              <Form onSubmit={handlesubmit}>
                <Input type='name' placeholder='Name' id='name' />
                <Input type='gender' placeholder='Gender' id='gender' />
                <Input type='pass' placeholder='password' id='password' />
                <Input type='email' placeholder='email' id='email' />
                <Input type='state' placeholder='state' id='state' />
                <Input type='city' placeholder='city' id='city' />
                <Input type='grade' placeholder='grade' id='grade' />
                <Input type='board' placeholder='board' id='board' />
                <SubmitButton type='submit'>
                  <span className='text'>Register</span>
                </SubmitButton>
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={'/images/login-illustration.svg'} />
        </IllustrationContainer>
      </Content>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    registerResponse: state.user.getRegisterData,
    userDetails: state.userDetails.userDetails.data,
  };
};

export default connect(mapStateToProps, { register })(index);
