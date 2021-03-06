import React, { FunctionComponent } from 'react'
import { css } from 'linaria'

interface LeadingProp {}

const im = css`
  transform: scale(0.9);
  transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  :hover {
    transform: scale(1);
  }
  cursor: pointer;
`
export const Leading: FunctionComponent<LeadingProp> = () => {
  return (
    <img
      className={im}
      alt=""
      src="data:image/png;base64,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"
    />
  )
}
