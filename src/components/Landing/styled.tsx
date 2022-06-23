import { styled } from '@mui/system'
import {
  Box,
  Paper
  // Card, CardContent
} from '@mui/material'

export const LandingContainer = styled('div')(({ theme }) => {
  return {
    color: theme.palette.primary.main, // in the styled compoennts, you could also pass something like 'red' here.
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    height: '100vh'
  }
})

export const ThunkResults = styled(Paper)(({ theme }) => {
  return {
    position: 'relative',
    display: 'block',

    '& div': {
      height: '12em'
    }
  }
})

export const ThunkExamples = styled(Box)(({ theme }) => {
  return {
    display: 'flex'
  }
})

export const ThunkExampleCard = styled(Box)(({ theme }) => {
  console.log('theme', theme)
  return {
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'column',
    border: '5px solid blue',
    padding: '4em',
    verticalAlign: 'center'
  }
})
