import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'
import { ContactsContainer } from './styles'

const ContactList = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts.itens)

  return (
    <ContactsContainer>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          email={contact.email}
          number={contact.number}
          name={contact.name}
          id={contact.id}
          photo={contact.photo}
        />
      ))}
    </ContactsContainer>
  )
}

export default ContactList
