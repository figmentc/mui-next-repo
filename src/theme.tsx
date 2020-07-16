import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const GlobalTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFC107'
    },
    secondary: {
      main: '#FFA000'
    },
    background: {
      default: '#fff'
    },
    text: {
      primary: '#1C1C1C',
      secondary: '#ACACAC'
    }
  },
  typography: {
    fontFamily: 'Quicksand, Sans Serif',
    fontWeightLight: 500,
    fontWeightRegular: 600,
    fontWeightBold: 700,
    fontWeightMedium: 700
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#FFF8E1',
          color: '#FFC107'
        }
      }
    }
  }
})

export default GlobalTheme
