import styled from 'styled-components'

interface ContainerProps {
  align?: 'left' | 'right' | 'center'
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.align || 'center'};
`
