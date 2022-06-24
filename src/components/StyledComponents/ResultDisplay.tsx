import React, { FC } from 'react'
import {
  // Box,
  Paper,
  Typography
} from '@mui/material' // pull components from here, not "@material-ui/core"

interface T {
  displayType: string
  heading?: string
  data?: any
  textStyle?: any
}

const ResultDisplay: FC<T> = ({ displayType, heading, data, textStyle }) => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          margin: '10px 0'
        }}
      >
        <Typography variant="body1" style={textStyle}>
          {heading}
        </Typography>

        {displayType === 'text' && <p>{data}</p>}
        {displayType === 'image' && (
          <span className={'display-image'}>
            {' '}
            <img src={data}></img>
          </span>
        )}
      </Paper>
    </>
  )
}

export default ResultDisplay
