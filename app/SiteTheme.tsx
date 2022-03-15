import { darken, ThemeProvider, useTheme } from "@mui/material"
import { useDarkMode } from "material-ui-pack"
import React, { useEffect } from "react"
import { useKeyboard } from "./routes/keyboards"
import { usePage } from "./routes/portfolio"

const BLUE = "#27aae1"

export function SiteTheme(props: { children: React.ReactNode }) {
  const theme = useTheme()
  const { createMuiThemeWithDarkMode, darkMode } = useDarkMode()
  const siteThem = createMuiThemeWithDarkMode({
    typography: {
      h1: {
        fontSize: 36,
      },
    },
    palette: {
      primary: {
        main: darkMode ? BLUE : darken(BLUE, 0.25),
      },
      ...(!darkMode
        ? {
            background: {
              default: "#cdcdcd",
            },
          }
        : {}),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "@page": {
            margin: 0,
          },
          "@media only print": {
            body: {
              margin: 0,
              padding: ".25in",
              backgroundColor: "#ffffff",
              minHeight: "10in",
              color: theme.palette.text.primary,
            },
          },
          html: {
            margin: 0,
          },
        },
      },
      MuiTooltip: {
        defaultProps: { arrow: true },
        styleOverrides: {
          tooltip: {
            fontSize: 18,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  })

  const page = usePage()
  const keyboard = useKeyboard()
  useEffect(() => {
    if (keyboard !== undefined) {
      document.title = keyboard.name
    } else if (page !== undefined) {
      document.title = page.title
    } else {
      document.title = "Clayton Bell - Software Engineer"
    }
  }, [page, keyboard])

  return <ThemeProvider theme={siteThem}>{props.children}</ThemeProvider>
}
