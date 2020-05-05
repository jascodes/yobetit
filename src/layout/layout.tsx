import React, { SFC } from 'react'

import { TransitionPortal } from 'gatsby-plugin-transition-link'

import { Header } from './header'
import './layout.css'

interface LayoutProp {
  title: string
}

const Layout: SFC<LayoutProp> = props => {
  return (
    <>
      <TransitionPortal>
        <Header />
      </TransitionPortal>
      {props.children}
    </>
  )
}

export default Layout
