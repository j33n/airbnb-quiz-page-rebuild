import {Header, QuizHolder} from 'components'

import {
  MainContainerStyle,
  QuizTitleStyle,
  Container,
  QuizContainerStyle,
} from 'styles/HomeStyle'

const Home = () => {
  return (
    <Container>
      <MainContainerStyle>
        <Header />
        <QuizTitleStyle>Take the quiz</QuizTitleStyle>
      </MainContainerStyle>
      <QuizContainerStyle>
        <QuizHolder />
        {/* TODO: Add a scroller */}
      </QuizContainerStyle>
    </Container>
  )
}

export default Home
