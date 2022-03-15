import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link as MUILink,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { CloudinaryImage } from "react-easy-cloudinary"
import { Link } from "remix"
import { pages } from "../pages"

export default function Index() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <>
      <Typography variant="h1" marginBottom={2}>
        Portfolio
      </Typography>
      <Grid container spacing={4}>
        {pages
          .filter((page) => page.displayOnHome !== false)
          .map((page) => (
            <Grid key={page.title} item xs={12} sm={6} md={4} lg={3}>
              <MUILink
                component={Link}
                to={page.route}
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "none",
                  },
                }}
              >
                <Card
                  elevation={6}
                  sx={{
                    "&:hover": {
                      outline: `4px solid ${theme.palette.primary.main}`,
                    },
                  }}
                >
                  <CardMedia>
                    <CloudinaryImage
                      publicId={`claybell-net/${page.menuImage}`}
                      fullWidth
                      resize="fill"
                      width={isMobile ? 450 : 275}
                      height={isMobile ? 200 : 140}
                    />
                  </CardMedia>
                  <CardContent sx={{ minHeight: !isMobile ? 180 : undefined }}>
                    <strong>{page.title}</strong>
                    <Typography>{page.description}</Typography>
                  </CardContent>
                </Card>
              </MUILink>
            </Grid>
          ))}
      </Grid>
    </>
  )
}
