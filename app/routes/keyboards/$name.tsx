import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { CloudinaryImage } from "react-easy-cloudinary"
import ReactMarkdown from "react-markdown"
import { MetaFunction } from "remix"
import { useKeyboard } from "../keyboards"

export let meta: MetaFunction = () => {
  return {
    title: "Keyboards",
  }
}

export default function Keyboard() {
  const keyboard = useKeyboard()

  return (
    <>
      <Typography variant="h1">{keyboard?.name}</Typography>
      {keyboard?.notes !== undefined ? (
        <Typography sx={{ marginTop: 2 }}>
          <ReactMarkdown>{keyboard?.notes}</ReactMarkdown>
        </Typography>
      ) : null}
      {(keyboard?.photos || []).map((photo) => (
        <Box key={photo.fileName} sx={{ marginTop: 2 }}>
          <CloudinaryImage
            fullWidth
            publicId={`claybell-net/keyboards/${photo.fileName}`}
            resize="scale"
            width={1600}
          />
        </Box>
      ))}
    </>
  )
}
