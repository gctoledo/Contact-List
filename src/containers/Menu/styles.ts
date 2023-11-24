import styled from 'styled-components'
import { ContentContainer } from '../../styles'
import { Link } from 'react-router-dom'
import variables from '../../styles/variables'

type ButtonProps = {
  add: boolean
}

export const MenuContainer = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px 16px 16px;
  margin-bottom: 32px;
`
export const Button = styled(Link)<ButtonProps>`
  font-size: ${({ add }) => (add ? '24px' : '14px')};
  color: #fff;
  font-weight: bold;
  padding: 4px 12px;
  border: none;
  cursor: pointer;
  border-radius: ${({ add }) => (add ? '50%' : '10px')};
  background-color: ${({ add }) => (add ? variables.green : variables.default)};
  text-decoration: none;
`
