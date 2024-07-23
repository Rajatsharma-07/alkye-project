import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


type Props = {
  children: React.ReactNode;
};
export default function ThemeProviders({ children }: Props) {

  const theme = createTheme({
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "20px",
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            background: 'black',
            borderRadius: '8px',
            color: 'whitesmoke',
            textTransform: 'none',
            padding: '10px 30px',
            fontWeight: 'bold',
            '&:hover': {
              background: 'whitesmoke',
              color: 'black',
              fontWeight: 'bold',
            },
          }
        }
      },
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}