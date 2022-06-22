import { styled } from '@mui/system'

export const LandingContainer = styled('div')(({ theme }) => {
  return {
    color: theme.palette.primary.main, // in the styled compoennts, you could also pass something like 'red' here.
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    position: 'relative',
    border: '1px solid lime',
    height: '100vh',
    width: '100%'
  }
})
