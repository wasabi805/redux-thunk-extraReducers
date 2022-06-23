import { createTheme } from '@mui/material/styles'
import { purple, green, grey } from '@mui/material/colors'

export interface Itheme {
  palette: {
    primary?: {
      main?: string
    }
    secondary?: {
      main?: string
    }
  }
  typography?: {
    fontSize?: number
    body1?: {
      color?: string
    }
    h1?: {
      color?: string
    }

    h2?: {
      color?: string
    }
  }
}

/** MUI THEME  */
/* Sets the default styling attrs and can be accessed in styled components : See the LandingContainer component  */
const muiTheme: Itheme = createTheme({
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: { minWidth: '150px', maxWidth: '150px' }
    //   }
    // }
  },

  palette: {
    primary: {
      main: grey[500],
      contrastText: '#fff'
    },
    secondary: {
      main: green[500],
      contrastText: '#fff'
    }
  },
  typography: {
    fontSize: 12,
    body1: {
      color: grey[500]
    },
    h1: {
      color: purple[500]
    },

    h2: {
      color: green[500]
    }
  }
})

export default muiTheme
