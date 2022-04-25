import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {CheckBox, ScrollerButton} from 'components'

import {
  ContainerStyled,
  LeftBoxStyled,
  RightBoxStyled,
  LabelStyled,
  QuestionTitleStyled,
  VerticalLineStyled,
  ScrollStyled,
} from './QuestionStyle'

import {QuestionType, AnswerType} from 'types'

declare interface IQuestion {
  data: QuestionType
  size: number
}

// TODO: toggle checkboxes/
const handleChange = (checked: boolean) => {}

const Question = ({data, size}: IQuestion) => {
  return (
    <ContainerStyled id={`section-${data.id}`}>
      <VerticalLineStyled />
      <ScrollStyled top>
        <Link href={`#section-${data.id - 1}`}>
          <a>
            <ScrollerButton />
          </a>
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
            label={answer.description}
            href={`#section-${data.id + 1}`}
            handleChange={() => handleChange}
          />
        ))}
      </RightBoxStyled>
      <ScrollStyled bottom last={size === data.id}>
        <Link href={`#section-${data.id + 1}`}>
          <a>
            <ScrollerButton />
          </a>
        </Link>
      </ScrollStyled>
    </ContainerStyled>
  )
}

export default Question
