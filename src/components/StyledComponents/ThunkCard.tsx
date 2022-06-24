import React from 'react'
import { Paper } from '@mui/material' // pull components from here, not "@material-ui/core"

const ThunkCard = ({ elevation, children }) => {
  return (
    <Paper
      elevation={1}
      sx={{
        margin: '10px',
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
      }}
    >
      {children}
    </Paper>
  )
}

export default ThunkCard
