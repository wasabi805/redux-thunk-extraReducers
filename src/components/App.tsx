import React from 'react'
import Landing from 'components/Landing'
import { Box } from '@mui/material' // pull components from here, not "@material-ui/core"

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Landing />
    </Box>
  )
}

export default App
