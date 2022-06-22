import { createSlice } from '@reduxjs/toolkit'
export const landingSlice = createSlice({
  name: 'landing',
  initialState: {
    inputField: 'foo-bar'
  },
  reducers: {
    inputField: (state, action) => {
      console.log('what is action from the reducer', action)
      return {
        ...state,
        inputField: action.payload?.landing?.inputField
      }
    }
  }
})

export const { inputField } = landingSlice.actions

export default landingSlice.reducer
