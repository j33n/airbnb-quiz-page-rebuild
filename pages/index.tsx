import React, {useEffect} from 'react'

import { Link } from "react-scroll";
import useScrollBlock from 'hooks/useScrollBlock'

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
  const [blockScroll] = useScrollBlock()

  useEffect(() => {
    blockScroll()
  }, [blockScroll])

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
