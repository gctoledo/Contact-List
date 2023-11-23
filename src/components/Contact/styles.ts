import styled from 'styled-components'
import { ContentContainer } from '../../styles'

type ButtonProps = {
  types: 'save' | 'edit' | 'cancel'
}

type ContactCardProps = {
  editing: string
}

const contactCardStyle = (editing: string) => {
  if (editing === 'true') {
    return ['#efefef']
  } else {
    return '#fcfcfc'
  }
}

const setButtonColor = (types: string) => {
  let color: string

  switch (types) {
    case 'save':
      color = '#44BD32'
      break
    case 'cancel':
      color = '#C23616'
      break
    default:
      color = '#2F3640'
      break
  }
  return color
}

export const ContactCard = styled(ContentContainer)<ContactCardProps>`
  display: grid;
  grid-template-columns: auto 20%;
  gap: 32px;
  align-items: center;
  border-radius: 16px;
  background-color: ${({ editing }: ContactCardProps) =>
    contactCardStyle(editing)};
  padding: ${({ editing }: ContactCardProps) => {
    if (editing === 'true') return '50px'
  }};
  transition: 0.5s ease all;
  img {
    height: 160px;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

export const ActionBar = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.button<ButtonProps>`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  padding: 12px 16px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${({ types }: ButtonProps) => setButtonColor(types)};
  margin-right: 8px;
`

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
