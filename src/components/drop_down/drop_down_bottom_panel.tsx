import React, { FunctionComponent, useLayoutEffect } from 'react'
import { css } from 'linaria'
import { autorun } from 'mobx'

import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'
import gsap from 'gsap'
import Ripples from 'react-ripples'
import { useObserver } from 'mobx-react-lite'

import { DDConst } from './drop_down_constants'

const bottomPanel = css`
  position: fixed;
  transform: translateY(100%);
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  /* height: 30px; */
  background: white;
  border-radius: 10px 10px 0px 0px;
  border: 2px solid ${DDConst.primaryColor};
  border-bottom: 0px;
  height: 60px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const button = css`
  width: 86px;
  height: 30px;
  display: flex;
  border: 2px solid ${DDConst.primaryColor};
  place-items: center;
  cursor: pointer;
  transition: 0.6s;
  font-size: 11px;
  cursor: pointer;
  transition: 0.6s;

  &:hover {
    color: #fff;
    background: ${DDConst.primaryColor};
  }
`
const sel = css`
  color: #fff;
  background: ${DDConst.primaryColor};
`

const button2 = css`
  text-align: center;
  flex-grow: 1;
`

interface ButtonProp {
  mode: 'CLIENT' | 'SERVER' | 'DIRECT'
  tooltip: string
}
const Button: FunctionComponent<ButtonProp> = props => {
  const store = useDropDownStore()
  return useObserver(() => (
    <Ripples
      data-tip={props.tooltip}
      color={`${DDConst.background}`}
      className={`${button} ${store.mode === props.mode ? sel : ''}`}
      onClick={() => {
        store.mode = props.mode
      }}
    >
      <div className={button2}>{props.mode}</div>
    </Ripples>
  ))
}

interface DropDownBottomPanelProp {}

export const DropDownBottomPanel: FunctionComponent<DropDownBottomPanelProp> = () => {
  const store = useDropDownStore()
  useLayoutEffect(() => {
    gsap.fromTo(
      `.${bottomPanel}`,
      { y: '100%' },
      {
        y: '0%',
        ease: 'expo',
        delay: 1,
      }
    )
    autorun(() => {
      gsap.to(`.${bottomPanel}`, {
        y: store.open ? '100%' : '0%',
        ease: 'expo',
      })
    })
  }, [])
  return useObserver(() => (
    <div className={bottomPanel}>
      <div style={{ fontSize: 16 }}>Data Mode:</div>
      <Button
        mode="CLIENT"
        tooltip={`Data is refetched and cached in state upon every broswer refresh. Various keys of the reteried data are indexed using Okapi BM25 based algorithm. Indexing allows searching counteries other then thier names such as capital cities or currency.<br/>Eg. Search Capital "Valletta" will return Malta.`}
      />
      <Button
        mode="SERVER"
        tooltip={`Data is fetched each time, using following endpoint<br/>https://yobetit-service.herokuapp.com/countries<br/>This endpoint cache and index various keys from restcountries.eu endpoint. In comparision to client searching where we don't index all the key becaue of performance factors. On serverend caching all the keys inprove search result.`}
      />
      <Button
        mode="DIRECT"
        tooltip={`Data is fetched each time, using following endpoint<br/>https://restcountries.eu/rest/v2/name/`}
      />
    </div>
  ))
}
