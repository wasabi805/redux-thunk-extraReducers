import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import CssBaseline from '@mui/material/CssBaseline'
import MUIThemeProvider from './context/ThemeProvider'
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MUIThemeProvider>
        <CssBaseline enableColorScheme />
        <App />
      </MUIThemeProvider>
    </Provider>
  </React.StrictMode>
)
