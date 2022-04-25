import React, {useEffect} from 'react'

import Link from 'next/link'
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
          <Link href="#section-1">
            <a>
              <ScrollerButton />
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
