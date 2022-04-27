import React from 'react'

import {Header} from 'components'

import {
  MainContainerStyle,
  Container,
  HeaderContentStyled,
} from 'styles/HomeStyle'

const Success = () => {
  return (
    <Container>
      <MainContainerStyle>
        <HeaderContentStyled>
          <Header title="HomeAppeal Renovation Results" description="Here are the results for the quiz:" />
        </HeaderContentStyled>
      </MainContainerStyle>
    </Container>
  )
}

export default Success
