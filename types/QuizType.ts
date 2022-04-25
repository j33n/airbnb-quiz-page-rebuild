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

export type QuizType = QuestionType[]
