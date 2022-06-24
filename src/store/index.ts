import { configureStore } from '@reduxjs/toolkit'
import landingReducer from 'reducers/LandingSlice'

const store = configureStore({
  reducer: {
    landing: landingReducer
  }
})

export type AppDispatch = typeof store.dispatch

export default store
