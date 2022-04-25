import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {LabelStyled, InputStyled, Container, LinkStyled, BoxTextStyled} from './CheckBoxStyle'
import Tick from 'assets/Tick.svg'

export declare interface ICheckBox {
  label: string
  value: boolean
  onChange?: () => void
  href: string
  active: false
}

const CheckBox = ({label, value, onChange, href, active}: ICheckBox) => {
  const [checked, setChecked] = useState<boolean>(false)

  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <Container active={checked}>
      <Link href={href}>
        <a>
          <LinkStyled>
              <InputStyled onClick={handleChange} active={checked}>
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
