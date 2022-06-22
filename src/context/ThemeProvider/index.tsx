import React, { ReactNode } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import muiTheme from '../../styles/MUITheme'

interface IThemeProvider {
  children: ReactNode
}

export default function MUIThemeProvider(props: IThemeProvider) {
  return <ThemeProvider theme={muiTheme}>{props.children}</ThemeProvider>
}
