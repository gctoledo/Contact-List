import styled, { createGlobalStyle } from 'styled-components'

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

export default GlobalStyle
