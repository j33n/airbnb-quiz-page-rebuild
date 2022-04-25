import React from 'react'

import Link from 'next/link'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


import {Header, QuizHolder, ScrollerButton} from 'components'

import {
  MainContainerStyle,
  QuizTitleStyle,
  Container,
  QuizContainerStyle,
  VerticalLineStyled,
  HeaderContentStyled,
} from 'styles/HomeStyle'

// const lockScroll = useCallback(() => {
//   document.body.style.overflow = 'hidden';
// }, [])

// const unlockScroll = useCallback(() => {
//   document.body.style.overflow = '';
// }, [])

const Home = () => {
  return (
    <Container>
      <MainContainerStyle id="section-0">
        <VerticalLineStyled />
        <HeaderContentStyled>
          <Header />
          <QuizTitleStyle>Take the quiz!</QuizTitleStyle>
          <Link href="#section-1">
          <a>
          <ScrollerButton/>
          </a>
          </Link>
        </HeaderContentStyled>
      </MainContainerStyle>
      <QuizContainerStyle>
        <QuizHolder />
      </QuizContainerStyle>
    </Container>
  )
}

export default Home
