import React from 'react'
import { useState, useEffect } from 'react'
import {
    ParagraphBox,
    HorizontalFlexBox,
    AirdropFlexBox,
    Slidebox,
    Top,
    Bottom,
    TestamonyBox,
    AirdropIcon,
    AirdropInfo
  } from '../ui/flexboxes'
import { ConnectButton } from '@rainbow-me/rainbowkit'

import {ClaimButton} from '../ui/text'

import GraphPopup from './GraphPopup'

export function Airdropbox({item}) {
  const [trigger1, setTrigger1] = useState(false);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  const onClickUrl = (url) => {
    return () => openInNewTab(url)
  }
  
  return (
    <AirdropFlexBox>
      <AirdropIcon>
        <img style={{width:"100px", borderRadius:"10px"}}src={item.info.icon} onClick={() => {setTrigger1(true)}}></img>
      </AirdropIcon> 
      <AirdropInfo>
          <ClaimButton><b>Claimed 😃</b></ClaimButton>
          <div style={{display:"flex", flexDirection:"column",gap:"15px", width:"150px"}}>
                 <div style={{fontSize:"15px"}}>{item.info.name}</div>
                 <div style={{fontSize:"35px"}}>${(item.valueUsd.toFixed(2)).toLocaleString()}</div>
                <div style={{fontSize:"15px"}}> {item.address.substring(0, 5)}...{item.address.substring(38, 42)}</div>
          </div>
      </AirdropInfo>
      <GraphPopup trigger={trigger1} icon={item.info.icon} description={item.info.desc} setTrigger={setTrigger1} address={item.info.gekoId} name={item.info.name} item={item.info}/>

                {/* <div>{protocolList[item.name]?.Claimable}</div> */}
    </AirdropFlexBox>
  )
}

export default Airdropbox