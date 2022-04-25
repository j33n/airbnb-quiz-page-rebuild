import Image from 'next/image'

import {Box} from 'components'

import { TextStyle } from './QuestionStyle'

import Logo from 'assets/ba_logo.png'
// TODO: Style for component
const Question = () => {
  return (
    <Container>
      <Image src={Logo} width={75} height={68} layout="fixed" />
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

export default Question
