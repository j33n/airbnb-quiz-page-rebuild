export type AnswerType = {
  id: number
  description: string
}

export type QuestionType = {
  id: number
  title: string
  assetId: number
  answers: AnswerType[]
}

export type QuizResponseType = {
  answerId: number
  responseId: number
}

export type QuizType = QuestionType[]
