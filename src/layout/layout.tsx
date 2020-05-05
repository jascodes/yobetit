import React, { SFC } from 'react'

import { TransitionPortal } from 'gatsby-plugin-transition-link'

import { Header } from './header'
import './layout.css'

interface LayoutProp {}

const Layout: SFC<LayoutProp> = props => {
  return (
    <div>
      <TransitionPortal>
        <Header />
      </TransitionPortal>
      {props.children}
    </div>
  )
}

export default Layout
