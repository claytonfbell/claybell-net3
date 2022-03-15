import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import { usePage } from "./routes/portfolio"
import TechItem from "./TechItem"
import { technologies } from "./technologies"

export function TechStack() {
  const page = usePage()
  const techs = technologies.filter((x) => page?.stack.includes(x.name))
  const theme = useTheme()
  const isSmDown = useMediaQuery(theme.breakpoints.down("md"))
  return techs.length > 0 ? (
    <Box
      style={
        !isSmDown
          ? {
              display: "inline-block",
              width: 90,
              textAlign: "right",
            }
          : undefined
      }
    >
      <Typography variant="caption" component="div">
        Stack Used
      </Typography>
      {techs.map((t) => (
        <TechItem key={t.name} technology={t} placement="left" />
      ))}
    </Box>
  ) : null
}
