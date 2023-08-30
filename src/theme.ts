import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../tailwind.config'

type TailwindTheme = typeof tailwindConfig.theme & {
  colors: {
    background: '#131319'

    primary: {
      100: '#CEFFE3'
      500: '#00B04C'
    }

    secondary: {
      100: '#A3A3A3'
      200: '#1F1F1F'
      300: '#1E1E1E'
    }
  }
}

const tailwindResolvedConfig = resolveConfig(tailwindConfig)

export const theme = tailwindResolvedConfig.theme as TailwindTheme
