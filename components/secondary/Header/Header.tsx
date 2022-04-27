import Image from 'next/image'

import {Box} from 'components'

import {Container, Heading, TextStyle} from './HeaderStyle'

import Logo from 'assets/ba_logo.png'

export declare interface IHeader {
  title?: string
  description?: string
}

const Header = ({title, description}: IHeader) => {
  return (
    <Container>
      <Image src={Logo} width={75} height={68} layout="fixed" alt="logo" />
      <Box>
        <Heading>{`${title || 'HomeAppeal Renovation Quiz'}`}</Heading>
      </Box>
      <TextStyle>
        {`${
          description ||
          `Can’t decide which renovation works for your home? We’ve got you
        covered. Take our quiz to find out what your renovated home should look
        like – and we’ll take care of the rest.`
        }`}
      </TextStyle>
    </Container>
  )
}

export default Header
