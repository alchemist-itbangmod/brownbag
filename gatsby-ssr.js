import React, { Fragment } from "react"
import { renderToString } from "react-dom/server"

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => (
    <Fragment>
      {bodyComponent}
    </Fragment>
  )
  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}
