import styled from 'styled-components'

export declare interface IScrollStyled {
  bottom?: boolean
  top?: boolean
  last?: boolean
}

export const ContainerStyled = styled.section`
  display: flex;
  flex-direction: row;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`

export const LeftBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 12.5px;
  padding-right: 57.5px;
  margin: auto;
`

export const RightBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 57.5px;
  padding-right: 12.5px;
  padding-top: 30px;
  margin: auto;
`

export const LabelStyled = styled.span`
  display: block;
  text-transform: uppercase;
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 1.42;
  letter-spacing: 0.2em;
  font-weight: 600;
  margin-top: 0;
  color: #63a4f7;
`

export const QuestionTitleStyled = styled.h1`
  font-size: 32px;
  line-height: 1.13;
  letter-spacing: -1px;
  color: #2b2b2b;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 15px;
`

export const ScrollStyled = styled.div<IScrollStyled>`
  position: absolute;
  left: 50%;
  margin-left: -24px;
  z-index: 100;
  ${props =>
    props.top &&
    `
    top: 40px;
  -webkit-transform: rotateX(180deg);
          transform: rotateX(180deg);
  `};
  ${props => props.bottom && `bottom: 40px`};
  display: ${props => (props.last ? 'none' : 'block')};
`
