import {
  Button,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  useTheme,
} from "@mui/material"
import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import { Technology } from "./technologies"

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#222222",
    color: "white",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(14),
    minHeight: 64,
    minWidth: 250,
    padding: 18,
    "& h1": {
      fontSize: 18,
    },
    "& a": {
      color: theme.palette.primary.main,
    },
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#222222",
    fontSize: theme.typography.pxToRem(18),
  },
}))

interface Props {
  technology: Technology
  placement?:
    | "bottom"
    | "left"
    | "right"
    | "top"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start"
}
export default function TechItem(props: Props) {
  const t = props.technology
  const theme = useTheme()

  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <HtmlTooltip
        title={<TechContent technology={t} />}
        placement={props.placement}
        arrow
      >
        <IconButton onClick={() => setOpen(true)} aria-label={t.name}>
          {t.icon}
        </IconButton>
      </HtmlTooltip>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="xs"
      >
        <DialogContent>
          <Box
            sx={{
              "& h1": {
                fontSize: 18,
              },
              "& a": {
                color: theme.palette.primary.main,
              },
            }}
          >
            <TechContent technology={t} />
          </Box>
          <Button
            sx={{ marginTop: 2, marginBottom: 1 }}
            fullWidth
            onClick={() => setOpen(false)}
            variant="outlined"
            color="primary"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

function TechContent({ technology }: { technology: Technology }) {
  return (
    <>
      <Grid container spacing={1} alignItems="center">
        <Grid item>{technology.icon}</Grid>
        <Grid item>
          <h1>{technology.name}</h1>
        </Grid>
      </Grid>
      <p>
        <ReactMarkdown linkTarget="_blank">
          {technology.description
            ? technology.description
            : `_Oops! I've been busy, content coming soon..._`}
        </ReactMarkdown>
      </p>
      {technology.url && (
        <a href={technology.url} target="_blank">
          {technology.url}
        </a>
      )}
    </>
  )
}
