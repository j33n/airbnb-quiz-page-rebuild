import React from 'react'
import {Link} from 'react-scroll'
import Image from 'next/image'

import {
  InputStyled,
  Container,
  LinkStyled,
  BoxTextStyled,
} from './CheckBoxStyle'

import Tick from 'assets/Tick.svg'

export declare interface ICheckBox {
  label: string
  value: number
  handleChange: (value: number) => void
  to: string
  checked: boolean
}

const CheckBox = ({label, value, handleChange, to, checked}: ICheckBox) => {
  const onChange = () => {
    handleChange(value)
  }

  return (
    <Container active={checked}>
      <Link to={to} onClick={onChange}>
        <LinkStyled>
          <InputStyled active={checked}>
            <Image src={Tick} alt="check box" />
          </InputStyled>
          <BoxTextStyled>{label}</BoxTextStyled>
        </LinkStyled>
      </Link>
    </Container>
  )
}

export default CheckBox
