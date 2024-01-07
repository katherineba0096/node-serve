// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const Button = {
  variants: {
      outline: {
          borderRadius: '0',
          textTransform: 'uppercase',
          fontWeight: 'light',
          letterSpacing: '1px',
          color:'blue',
          _hover: {
              color: 'black'
          }

      }
  }
}
// 3. extend the theme
const theme = extendTheme({ config, Button })

export default theme