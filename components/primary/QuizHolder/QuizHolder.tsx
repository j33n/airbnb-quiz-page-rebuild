import {Question} from 'components'

import {QuestionType} from 'types'

import {Container} from './QuizHolderStyled'

import quizData from 'data/quiz'

const QuizHolder = () => {
  return (
    <Container>
      {quizData.map((quiz: QuestionType) => (
        <Question data={quiz} size={quizData.length} key={quiz.id} />
      ))}
    </Container>
  )
}

export default QuizHolder
4