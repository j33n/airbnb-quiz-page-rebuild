import Image from 'next/image'
import styled from 'styled-components'

import ArrowDown from 'assets/ArrowDown.svg'

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: #fff;
  border: solid 1px #e4e4e4;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 auto;

  svg {
    margin: auto;
    display: block;
  }
`

const ScrollerButton = () => {
  return (
    <ContainerStyled>
      <Image src={ArrowDown} alt="arrow down" />
    </ContainerStyled>
  )
}

export default ScrollerButton
