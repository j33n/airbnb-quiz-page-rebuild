import React, {useState} from 'react'
import Link from 'next/link'
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
  value?: boolean
  handleChange: (checked: boolean) => void
  href: string
}

const CheckBox = ({label, value, handleChange, href}: ICheckBox) => {
  const [checked, setChecked] = useState<boolean>(false)

  const onChange = () => {
    setChecked(!checked)
    handleChange(checked)
  }

  return (
    <Container active={checked}>
      <Link href={href}>
        <a>
          <LinkStyled>
            <InputStyled onClick={onChange} active={checked}>
              <Image src={Tick} alt="check box" />
            </InputStyled>
            <BoxTextStyled>{label}</BoxTextStyled>
          </LinkStyled>
        </a>
      </Link>
    </Container>
  )
}

export default CheckBox
