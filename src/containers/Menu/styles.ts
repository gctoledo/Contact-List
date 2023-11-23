import styled from 'styled-components'
import { ContentContainer } from '../../styles'
import { Link } from 'react-router-dom'

export const MenuContainer = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px 16px 16px;
  margin-bottom: 32px;
`
export const Button = styled(Link)`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  padding: 4px 12px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background-color: #44bd32;
  text-decoration: none;
`
