import {IBox} from '../../types'

import {Container} from './BoxStyle'

const Box = ({children}: IBox) => {
  return <Container>{children}</Container>
}

export default Box
