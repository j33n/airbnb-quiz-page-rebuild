import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const MainContainerStyle = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
  padding-right: 25px;
  width: 100%;
`

export const HeaderContentStyled = styled.div`
  background: #fff;
  position: relative;
`

export const QuizTitleStyle = styled.p`
  font-size: 12px;
  line-height: 1.42;
  letter-spacing: 0.2em;
  color: #63a4f7;
  margin-bottom: 16px;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
`

export const ResultsBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 70%;
  margin: auto;
`

export const ContainerResultStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-weight: 300;
`

export const QuestionStyled = styled.span`
  display: block;
  font-size: 24px;
  line-height: 1.38;
  letter-spacing: -0.2px;
  color: #67a2ff;
  font-weight: 600;
`

export const AnswerStyled = styled.span`
  display: block;
`
