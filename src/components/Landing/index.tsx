import React, { FC, ChangeEvent } from 'react'
import { LandingContainer } from './styled'
import { Typography, Box, Input, FormLabel } from '@mui/material' // pull components from here, not "@material-ui/core"
import { useDispatch, useSelector } from 'react-redux'
import { inputField } from 'reducers/LandingSlice'
import { Istate } from 'interfaces'

const Landing: FC = () => {
  const dispatch = useDispatch()
  const landingSlice = useSelector((state: Istate) => state.landing)

  const handleInputFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    dispatch(inputField({ landing: { inputField: value } }))
  }

  return (
    <LandingContainer>
      <Box position={'relative'} textAlign={'center'} width={'100vw'}>
        <Typography variant="h2">Welcome to React Playground</Typography>
        <Typography variant="h5">
          A basic example of wiring up redux. The input below is controlled input
        </Typography>
      </Box>

      <Box position={'relative'} display={'flex'} flexDirection={'column'}>
        <FormLabel>state.landing.inputField</FormLabel>
        <Input
          name="landing.inputField"
          onChange={handleInputFieldChange}
          value={landingSlice?.inputField}
        />
      </Box>
    </LandingContainer>
  )
}

export default Landing
