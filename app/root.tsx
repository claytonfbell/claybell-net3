import DescriptionIcon from "@mui/icons-material/Description"
import EmailIcon from "@mui/icons-material/Email"
import GitHub from "@mui/icons-material/GitHub"
import PhoneIcon from "@mui/icons-material/Phone"
import TwitterIcon from "@mui/icons-material/Twitter"
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { DarkModeProvider, DarkModeToggle } from "material-ui-pack"
import { useEffect } from "react"
import { CloudinaryProvider } from "react-easy-cloudinary"
import Gravatar from "react-gravatar"
import TagManager from "react-gtm-module"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import {
  Link as RemixLink,
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  MetaFunction,
  Scripts,
  useCatch,
} from "remix"
import Logo from "~/Logo"
import { pages } from "./pages"
import { useKeyboard } from "./routes/keyboards"
import { SiteTheme } from "./SiteTheme"
import stylesUrl from "./styles/global.css"

const tagManagerArgs = {
  gtmId: "GTM-MBR2ZXR",
}

export let meta: MetaFunction = () => {
  return {
    title: "Clayton Bell - Software Engineer",
    description: "Software Engineer",
  }
}

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }]
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta
          name="og:image"
          content="https://res.cloudinary.com/doqodlq85/image/upload/v1635223488/claybell-net/resume/stack.png"
        />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        <DarkModeProvider preferDarkMode>
          <SiteTheme>{children}</SiteTheme>
        </DarkModeProvider>
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}

export default function App() {
  const twitter = "https://twitter.com/claytonfbell"
  const gitHub = "https://github.com/claytonfbell"

  const theme = useTheme()
  const isXsDown = useMediaQuery(theme.breakpoints.down("sm"))
  const { pathname } = useLocation()
  const keyboard = useKeyboard()

  const navigate = useNavigate()

  return (
    <Document>
      <Container sx={{ marginTop: 2 }}>
        <CssBaseline />
        <Box
          sx={{
            "@media print": {
              display: "none",
            },
          }}
        >
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <RemixLink to="/resume">
                <Gravatar
                  style={{
                    marginTop: theme.spacing(2),
                    marginRight: theme.spacing(2),
                    borderRadius: `50%`,
                  }}
                  size={isXsDown ? 36 : 54}
                  email={`claytonfbell@gmail.com`}
                />
              </RemixLink>
              <RemixLink to="/">
                <Logo width={isXsDown ? 150 : 250} />
              </RemixLink>
            </Grid>
            <Grid item>
              {isXsDown ? (
                <>
                  <IconButton href={twitter} color="primary">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton href={gitHub} color="primary">
                    <GitHub />
                  </IconButton>
                </>
              ) : null}
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            {isXsDown ? (
              <>
                <Grid item xs={12}>
                  <Button
                    variant="text"
                    onClick={() => navigate("/resume")}
                    startIcon={<DescriptionIcon />}
                  >
                    Resumé
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="text"
                    href="tel:1-971-285-5666"
                    startIcon={<PhoneIcon />}
                  >
                    (971) 285-5666
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="text"
                    href="mailto: claytonfbell@gmail.com"
                    startIcon={<EmailIcon />}
                  >
                    claytonfbell@gmail.com
                  </Button>
                </Grid>
              </>
            ) : (
              <>
                <Button
                  variant="text"
                  onClick={() => navigate("/resume")}
                  startIcon={<DescriptionIcon />}
                >
                  Resumé
                </Button>
                <Button
                  sx={{ marginRight: !isXsDown ? 1 : undefined }}
                  variant="text"
                  href="tel:1-971-285-5666"
                  startIcon={!isXsDown ? <PhoneIcon /> : undefined}
                >
                  (971) 285-5666
                </Button>
                <Button
                  sx={{ marginRight: !isXsDown ? 1 : undefined }}
                  variant="text"
                  href="mailto: claytonfbell@gmail.com"
                  startIcon={!isXsDown ? <EmailIcon /> : undefined}
                >
                  claytonfbell@gmail.com
                </Button>
                <Button
                  sx={{ marginRight: 1 }}
                  variant="text"
                  href={twitter}
                  startIcon={<TwitterIcon />}
                >
                  @claytonfbell
                </Button>
                <Button
                  sx={{ marginRight: 1 }}
                  variant="text"
                  href={gitHub}
                  startIcon={<GitHub />}
                >
                  github.com/claytonfbell
                </Button>
              </>
            )}
          </Grid>

          {pathname !== "/" ? (
            <Breadcrumbs sx={{ marginTop: 2 }}>
              <Link component={RemixLink} to="/">
                Home
              </Link>
              {keyboard !== undefined ? (
                <Link component={RemixLink} to="/keyboards">
                  Keyboards
                </Link>
              ) : null}
              {keyboard !== undefined ? (
                <Typography color="text.primary">{keyboard.name}</Typography>
              ) : null}
              {keyboard === undefined ? (
                <Typography color="text.primary">
                  {pages.find((x) => x.route === pathname)?.title}
                </Typography>
              ) : null}
            </Breadcrumbs>
          ) : null}
        </Box>
        <CloudinaryProvider cloudinaryId="doqodlq85">
          <Box
            sx={{
              marginTop: 2,
            }}
          >
            <Outlet />
          </Box>
        </CloudinaryProvider>
        <Box
          sx={{
            marginTop: 8,
            "@media print": {
              display: "none",
            },
          }}
        >
          <DarkModeToggle />
        </Box>
      </Container>
      <footer>
        {/* <p>This page was rendered at {data.date.toLocaleString()}</p> */}
      </footer>
    </Document>
  )
}

export function CatchBoundary() {
  let caught = useCatch()

  switch (caught.status) {
    case 401:
    case 404:
      return (
        <Document title={`${caught.status} ${caught.statusText}`}>
          <h1>
            {caught.status} {caught.statusText}
          </h1>
        </Document>
      )

    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`
      )
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)

  return (
    <Document title="Uh-oh!">
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </Document>
  )
}
