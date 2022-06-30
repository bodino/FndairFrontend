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

  const [trigger, setTrigger] = useState(false);

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
        <img style={{width:"100px", borderRadius:"10px"}}src={item.info.icon} onClick={() => {setTrigger(true)}}></img>
      </AirdropIcon> 
      <AirdropInfo>
          <ClaimButton  onClick={onClickUrl(item.info.website)}><b>Click To Claim</b></ClaimButton>
          <div style={{display:"flex", flexDirection:"column",gap:"15px", width:"150px"}}>
                 <div style={{fontSize:"15px"}}>{item.info.name}</div>
                 <div style={{fontSize:"35px"}}>${item.valueUsd.toFixed(1)}</div>
                <div style={{fontSize:"15px"}}> {item.address.substring(0, 5)}...{item.address.substring(38, 42)}</div>
          </div>
      </AirdropInfo>
      <GraphPopup trigger={trigger} icon={item.info.icon} desc={item.info.desc} closePopup={setTrigger}/>

                {/* <div>{protocolList[item.name]?.Claimable}</div> */}
    </AirdropFlexBox>
  )
}

export default Airdropbox