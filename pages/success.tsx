import React, {useEffect, useState} from 'react'

import {Header} from 'components'

import quizData from 'data/quiz'

import {
  MainContainerStyle,
  Container,
  HeaderContentStyled,
  ResultsBoxStyled,
  ContainerResultStyled,
  QuestionStyled,
  AnswerStyled,
} from 'styles/SuccessStyle'

const Success = () => {
  const [resDataFetched, setResDataFetched] = useState([])

  useEffect(() => {
    const quizData: any = JSON.parse(localStorage.getItem('quizData'))
    setResDataFetched(quizData)
  }, [])

  return (
    <Container>
      <MainContainerStyle>
        <HeaderContentStyled>
          <Header
            title="HomeAppeal Renovation Results"
            description="Here are the results for the quiz:"
          />
        </HeaderContentStyled>
      </MainContainerStyle>
      <ResultsBoxStyled>
        {resDataFetched?.map((val: any, key) => (
          <ContainerResultStyled key={val.answerId}>
            {/* TODO: adjust data to render valid selected qns */}
            {/* {console.log(val)} */}
            <QuestionStyled>{quizData[key].title}</QuestionStyled>
            <AnswerStyled>
              {quizData[key].answers[1].description}
            </AnswerStyled>
          </ContainerResultStyled>
        ))}
      </ResultsBoxStyled>
    </Container>
  )
}

export default Success
