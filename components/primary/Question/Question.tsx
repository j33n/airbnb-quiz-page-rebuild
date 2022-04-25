import Image from 'next/image'

import {CheckBox} from 'components'

import {ContainerStyled, LeftBoxStyled, RightBoxStyled, LabelStyled, QuestionTitleStyled} from './QuestionStyle'

import {QuestionType, AnswerType} from 'types'

declare interface IQuestion {
  data: QuestionType
  size: number
}

const Question = ({data, size}: IQuestion) => {
  return (
    <ContainerStyled id={`section-${data.id + 1}`}>
      <LeftBoxStyled>
        <LabelStyled>{`question ${data.id}/${size}`}</LabelStyled>
        <QuestionTitleStyled>{`${data.title}`}</QuestionTitleStyled>
        <Image
          src={`/images/image_${data.assetId}.jpg`}
          width={500}
          height={500}
        />
      </LeftBoxStyled>
      <RightBoxStyled>
        {data.answers.map((answer: AnswerType) => (
          <CheckBox
            label={answer.description}
            value={true}
            onChange={() => {}}
          />
        ))}
      </RightBoxStyled>
    </ContainerStyled>
  )
}

export default Question
