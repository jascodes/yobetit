import React, { SFC } from 'react'

interface MissingProp {}

const Missing: SFC<MissingProp> = () => {
  return (
    <div className="box">
      <div className="boxItemCenter">404 - Page Not Found</div>
    </div>
  )
}

export default Missing
