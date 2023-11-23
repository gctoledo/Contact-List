import { useDispatch } from 'react-redux'
import { Input } from '../../styles'
import { ActionBar, Button, ContactCard, Infos, Perfil } from './styles'
import { remove, edit } from '../../store/reducers/contact'
import { useState } from 'react'

type Props = {
  name: string
  email: string
  number: string
  id: number
  photo: string
}

const Contact = ({
  name: originalName,
  email: originalEmail,
  number: originalNumber,
  id,
  photo
}: Props) => {
  const dispatch = useDispatch()

  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(originalName)
  const [number, setNumber] = useState(originalEmail)
  const [email, setEmail] = useState(originalNumber)

  const saveEdits = () => {
    dispatch(
      edit({
        id,
        name,
        number,
        email,
        photo
      })
    )
    setEditing(false)
  }

  return (
    <ContactCard editing={editing ? 'true' : 'false'}>
      <Perfil>
        <img src={photo} />
        <Infos>
          <Input
            type="text"
            placeholder="Nome do contato"
            value={name}
            disabled={!editing}
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <Input
            type="text"
            placeholder="Número do contato"
            value={number}
            disabled={!editing}
            onChange={(e) => setNumber(e.target.value)}
          ></Input>
          <Input
            type="email"
            placeholder="E-mail do contato"
            value={email}
            disabled={!editing}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </Infos>
      </Perfil>
      {editing ? (
        <ActionBar>
          <Button type="button" types="save" onClick={() => saveEdits()}>
            Salvar
          </Button>
          <Button
            type="button"
            types="cancel"
            onClick={() => setEditing(false)}
          >
            Cancelar
          </Button>
        </ActionBar>
      ) : (
        <ActionBar>
          <Button type="button" types="edit" onClick={() => setEditing(true)}>
            Editar
          </Button>
          <Button
            type="button"
            types="cancel"
            onClick={() => dispatch(remove(id))}
          >
            Deletar
          </Button>
        </ActionBar>
      )}
    </ContactCard>
  )
}

export default Contact
