import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

type ButtonProps = {
  types?: 'save' | 'cancel' | undefined
}

const setButtonColor = (types: string | undefined) => {
  let color: string

  switch (types) {
    case 'save':
      color = variables.green
      break
    case 'cancel':
      color = variables.red
      break
    default:
      color = variables.default
      break
  }
  return color
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body {
  padding-bottom: 24px;
}
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const ContentContainer = styled.div`
  padding: 16px;
  background-color: #fcfcfc;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Input = styled.input`
  display: block;
  padding: 8px;
  font-size: 16px;
  border: none;
  background-color: transparent;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
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

export default GlobalStyle
