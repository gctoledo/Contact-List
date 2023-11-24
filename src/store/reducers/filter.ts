import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  search?: string
}

const initialState: FilterState = {
  search: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    handleSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    }
  }
})

export const { handleSearch } = filterSlice.actions
export default filterSlice.reducer
