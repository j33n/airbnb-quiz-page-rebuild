import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import {Link} from 'react-scroll'
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
  const router = useRouter()

  useEffect(() => {
    blockScroll()
  }, [blockScroll])

  const handleSuccessPageRedirect = () => {
    router.push('/success')
  }

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
        <QuizHolder redirectToSuccessPage={handleSuccessPageRedirect} />
      </QuizContainerStyle>
    </Container>
  )
}

export default Home
