import { styled } from '@mui/system'

export const LandingContainer = styled('div')(({ theme }) => {
  console.log('components can use the muiTheme object as well for css attrs', theme)
  return {
    color: theme.palette.primary.main, // in the styled compoennts, you could also pass something like 'red' here.
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    position: 'relative',
    border: '1px solid lime',
    height: '80vw',
    width: '100%'
  }
})
