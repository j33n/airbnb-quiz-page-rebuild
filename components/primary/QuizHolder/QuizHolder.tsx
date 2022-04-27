import {useState, useEffect} from 'react'

import {Question} from 'components'

import {QuestionType, QuizResponseType, IQuizHolder} from 'types'

import {Container} from './QuizHolderStyled'

import quizData from 'data/quiz'

const QuizHolder = ({redirectToSuccessPage}: IQuizHolder) => {
  const [quizResult, setQuizResult] = useState<QuizResponseType[]>([])

  useEffect(() => {
    // Check all questions are answered
    if (quizResult.length === quizData.length) {
      redirectToSuccessPage()
    }
  })

  const handleValidation = (value: QuizResponseType) => {
    // Check question is already answered
    const keyExists = quizResult.findIndex(
      val => val.answerId === value.answerId,
    )
    if (keyExists === -1) {
      return setQuizResult([
        ...quizResult,
        {answerId: value.answerId, responseId: value.responseId},
      ])
    }

    const updatedQuizResult = quizResult.map((val: QuizResponseType) =>
      val.answerId === value.answerId
        ? {answerId: val.answerId, responseId: value.responseId}
        : val,
    )

    setQuizResult(updatedQuizResult)
  }

  return (
    <Container>
      {quizData.map((quiz: QuestionType) => (
        <Question
          data={quiz}
          size={quizData.length}
          key={quiz.id}
          handleValidation={handleValidation}
        />
      ))}
    </Container>
  )
}

export default QuizHolder
