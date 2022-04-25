import {LabelStyled, InputStyled, Container} from './CheckBoxStyle'

export declare interface ICheckBox {
  label: string
  value: boolean
  onChange: () => void
}

const CheckBox = ({label, value, onChange}: ICheckBox) => {
  return (
    <Container>
      <LabelStyled>
        <InputStyled type="checkbox" checked={value} onChange={onChange} />
        {label}
      </LabelStyled>
    </Container>
  )
}

export default CheckBox
