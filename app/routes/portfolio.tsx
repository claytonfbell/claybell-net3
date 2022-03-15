import GitHubIcon from "@mui/icons-material/GitHub"
import HttpIcon from "@mui/icons-material/Http"
import {
  alpha,
  Box,
  Button,
  Grid,
  Paper,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material"
import { CloudinaryImage } from "react-easy-cloudinary"
import { Outlet, useLocation } from "react-router-dom"
import { MetaFunction } from "remix"
import { GridImage, pages } from "../pages"
import { TechStack } from "../TechStack"

export let meta: MetaFunction = () => {
  return {
    title: "Portfolio",
    description: "Software Engineer",
  }
}

export default function Portfolio() {
  const page = usePage()
  const gridImages: GridImage[] = (page?.images || []).map((x) => {
    if (typeof x === "string") {
      return { file: x, xs: 12 }
    } else {
      return x
    }
  })
  const theme = useTheme()

  return (
    <Paper>
      <Box
        padding={4}
        sx={{
          "& h2": {
            fontSize: 24,
            fontWeight: "normal",
          },
          "& a": {
            color: theme.palette.primary.main,
          },
          "& code:not(.language-bash):not(.language-tsx),& pre": {
            borderRadius: 1,
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor: alpha(theme.palette.primary.main, 0.15),
            padding: 0.8,
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          },
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={9} lg={10}>
            <Typography variant="h1" marginBottom={2}>
              {page?.title}
            </Typography>

            {page?.website !== undefined ? (
              <Tooltip title="Try it out!">
                <Button
                  startIcon={<HttpIcon />}
                  color="primary"
                  variant="text"
                  href={page?.website}
                  target="_blank"
                >
                  {page.website.replace(/https:\/\//g, "")}
                </Button>
              </Tooltip>
            ) : null}
            {page?.gitHub !== undefined ? (
              <Tooltip title="Source Code">
                <Button
                  startIcon={<GitHubIcon />}
                  color="primary"
                  variant="text"
                  href={page?.gitHub}
                  target="_blank"
                >
                  {page.gitHub
                    .replace(/https:\/\//g, "")
                    .replace(/\.git$/g, "")}
                </Button>
              </Tooltip>
            ) : null}

            <Outlet />

            <Grid container spacing={1} marginTop={3}>
              {gridImages.map(({ file, ...gridProps }) => (
                <Grid key={file} item {...gridProps}>
                  <CloudinaryImage
                    publicId={`claybell-net/${file}`}
                    fullWidth
                    width={2000}
                    resize="scale"
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={3} lg={2} sx={{ textAlign: "right" }}>
            <TechStack />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

export function usePage() {
  const { pathname } = useLocation()
  return pages.find((x) => x.route === pathname)
}
