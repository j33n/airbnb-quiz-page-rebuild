import Image from 'next/image'

import {Link} from 'react-scroll'

import {CheckBox, ScrollerButton} from 'components'

import {
  ContainerStyled,
  LeftBoxStyled,
  RightBoxStyled,
  LabelStyled,
  QuestionTitleStyled,
  ScrollStyled,
} from './QuestionStyle'

import {QuestionType, AnswerType} from 'types'

declare interface IQuestion {
  data: QuestionType
  size: number
}

const Question = ({data, size}: IQuestion) => {
  const handleChange = (checked: boolean) => {}

  return (
    <ContainerStyled id={`section-${data.id}`}>
      <ScrollStyled top>
        <Link to={`section-${data.id - 1}`} smooth={true} duration={500}>
          <ScrollerButton />
        </Link>
      </ScrollStyled>
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
            key={answer.id}
            label={answer.description}
            href={`#section-${data.id + 1}`}
            handleChange={() => handleChange}
          />
        ))}
      </RightBoxStyled>
      <ScrollStyled bottom last={size === data.id}>
        <Link to={`section-${data.id + 1}`} smooth={true} duration={500}>
          <ScrollerButton />
        </Link>
      </ScrollStyled>
    </ContainerStyled>
  )
}

export default Question
