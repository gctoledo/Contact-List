import styled from 'styled-components'
import { ContentContainer } from '../../styles'

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
    border-radius: 50%;
  }
`

export const ActionBar = styled.div`
  display: flex;
  justify-content: center;
`

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
