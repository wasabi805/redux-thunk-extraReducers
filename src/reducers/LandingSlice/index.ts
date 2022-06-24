import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ILandingState, IinitialLandingState, IAction, IthunkAction } from 'interfaces'
import * as URL from 'urls'

/*  Thunks - any async actions that needs to get called before updating state */
export const getJokes = createAsyncThunk(
  'landing/getJokes',
  async () => await fetch(URL.CHUCK_NORRIS_URL).then((res) => res.json())
)

export const getImage = createAsyncThunk(
  'landing/getImage',
  async (data: { landing: { imageIdInput: number } }) => {
    const id = data?.landing?.imageIdInput
    return await fetch(URL.IMAGE_API_URL + `${id.toString()}`).then((res) => res.json())
  }
)

const initialState: ILandingState = {
  name: 'landing',
  initialState: {
    status: '',
    inputField: 'foo-bar',
    joke: '',
    imageIdInput: '',
    imageSrc: ''
  },
  reducers: {
    inputField: (state: ILandingState, action: IAction): IinitialLandingState => ({
      ...state,
      inputField: action.payload?.landing?.inputField
    }),
    imageIdInput: (state: ILandingState, action: IAction): IinitialLandingState => ({
      ...state,
      imageIdInput: action.payload?.landing?.imageIdInput
    })
  },

  /*  Update state in extraReducers after thunk is resolved */
  extraReducers: {
    [getJokes.pending.toString()]: (state: IinitialLandingState): void => {
      state.status = 'loading'
    },
    [getJokes.fulfilled.toString()]: (state: IinitialLandingState, action: IthunkAction): void => {
      state.status = 'success'
      state.joke = action.payload.value
    },
    [getImage.fulfilled.toString()]: (state: IinitialLandingState, action: IthunkAction): void => {
      state.status = 'success'
      state.imageSrc = action.payload.thumbnailUrl
      state.imageIdInput = ''
    }
  }
}

/* Slice useSelector will consume */
export const landingSlice = createSlice(initialState)

/*  Regular Actions , simple state update */
export const { inputField, imageIdInput } = landingSlice.actions

export default landingSlice.reducer
