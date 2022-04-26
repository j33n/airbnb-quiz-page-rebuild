import React from 'react'

import {Link} from 'react-scroll'

import {Header, QuizHolder, ScrollerButton} from 'components'

import {
  MainContainerStyle,
  QuizTitleStyle,
  Container,
  QuizContainerStyle,
  VerticalLineStyled,
  HeaderContentStyled,
} from 'styles/HomeStyle'

const Home = () => {
  return (
    <Container>
      <MainContainerStyle id="section-0">
        <VerticalLineStyled />
        <HeaderContentStyled>
          <Header />
          <QuizTitleStyle>Take the quiz!</QuizTitleStyle>
          <Link to="section-1" smooth={true} duration={500}>
            <ScrollerButton />
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
