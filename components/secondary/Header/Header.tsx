import Image from 'next/image'

import {Box} from 'components'

import {Container, Heading, TextStyle} from './HeaderStyle'

import Logo from 'assets/ba_logo.png'

const Header = () => {
  return (
    <Container>
      <Image src={Logo} width={75} height={68} layout="fixed" alt="logo" />
      <Box>
        <Heading>Airbnb Trip Matcher</Heading>
      </Box>
      <TextStyle>
        Can’t decide where to roam this year? We’ve got you covered. Take our
        quiz to find out your Travel Personality – and we’ll take care of the
        rest.
      </TextStyle>
    </Container>
  )
}

export default Header
