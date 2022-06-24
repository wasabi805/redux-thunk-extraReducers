import React, { FC } from 'react'
import { Box, Paper, Typography } from '@mui/material' // pull components from here, not "@material-ui/core"

interface T {
  displayType: string
  heading?: string
  data?: any
}

const ResultDisplay: FC<T> = ({ displayType, heading, data }) => {
  return (
    <Box component={'div'} marginBottom={'2rem'}>
      <Paper>
        <Typography variant="body1">{heading}</Typography>

        {displayType === 'text' && <p>{data}</p>}
        {displayType === 'image' && <img src={data}></img>}
      </Paper>
    </Box>
  )
}

export default ResultDisplay
