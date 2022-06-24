import React, { FC, ChangeEvent } from 'react'
import { LandingContainer, ThunkResults, ThunkExamples } from './styled'
import { Typography, Box, Input, FormLabel, Button } from '@mui/material' // pull components from here, not "@material-ui/core"
import ResultDisplay from '../StyledComponents/ResultDisplay'
import { useDispatch, useSelector } from 'react-redux'
import { inputField, getJokes, imageIdInput, getImage } from 'reducers/LandingSlice'
import { Istate } from 'interfaces'
import { AppDispatch } from 'store'
import ThunkCard from '../StyledComponents/ThunkCard'

const Landing: FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const landingSlice = useSelector((state: Istate) => state.landing)

  const handleInputFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    dispatch(inputField({ landing: { inputField: value } }))
  }

  const handleClickGetJoke = () => {
    dispatch(getJokes(dispatch))
  }

  const handleSetImageIdField = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    dispatch(imageIdInput({ landing: { imageIdInput: value } }))
  }

  const handleSubmitImageId = (id: number) => {
    dispatch(getImage({ landing: { imageIdInput: id } }))
  }

  return (
    <LandingContainer>
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
          padding: '3rem'
        }}
      >
        <Box
          sx={{
            marginBottom: '2rem'
          }}
        >
          <Typography variant="h2">Welcome to React Playground</Typography>
          <Typography variant="h5">A basic example of wiring up redux.</Typography>
        </Box>

        <Box>
          <ThunkResults>
            <ResultDisplay
              displayType={'text'}
              heading={'Displays values for state.landing.inputField'}
              data={landingSlice.inputField}
            />

            <ResultDisplay
              displayType={'text'}
              heading={'A random joke will appear'}
              data={landingSlice.joke}
            />

            <ResultDisplay
              displayType={'image'}
              heading={'Images appear here'}
              data={landingSlice.imageSrc}
            />
          </ThunkResults>

          <ThunkExamples>
            <ThunkCard>
              <FormLabel>Enter a Value</FormLabel>
              <Input
                name="landing.inputField"
                onChange={handleInputFieldChange}
                value={landingSlice?.inputField}
              />
            </ThunkCard>

            <ThunkCard>
              <Typography variant="caption">Press button below to recieve a joke</Typography>
              <Button
                size={'large'}
                variant="contained"
                color={'secondary'}
                onClick={handleClickGetJoke}
              >
                Get Joke
              </Button>
            </ThunkCard>

            <ThunkCard>
              <Typography variant="caption">Select images to display</Typography>
              <FormLabel>Enter a number from 1 -5000</FormLabel>
              <Input
                name="landing.imageIdInput"
                onChange={handleSetImageIdField}
                value={landingSlice?.imageIdInput}
              />
              <Button
                size={'large'}
                variant="contained"
                color={'secondary'}
                onClick={() => handleSubmitImageId(landingSlice.imageIdInput)}
              >
                Get Image
              </Button>
            </ThunkCard>
          </ThunkExamples>
        </Box>
      </Box>
    </LandingContainer>
  )
}

export default Landing
