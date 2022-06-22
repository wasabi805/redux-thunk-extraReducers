import { configureStore } from '@reduxjs/toolkit'
import landingReducer from 'reducers/LandingSlice'

export default configureStore({
  reducer: {
    landing: landingReducer
  }
})
