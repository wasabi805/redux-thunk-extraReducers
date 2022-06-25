import React, { FC, ChangeEvent } from 'react'
import { LandingContainer, ThunkResults, ThunkExamples } from './styled'
import { Typography, Box, TextField, Button, InputAdornment, IconButton } from '@mui/material' // pull components from here, not "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search'
import ResultDisplay from '../StyledComponents/ResultDisplay'
import { inputField, getJokes, imageIdInput, getImage } from 'reducers/LandingSlice'
import { Istate } from 'interfaces'
import ThunkCard from '../StyledComponents/ThunkCard'
import { useAppSelector, useAppDispatch } from 'hooks/Redux'

const Landing: FC = () => {
  const dispatch = useAppDispatch()
  const landingSlice = useAppSelector((state: Istate) => state.landing)

  const handleInputFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    dispatch(inputField({ landing: { inputField: value } }))
  }

  const handleClickGetJoke = () => {
    dispatch(getJokes())
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
          <Typography variant="h5" marginBottom={'48px'}>
            Using the builder callback in extraReducers
          </Typography>
        </Box>

        <Box>
          <ThunkResults>
            <ResultDisplay
              displayType={'text'}
              heading={'Displays values for state.landing.inputField'}
              data={landingSlice.initialState.inputField}
            />

            <ResultDisplay
              displayType={'text'}
              heading={'A random joke will appear'}
              data={landingSlice.initialState.joke}
            />

            <ResultDisplay
              textStyle={{ textAlign: 'center' }}
              displayType={'image'}
              heading={'Images appear here'}
              data={landingSlice.initialState.imageSrc}
            />
          </ThunkResults>

          <ThunkExamples>
            <ThunkCard>
              <Box sx={{ padding: '0 1em' }}>
                <Typography variant="caption">Enter a value</Typography>
                <TextField
                  label={'Controlled Input'}
                  name="landing.inputField"
                  onChange={handleInputFieldChange}
                  value={landingSlice?.initialState.inputField}
                />
              </Box>
            </ThunkCard>

            <ThunkCard>
              <Typography variant="caption" marginBottom={'1em'}>
                Press button below to recieve a joke
              </Typography>
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
              <Typography variant="caption" marginBottom={'1em'}>
                Select images to display
              </Typography>

              <Box sx={{ padding: '0 1em' }}>
                <TextField
                  label="Image I.D."
                  name="landing.imageIdInput"
                  placeholder={'Range: 1 to 5000'}
                  onChange={handleSetImageIdField}
                  value={landingSlice?.initialState.imageIdInput}
                  sx={{ marginBottom: '2rem' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            handleSubmitImageId(landingSlice.initialState.imageIdInput)
                          }
                        >
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Box>
            </ThunkCard>
          </ThunkExamples>
        </Box>
      </Box>
    </LandingContainer>
  )
}

export default Landing
