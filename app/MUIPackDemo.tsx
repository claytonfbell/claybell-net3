import { Box } from "@mui/material"
import { Form } from "material-ui-pack"
import React, { useState } from "react"

export function MUIPackDemo() {
  const [state, setState] = React.useState({
    firstName: "",
    phone: "",
    state: "OR",
  })
  const [error, setError] = useState<string>()
  function handleSubmit() {
    setError(`It worked! ${JSON.stringify(state)}`)
  }
  return (
    <Box maxWidth={400}>
      <Form
        onSubmit={handleSubmit}
        state={state}
        setState={setState}
        error={error}
        schema={{
          firstName: "capitalize",
          phone: "phone",
          state: {
            type: "region",
            countryIsoType: "isoAlpha2",
            country: "US",
          },
        }}
      />
    </Box>
  )
}
