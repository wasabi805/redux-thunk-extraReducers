import React from 'react'
import { Card, CardContent } from '@mui/material' // pull components from here, not "@material-ui/core"

const ThunkCard = ({ children }) => {
  return (
    <>
      <Card
        sx={{
          flex: '1'
        }}
      >
        <CardContent
          sx={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {children}
        </CardContent>
      </Card>
    </>
  )
}

export default ThunkCard
