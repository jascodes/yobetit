import React, { SFC } from 'react'
import { Leading } from '@/layout/leading'
import { css } from 'linaria'
import { DDConst } from '../components/drop_down/drop_down_constants'

interface HeaderProp {}

const stHeader = css`
  position: fixed;
  top: 0px;
  z-index: 100;
  width: 100vw;
  background: ${DDConst.primaryColor};
`

const headerBox = css`
  max-width: 960px;
  margin: auto;
  padding: 15px 30px;
`
const Header: SFC<HeaderProp> = () => {
  return (
    <header className={stHeader}>
      <div className={headerBox}>
        <Leading />
      </div>
    </header>
  )
}

export { Header }
// <h1 style={{ margin: 0 }}>
//           <Link
//             to="/"
//             style={{
//               color: `white`,
//               textDecoration: `none`,
//             }}
//           ></Link>
