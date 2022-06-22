import React from 'react'
import { LandingContainer } from '../Landing/styled'
import { Typography, Box, Button } from '@mui/material' // pull components from here, not "@material-ui/core"

const Landing = () => {
  return (
    <LandingContainer>
      <Box position={'relative'} textAlign="center" width={'100vw'}>
        <Typography variant="h2">Welcome to React Playground</Typography>
        <Typography variant="p">Check out the muiTheme file</Typography>
      </Box>

      <Box>
        <Button color="secondary" variant="contained" size="small">
          Click Me
        </Button>
      </Box>
    </LandingContainer>
  )
}

export default Landing
