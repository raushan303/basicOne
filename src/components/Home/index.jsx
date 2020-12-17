import React from 'react';

import HomeWrapper from './style';
import Link from 'next/link';

export default function HomeComponent(props) {
  return (
    <HomeWrapper>
      <div className='h-outer-wrapper'>
        <div className='h-upper-modal'>
          <div className='h-heading-wrapper'>
            <div className='h-text-container'>The Basic One</div>
            <div className='h-logo'>
              <img src='./images/ico.jpeg'></img>
            </div>
          </div>

          <div className='h-button-group'>
            <div className='h-button1 h-button'>
              <Link href='/login'>
                <button className='h-btn h-header__btn'>
                  Register / Login
                </button>
              </Link>
            </div>
            <div className='h-button2 h-button'>
              <Link href='/subject'>
                <button className='h-btn h-header__btn'>Login as Guest</button>
              </Link>
            </div>
          </div>
        </div>

        <div className='h-lower-modal'>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>Developers</h2>
          </div>

          <div className='h-row'>
            <div className='h-story'>
              <figure className='h-story__shape'>
                <img
                  src='./images/avt2.png'
                  alt='Person on a tour'
                  className='h-story__img'
                />
                <figcaption className='h-story__caption'>
                  Dhruv agarwal
                </figcaption>
              </figure>

              <div className='h-story__text'>
                <h3 className='h-heading-tertiary h-u-margin-bottom-small'>
                  I am debugging like a detective in a crime movie where i am
                  also the murderer :P{' '}
                </h3>
                <div className='clearfix personal-info'>
                  <img src='./images/linkedin.svg' className='linkedin' />
                  <div className='linkedin-text'>
                    {' '}
                    <a
                      href='https://www.linkedin.com/in/dhruva-agarwal-bb78a8137/'
                      target='_blank'
                    >
                      Dhruva Agarwal
                    </a>
                  </div>

                  <img src='./images/github-logo.svg' className='linkedin' />
                  <div className='linkedin-text'>
                    {' '}
                    <a href='https://github.com/agarwal-123/' target='_blank'>
                      Dhruva Agarwal
                    </a>
                  </div>
                </div>
                <br />
                <div>
                  <ul>
                    <li>
                      About 1 year experience of Javascript Frameworks, like
                      React and Nodejs.
                    </li>
                    <li>
                      Love to solve complex algorithmic problems. Codechef
                      profile:{' '}
                      <img src='./images/codechef.svg' className='chef' />{' '}
                      <a
                        href='https://www.codechef.com/users/dhruv331'
                        target='_blank'
                      >
                        dhruv331
                      </a>
                    </li>
                    <li>
                      Curruntly exploring React-Native for a better
                      understanding of mobile applications.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='h-row'>
            <div className='h-story'>
              <figure className='h-story__shape'>
                <img
                  src='./images/avt2.png'
                  alt='Person on a tour'
                  className='h-story__img'
                />
                <figcaption className='h-story__caption'>
                  Raushan Kumar
                </figcaption>
              </figure>
              <div className='h-story__text'>
                <h3 className='h-heading-tertiary h-u-margin-bottom-small'>
                  I love building and automating useless things because
                  everything is useless until someone use them :)
                </h3>
                <div className='clearfix personal-info'>
                  <img src='./images/linkedin.svg' className='linkedin' />
                  <div className='linkedin-text'>
                    {' '}
                    <a
                      href='https://www.linkedin.com/in/raushan-kumar-197882179/'
                      target='_blank'
                    >
                      Raushan Kumar
                    </a>
                  </div>

                  <img src='./images/github-logo.svg' className='linkedin' />
                  <div className='linkedin-text'>
                    {' '}
                    <a href='https://github.com/raushan303' target='_blank'>
                      Raushan Kumar
                    </a>
                  </div>
                </div>
                <br />
                <div>
                  <ul>
                    <li>
                      As a Web Developer with over 1 year experience of
                      Javascript Frameworks, like React and Nodejs.
                    </li>
                    <li>
                      I am also in love with competitive coding.{' '}
                      <img src='./images/codechef.svg' className='chef' />{' '}
                      <a href='https://www.codechef.com/users/raushan303'>
                        raushan303
                      </a>
                      <img src='./images/codeforces.svg' className='forces' />{' '}
                      <a href='https://codeforces.com/profile/raushan303'>
                        raushan303
                      </a>{' '}
                      <img src='./images/leetcode.svg' className='code' />{' '}
                      <a href='https://leetcode.com/raushan303/'>raushan303</a>
                    </li>
                    <li>
                      Curruntly exploring React-Native and Flutter for a better
                      understanding of mobile applications.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='h-row'>
            <div className='h-story'>
              <figure className='h-story__shape'>
                <img
                  src='./images/avt2.png'
                  alt='Person on a tour'
                  className='h-story__img'
                />
                <figcaption className='h-story__caption'>
                  Siddhant Gandhi
                </figcaption>
              </figure>
              <div className='h-story__text'>
                <h3 className='h-heading-tertiary h-u-margin-bottom-small'>
                  If you have a complex solution, then there is something wrong
                  with the approach :D
                </h3>
                <div className='clearfix personal-info'>
                  <img src='./images/linkedin.svg' className='linkedin' />

                  <div className='linkedin-text'>
                    {' '}
                    <a
                      href='https://www.linkedin.com/in/sgbtech96/'
                      target='_blank'
                    >
                      Siddhant Gandhi
                    </a>
                  </div>

                  <img src='./images/github-logo.svg' className='linkedin' />
                  <div className='linkedin-text'>
                    {' '}
                    <a href='https://github.com/sgbtech96' target='_blank'>
                      Siddhant Gandhi
                    </a>
                  </div>
                </div>

                <br />

                <div>
                  <ul>
                    <li>
                      I'm keen to develop products that could be deployed for
                      public use.
                    </li>
                    <li>
                      I've been working on the MERN tech stack, and React Native
                      to build cross-platform applications for a year.
                    </li>
                    <li>
                      A freak at brainstorming algorithmic programming problems.
                      <img src='./images/codechef.svg' className='chef' />{' '}
                      <a
                        href='https://www.codechef.com/users/sgbtech96'
                        target='_blank'
                      >
                        sgbtech96
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='h-row'>
            <div className='h-story'>
              <figure className='h-story__shape'>
                <img
                  src='./images/avt2.png'
                  alt='Person on a tour'
                  className='h-story__img'
                />
                <figcaption className='h-story__caption'>
                  Raghav Bansal
                </figcaption>
              </figure>
              <div className='h-story__text'>
                <h3 className='h-heading-tertiary h-u-margin-bottom-small'>
                  In order to understand recursion, one must first understand
                  recursion.{' '}
                </h3>

                <div className='clearfix personal-info'>
                  <img src='./images/linkedin.svg' className='linkedin' />
                  <div className='linkedin-text'>
                    {' '}
                    <a
                      href='https://www.linkedin.com/in/raghav-bansal-b10862154/'
                      target='_blank'
                    >
                      Raghav Bansal
                    </a>
                  </div>

                  <img src='./images/github-logo.svg' className='linkedin' />
                  <div className='linkedin-text'>
                    {' '}
                    <a href='https://github.com/bansalraghav19' target='_blank'>
                      Raghav Bansal
                    </a>
                  </div>
                </div>
                <br />
                <div>
                  <ul>
                    <li>
                      About 1 year experience of Javascript Frameworks, like
                      React and Nodejs.
                    </li>
                    <li>
                      I am also in love with competitive coding.{' '}
                      <img src='./images/codeforces.svg' className='forces' />{' '}
                      <a href='https://codeforces.com/profile/bansalraghav_19'>
                        bansalraghav_19
                      </a>
                      <img src='./images/codechef.svg' className='chef' />{' '}
                      <a href='https://www.codechef.com/users/bansalraghav19'>
                        bansalraghav19
                      </a>
                    </li>
                    <li>
                      Curruntly exploring React-Native for a better
                      understanding of mobile applications.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
}
