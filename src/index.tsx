import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import CssBaseline from '@mui/material/CssBaseline'
import MUIThemeProvider from './context/ThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <MUIThemeProvider>
      <CssBaseline enableColorScheme />
      <App />
    </MUIThemeProvider>
  </React.StrictMode>
)
