import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: [
    {
      id: 1,
      name: 'Gabriel',
      number: '(00) 0000-0000',
      email: 'abc@abc.com',
      photo: 'https://i.ibb.co/xM961wP/321556657089211.webp'
    },
    {
      id: 2,
      name: 'Maria',
      number: '(11) 1111-1111',
      email: 'abc@abc.com',
      photo: 'https://i.ibb.co/xM961wP/321556657089211.webp'
    },
    {
      id: 3,
      name: 'Leonardo',
      number: '(22) 2222-2222',
      email: 'abc@abc.com',
      photo: 'https://i.ibb.co/xM961wP/321556657089211.webp'
    },
    {
      id: 4,
      name: 'Marcos',
      number: '(33) 3333-3333',
      email: 'abc@abc.com',
      photo: 'https://i.ibb.co/xM961wP/321556657089211.webp'
    },
    {
      id: 5,
      name: 'Ricardo',
      number: '(44) 4444-4444',
      email: 'abc@abc.com',
      photo: 'https://i.ibb.co/xM961wP/321556657089211.webp'
    },
    {
      id: 6,
      name: 'Matheus',
      number: '(55) 5555-5555',
      email: 'abc@abc.com',
      photo: 'https://i.ibb.co/xM961wP/321556657089211.webp'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'Contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contact) => contact.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (contact) => contact.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
      }
    },
    add: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contactCheck = state.itens.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (contactCheck) {
        alert('Contato já cadastrado!')
      } else {
        const lastContact = state.itens[state.itens.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.itens.push(newContact)
      }
    }
  }
})

export const { remove, edit, add } = contactsSlice.actions
export default contactsSlice.reducer
