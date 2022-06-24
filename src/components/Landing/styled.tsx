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
      height: '13em',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'scroll',
      [theme.breakpoints.up('sm')]: {
        maxWidth: '54em'
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: '54em'
        // minWidth: '50em'
      },

      '& p': {
        textAlign: 'initial',

        [theme.breakpoints.up('xs')]: {
          margin: '0 2rem'
        },
        [theme.breakpoints.up('sm')]: {
          margin: '0 8rem'
        }
      }
    }
  }
})

export const ThunkExamples = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    height: '8rem',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
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
