import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import * as URL from 'urls'

export const getJokes = createAsyncThunk('landing/getJokes', async (dispatch) => {
  return await fetch(URL.CHUCK_NORRIS_URL).then((res) => res.json())
})

export const landingSlice = createSlice({
  name: 'landing',
  initialState: {
    status: '',
    inputField: 'foo-bar',
    joke: ''
  },
  reducers: {
    inputField: (state, action) => {
      return {
        ...state,
        inputField: action.payload?.landing?.inputField
      }
    }
  },
  extraReducers: {
    [getJokes.pending.toString()]: (state: any, action: any) => {
      state.status = 'loading'
    },
    [getJokes.fulfilled.toString()]: (state: any, action: any) => {
      console.log(action)

      state.status = 'success'
      state.joke = action.payload.value
    }
  }
})

export const { inputField } = landingSlice.actions

export default landingSlice.reducer
