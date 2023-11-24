import { FormEvent, useState } from 'react'
import { ContentContainer, Infos } from '../../styles'
import { AddButton, AddInput, FormS } from './styles'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/contact'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [photo, setPhoto] = useState('')

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const addContact = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      add({
        name,
        number,
        email,
        photo
      })
    )
    navigate('/')
  }

  return (
    <ContentContainer>
      <FormS onSubmit={(e) => addContact(e)}>
        <Infos>
          <AddInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome"
          ></AddInput>
          <AddInput
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="text"
            placeholder="Número de telefone"
          ></AddInput>
          <AddInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="E-mail"
          ></AddInput>
          <AddInput
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            type="text"
            placeholder="Link da foto de perfil"
          ></AddInput>
        </Infos>

        <AddButton type="submit" types="save">
          Cadastrar
        </AddButton>
      </FormS>
    </ContentContainer>
  )
}

export default Form
