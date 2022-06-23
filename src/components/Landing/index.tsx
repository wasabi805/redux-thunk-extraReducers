import React, { FC, ChangeEvent } from 'react'
import { LandingContainer, ThunkResults, ThunkExamples } from './styled'
import {
  Typography,
  Box,
  Paper,
  Input,
  FormLabel,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material' // pull components from here, not "@material-ui/core"
import { useDispatch, useSelector } from 'react-redux'
import { inputField, getJokes } from 'reducers/LandingSlice'
import { Istate } from 'interfaces'
import ThunkCard from '../StyledComponents/ThunkCard'

const Landing: FC = () => {
  const dispatch = useDispatch()
  const landingSlice = useSelector((state: Istate) => state.landing)

  const handleInputFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    dispatch(inputField({ landing: { inputField: value } }))
  }

  const handleClickGetJoke = () => {
    dispatch(getJokes(dispatch))
  }

  const handleClickCheckbox = (e) => {
    const { value } = e.target
    console.log(value)
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
        <Box sx={{
          marginBottom: '2rem'
        }}>
          <Typography variant="h2">Welcome to React Playground</Typography>
          <Typography variant="h5">
            A basic example of wiring up redux.
          </Typography>
        </Box>

        <Box>
          <ThunkResults>
            <Box component={'div'} marginBottom={'2rem'}>
              <Paper>
                <Typography variant="body1">Displays values for state.landing.inputField</Typography>
                <p>{landingSlice.inputField}</p>
              </Paper>
            </Box>

            <Box component={'div'} marginBottom={'2rem'}>
              <Paper>
                <Typography variant="body1">A random joke will appear</Typography>
                <p>{landingSlice.joke}</p>
              </Paper>
            </Box>

            <Box component={'div'} marginBottom={'2rem'}>
              <Paper>
              <Typography variant="body1">Images appear here</Typography>
                <Box
                  sx={{
                    display: 'flex'
                  }}
                >
                  <Box component={'span'} flex={1}>
                    1
                  </Box>
                  <Box component={'span'} flex={1}>
                    1
                  </Box>
                  <Box component={'span'} flex={1}>
                    1
                  </Box>
                </Box>
              </Paper>
            </Box>
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
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onClick={handleClickCheckbox} value={'puppy'} />}
                  label="puppy"
                />
                <FormControlLabel
                  control={<Checkbox onClick={handleClickCheckbox} value={'kitten'} />}
                  label="kitten"
                />
                <FormControlLabel
                  control={<Checkbox onClick={handleClickCheckbox} value={'random'} />}
                  label="random"
                />
              </FormGroup>

              <Button size={'large'} variant="contained" color={'secondary'}>
                Show Pets
              </Button>
            </ThunkCard>
          </ThunkExamples>
        </Box>
      </Box>
    </LandingContainer>
  )
}

export default Landing
