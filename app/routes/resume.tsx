import PrintIcon from "@mui/icons-material/Print"
import {
  Box,
  Button,
  Grid,
  Link as MUILink,
  Paper,
  Typography,
  useTheme,
} from "@mui/material"
import { MetaFunction } from "remix"
import { employment } from "~/employment"
import TechItem from "~/TechItem"
import { technologies } from "~/technologies"

export let meta: MetaFunction = () => {
  return {
    title: "Clayton Bell - Software Engineer",
    description: "Software Engineer",
  }
}

export default function Resume() {
  const theme = useTheme()

  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography sx={{ fontWeight: "bold", fontSize: 36 }}>
            Clayton Bell
          </Typography>

          <Typography>Software Engineer • Portland Oregon</Typography>

          <Typography>Experienced, Productive, Creative</Typography>
        </Grid>
        <Grid
          item
          sx={{
            "@media print": {
              display: "none",
            },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.print()}
            startIcon={<PrintIcon />}
          >
            Print
          </Button>
        </Grid>
      </Grid>

      <Paper sx={{ padding: 2, marginTop: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Front-End
            </Typography>
            {technologies
              .filter((x) => x.group === "Front-End")
              .map((x) => (
                <TechItem key={x.name} technology={x} />
              ))}
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Backend &amp; Dev Ops
            </Typography>
            {technologies
              .filter((x) => x.group === "Backend" || x.group === "DevOps")
              .map((x) => (
                <TechItem key={x.name} technology={x} />
              ))}
          </Grid>
        </Grid>
      </Paper>

      {[...employment].reverse().map((e) => (
        <Box key={e.employer} sx={{ marginTop: 2 }}>
          <Typography variant="h5" component="h2">
            {e.employer}
          </Typography>
          <Typography marginTop={1}>
            <strong>
              {e.position} {e.range}
            </strong>
          </Typography>
          <Typography marginTop={1}>{e.text}</Typography>
          {e.url !== undefined && (
            <MUILink target="_blank" href={e.url}>
              {e.url.replace(/^https?:\/\//g, "")}
            </MUILink>
          )}
        </Box>
      ))}

      <Box
        sx={{
          width: "100%",
          marginTop: 3,
          textAlign: "center",
          ["@media screen"]: {
            display: "none",
          },
          position: "absolute",
          bottom: 28,
          left: "-.25in",
        }}
      >
        claytonfbell@gmail.com • (971) 285-5666 • claybell.net
      </Box>
    </>
  )
}
