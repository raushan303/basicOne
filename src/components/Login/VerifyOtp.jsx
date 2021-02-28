import React from "react";
// import AnimationRevealPage from "../../lib/helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "../../misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { verifyotp } from '../../shared/http';



import { login } from "../../shared/http";
import { useRouter } from "next/router";
import Password from "antd/lib/input/Password";
const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 lg:shadow-xl sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`w-full lg:w-1/2 xl:w-5/12 sm:p-12 flex flex-col items-center`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;

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

export default function SignIn({
  contactnumber,
  setPath,
  logoLinkUrl = "#",
  // illustrationImageSrc = illustration,
  headingText = "Sign Up To Basic One",
  socialButtons = [
    {
      // iconImageSrc: googleIconImageSrc,
      text: "Sign In With Google",
      url: "https://google.com",
    },
    {
      // iconImageSrc: twitterIconImageSrc,
      text: "Sign In With Twitter",
      url: "https://twitter.com",
    },
  ],
  submitButtonText = "Continue",
  // SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "#",
  signupUrl = "#",
}) {
  const router = useRouter();
  const myinput = {
    num: "",
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    const otp = document.getElementById("otp").value;
    var res = await verifyotp(otp, contactnumber);
    if (res.message == 'OTP Verified') {
      setPath('register');
    } else {
      setPath('signUp');
    }
  };
  return (
    // <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
          {/* <LogoLink href={logoLinkUrl}>
            <LogoImage src={logo} />
          </LogoLink> */}
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>

              <Form onSubmit={handlesubmit}>
                <Input type="OTP" placeholder="OTP" id="otp" />
                <SubmitButton type="submit">
                  {/* <SubmitButtonIcon className="icon" /> */}
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
              </Form>

            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={"/images/login-illustration.svg"} />
        </IllustrationContainer>
      </Content>
    </Container>
    // </AnimationRevealPage>
  );
}
