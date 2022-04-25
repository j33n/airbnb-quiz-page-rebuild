import {Header, QuizHolder} from 'components'

import {MainContainerStyle, QuizTitleStyle} from 'styles/HomeStyle'

const Home = () => {
  return (
    <MainContainerStyle>
      <Header />
      <QuizTitleStyle>Take the quiz</QuizTitleStyle>
      <QuizHolder />
      {/* TODO: Add a scroller */}
    </MainContainerStyle>
  )
}

export default Home
