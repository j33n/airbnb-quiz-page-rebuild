import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const MainContainerStyle = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 555px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
  padding-right: 25px;
  height: 100vh;
`

export const QuizContainerStyle = styled.div`
  display: flex;
  width: 70vw;
  padding-left: 25px;
  padding-right: 25px;
  margin: auto;
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

export const VerticalLineStyled = styled.div`
  position: fixed;
  width: 1px;
  left: 50%;
  margin-left: -0.5px;
  border-right: 1px solid #e4e4e4;
  height: 100%;
  bottom: 0;
  display: block;
`

export const HeaderContentStyled = styled.div`
  background: #fff;
  position: relative;
`
