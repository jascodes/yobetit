import React, { useLayoutEffect } from 'react'
import Layout from '@/layout/layout'

import { gsap } from 'gsap'
import {
  useDropDownStore,
  DropDownStoreProvider,
} from '@/components/drop_down/store/drop_down_store'
import { css } from 'linaria'
import { DropDown } from '@/components/drop_down/drop_down'
import { autorun } from 'mobx'
import { useWindowSize } from '@/hooks/use-window-size'
import ReactTooltip from 'react-tooltip'
import { Helmet } from 'react-helmet'

const background = css`
  background: #fde5fe;
  display: flex;
  min-height: 100vh;
  width: 100vw;
`

const dropDown = css`
  /* margin: auto auto; */
  /* padding-top: 60px; */
  margin: 0px auto;
  opacity: 0;
`

const tooltip = css`
  color: rgba(0, 0, 0, 0.5) !important;
  padding: 18px;
  width: 400px;
  line-height: 19px;
  letter-spacing: 1px;
  margin-top: -20px !important;
  span {
    text-align: justify !important;
  }
`

const getTop = (open: boolean, height: number) => {
  const innerHeight = height - 70
  const closeHeight = (innerHeight - 80) / 2
  const openHeight = closeHeight / 2
  return open ? openHeight : closeHeight
}

const DropDownContainer = () => {
  const store = useDropDownStore()
  const size = useWindowSize()

  useLayoutEffect(
    () =>
      autorun(() => {
        store.open
        gsap.to(`.${dropDown}`, {
          duration: 1,
          ease: 'expo',
          'margin-top': getTop(store.open, size.height),
        })
      }),
    []
  )
  useLayoutEffect(() => {
    gsap.to(`.${dropDown}`, {
      duration: 0.5,
      'margin-top': getTop(store.open, size.height),
    })
  }, [size.height])

  useLayoutEffect(() => {
    gsap.fromTo(
      `.${dropDown}`,
      {
        opacity: 0,
        'margin-top': getTop(store.open, size.height) - 40,
      },
      {
        opacity: 1,
        'margin-top': getTop(store.open, size.height),
        delay: 1,
        duration: 0.6,
        ease: 'expo',
      }
    )
  }, [])

  return (
    <div
      className={background}
      onClick={() => {
        const input = document.getElementsByClassName('downdown-input')[0] as
          | undefined
          | HTMLInputElement
        input?.focus({ preventScroll: true })
      }}
    >
      <div className={dropDown}>
        <DropDown />
      </div>
    </div>
  )
}

const Countries = () => {
  return (
    <Layout>
      <DropDownStoreProvider>
        <>
          <Helmet title="Yobetit - Countries" />
          <DropDownContainer />
          <ReactTooltip
            multiline
            type="light"
            effect="solid"
            className={tooltip}
          />
        </>
      </DropDownStoreProvider>
    </Layout>
  )
}

export default Countries
