import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from '../store/reducers/contact'
import filterReducer from '../store/reducers/filter'

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
