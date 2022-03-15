import { Grid, Link as MUILink, useTheme } from "@mui/material"
import { CloudinaryImage } from "react-easy-cloudinary"
import { useLocation, useParams } from "react-router-dom"
import { Link, MetaFunction, Outlet } from "remix"

export let meta: MetaFunction = () => {
  return {
    title: "Keyboards",
  }
}

interface RouteParams {
  name: string
}

export function sanitizeSlug(slug: string) {
  return slug.replace(/[^A-Za-z0-9]/g, "")
}

export function useKeyboard() {
  const location = useLocation()
  const params = useParams()

  const parts = location.pathname.split("/").filter((x) => x !== "")

  if (parts[0] === "keyboards" && parts.length > 1) {
    return keyboards.find((x) => sanitizeSlug(x.name) === parts[1])
  }
}

export default function Keyboards() {
  const theme = useTheme()
  const selected = useKeyboard()
  return (
    <>
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        {keyboards.map((keyboard) => (
          <Grid item key={keyboard.name} xs={3} sm={2}>
            <MUILink
              component={Link}
              to={`./${sanitizeSlug(keyboard.name)}`}
              sx={{
                ...(selected?.name === keyboard.name
                  ? {
                      "& img": {
                        outline: `4px solid ${theme.palette.primary.main}`,
                      },
                    }
                  : {}),
                "&:hover img": {
                  outline: `4px solid ${theme.palette.primary.main}`,
                },
              }}
            >
              <CloudinaryImage
                publicId={`claybell-net/keyboards/${keyboard.photos[0].fileName}`}
                fullWidth
                resize="fill"
                width={250}
                height={250}
              />
            </MUILink>
          </Grid>
        ))}
      </Grid>
      <Outlet />
    </>
  )
}

interface Keyboard {
  name: string
  photos: Photo[]
  notes?: string
}

interface Photo {
  fileName: string
  caption?: string
}

const keyboards: Keyboard[] = [
  {
    name: "Melgeek 60%",
    photos: [{ fileName: "melgeek-robin-egg-blue.jpg", caption: "Front" }],
    notes: 'SA "Ice Cap" Keyset (Sublimated)',
  },
  {
    name: "IDOBAO ID80 V2 75%",
    photos: [{ fileName: "IDOBAO.jpeg", caption: "Front" }],
    notes: "DROP + BIIP MT3 EXTENDED 2048 CUSTOM KEYCAP SET",
  },
  {
    name: "Laser Cut Stainless Steel",
    photos: [
      { fileName: "stainless1.jpeg", caption: "Front" },
      { fileName: "stainless2.jpeg", caption: "Corner" },
      { fileName: "stainless3.jpeg", caption: "Side" },
    ],
  },
  {
    name: "Laser Cut Copper",
    photos: [
      { fileName: "copper1.jpeg", caption: "Corner" },
      { fileName: "copper2.jpeg", caption: "Front" },
      { fileName: "copper3.jpeg", caption: "Side" },
    ],
  },
  {
    name: "Laser Cut Brass with printed PCB",
    photos: [
      { fileName: "brass1.jpeg", caption: "Corner" },
      { fileName: "brass2.jpeg", caption: "Front" },
      { fileName: "brass3.jpeg", caption: "Back" },
    ],
  },
  {
    name: 'Ryloo Studio "Hello" M0110',
    photos: [{ fileName: "green-m0110.jpg" }],
  },
  {
    name: "75% Orange",
    photos: [{ fileName: "kbdfans-75-orange.jpg", caption: "Front" }],
    notes: `- DROP MT3 SKIIDATA KEYCAP SET
- PCB \`kbd75-rev1\`
- Cherry Brown Switches`,
  },
  {
    name: "75% Black",
    photos: [{ fileName: "kbdfans-75-black.jpg", caption: "Front" }],
    notes: `- IFK 808-Boom Keyset
- PCB \`kbd75-rev1\``,
  },
  {
    name: "60% Black",
    photos: [
      { fileName: "black1.jpg", caption: "Side" },
      { fileName: "black2.jpg", caption: "Lights On" },
    ],
    notes: `- PCB \`dz60rgbv2\`
- Cherry Blue Switches
- MAXKEY BLACK DOUBLESHOT ABS SA KEYCAPS
`,
  },
  {
    name: "60% Wood Case with Magnetic Lid",
    photos: [
      { fileName: "wood-open.jpeg", caption: "Open" },
      { fileName: "wood-closed.jpeg", caption: "Closed" },
    ],
    notes: `- PCB \`bm60rgb\`
- Cherry Chalk-A PBT Keycaps
- Cherry Brown Switches
`,
  },
  {
    name: "60% Yellow Keyboard",
    photos: [
      { fileName: "yellow.jpeg" },
      { fileName: "yellow-case.jpeg", caption: "Case" },
    ],
    notes: `- Case MelGeek Mojo60
- PCB \`dz60\`
- Cherry Pbt dyesub Keycaps
- Cherry Blue Switches
`,
  },
  {
    name: "40% and 20% Red",
    photos: [
      { fileName: "red-40.jpeg", caption: "40%" },
      { fileName: "red-20.jpeg", caption: "20%" },
    ],
    notes: `- PCB \`bm43a\`
- SA Ice Cap Keyset
- Cherry Brown Switches`,
  },
  {
    name: "65% Keyboards",
    photos: [{ fileName: "1976.jpeg" }],
    notes: `- PCB \`dz65rgb\`
- SA 1976 Keycaps
- Cherry Keycaps
- Cherry Brown Switches
`,
  },
]

export function getRandomKeyboardPhoto() {
  const allPhotos = keyboards.flatMap((x) => x.photos)
  return allPhotos[Math.floor(Math.random() * allPhotos.length)]
}
