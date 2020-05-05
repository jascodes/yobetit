import React, { SFC } from 'react'

import { DropDownBar } from '@/components/drop_down/drop_down_bar'

import { DropDownPanel } from '@/components/drop_down/drop_down_panel'
import { css } from 'linaria'
import { DropDownBottomPanel } from '@/components/drop_down/drop_down_bottom_panel'

interface DropDownProp {}

const dropDown = css`
  display: flex;
  flex-direction: column;
  width: 500px;
`

export const DropDown: SFC<DropDownProp> = () => {
  return (
    <>
      <div className={dropDown}>
        <DropDownBar />
        <DropDownPanel />
      </div>
      <DropDownBottomPanel />
    </>
  )
}
