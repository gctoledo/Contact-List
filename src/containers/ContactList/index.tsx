import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'
import { ContactsContainer } from './styles'

const ContactList = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts.itens)
  const { search } = useSelector((state: RootReducer) => state.filter)

  const filterContacts = () => {
    let filteredContacts = contacts

    if (search !== undefined) {
      filteredContacts = contacts.filter(
        (contact) =>
          contact.name.toLowerCase().search(search.toLowerCase()) >= 0
      )
    }

    return filteredContacts
  }

  const filteredContacts = filterContacts()

  return (
    <ContactsContainer>
      {filteredContacts.map((contact) => (
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
