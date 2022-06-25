import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as URL from 'urls'

/*  Thunks - any async actions that needs to get called before updating state */
export const getJokes = createAsyncThunk(
  'landing/getJokes',
  async () => await fetch(URL.CHUCK_NORRIS_URL).then((res) => res.json())
)

export const getImage = createAsyncThunk(
  'landing/getImage',
  async (data: { landing: { imageIdInput: number } }) => {
    const id = data.landing.imageIdInput
    return await fetch(URL.IMAGE_API_URL + `${id.toString()}`).then((res) => res.json())
  }
)

/* STATE */
const initialState = {
  name: 'landing',
  status: '',
  initialState: {
    status: '',
    inputField: "I'm already in state",
    joke: '',
    imageIdInput: '',
    imageSrc: ''
  }
}

/* Slice useSelector will consume */
export const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    inputField: (state, action) => {
      state.initialState.inputField = action.payload?.landing?.inputField
      return state
    },
    imageIdInput: (state, action) => {
      state.initialState.imageIdInput = action.payload?.landing?.imageIdInput
    }
  },
  extraReducers: (builder) => {
    // getImage
    builder.addCase(getImage.pending, (state) => {
      state.initialState.status = 'loading'
    })
    builder.addCase(getImage.fulfilled, (state, action) => {
      state.initialState.status = 'success'
      state.initialState.imageSrc = action.payload.thumbnailUrl
    })

    // getJokes
    builder.addCase(getJokes.pending, (state) => {
      state.initialState.status = 'loading'
    })
    builder.addCase(getJokes.fulfilled, (state, action) => {
      state.initialState.status = 'success'
      state.initialState.joke = action.payload.value
    })
  }
})

/*  Regular Actions , simple state update */
export const { inputField, imageIdInput } = landingSlice.actions

export default landingSlice.reducer
