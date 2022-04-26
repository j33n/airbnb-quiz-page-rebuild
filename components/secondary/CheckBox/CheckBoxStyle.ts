import styled from 'styled-components'

export declare interface IActive {
  active: boolean
}

export const Container = styled.div<IActive>`
  border: 2px solid transparent;
  border-bottom: 2px solid rgba(238, 238, 238, 0.4);
  cursor: pointer;

  &:first-child {
    border-top: 2px solid rgba(238, 238, 238, 0.4);
  }

  &:hover {
    border-top: 0;
    border-bottom: 0;
    border: 2px solid #5da8fc;
  }

  ${props =>
    props.active &&
    `
    background: #5da8fc;
    color: #fff;
    border-top: 0;
    border-bottom: 0;
    border: 2px solid #5da8fc;

    &:first-child {
      border-top: 0;
    }
  `}
`

export const LinkStyled = styled.div`
  width: 100%;
  position: relative;
  display: table;
  padding: 28px 43px 32px 31px;
`

export const LabelStyled = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 40px;
  font-size: 18px;
  line-height: 1.22;
  letter-spacing: -0.2px;
  color: #2b2b2b;
  font-weight: 400;
`

export const InputStyled = styled.div<IActive>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  margin-top: -12px;
  width: 24px;
  height: 24px;
  border: solid 2px #2b2b2b;
  border-radius: 50%;
  vertical-align: middle;

  ${props =>
    props.active &&
    `
      border: solid 2px #fff;
    `}
`

export const BoxTextStyled = styled.span`
  display: block;
  padding-left: 40px;
`
