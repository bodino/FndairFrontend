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
  
  import { Link } from 'react-router-dom'
  import { ConnectButton } from '@rainbow-me/rainbowkit'

  import {ClaimButton} from '../ui/text'

export function AirdropboxFree({item}) {

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
        <img style={{width:"100px", borderRadius:"10px"}} src={'./VectorHidden.svg'}></img>
      </AirdropIcon>
      <AirdropInfo>
      {/* //make link to join page */}
      <Link to="/pricing" style={{  textDecoration:"none"}}><ClaimButton  ><b>Join To Claim</b></ClaimButton></Link>
          <div style={{display:"flex", flexDirection:"column",gap:"15px", width:"150px"}}>
                 <div style={{fontSize:"15px"}}>{}</div>
                 <div style={{fontSize:"35px"}}>${item.valueUsd.toFixed(1).toLocaleString()}</div>
                <div style={{fontSize:"15px"}}> {item.address.substring(0, 5)}...{item.address.substring(38, 42)}</div>
          </div>
      </AirdropInfo>

                {/* <div>{protocolList[item.name]?.Claimable}</div> */}
    </AirdropFlexBox>
  )
}

export default AirdropboxFree