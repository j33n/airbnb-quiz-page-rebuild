import {IBox} from '../../../types'

import {Container} from './BoxStyle'

const Box = ({children, align}: IBox) => {
  return <Container align={align}>{children}</Container>
}

export default Box
