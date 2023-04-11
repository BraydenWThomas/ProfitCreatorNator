import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider, createTheme } from '@mui/material'

const muiTheme = createTheme();

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={muiTheme}>
    <Component {...pageProps} />
</ThemeProvider >
}
