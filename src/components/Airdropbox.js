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

export function Airdropbox({item}) {
  


  return (
    <AirdropFlexBox>
      <AirdropIcon>
        <img style={{width:"100px"}}src={'./Hop.svg'}></img>
      </AirdropIcon>
      <AirdropInfo>
          <ClaimButton ><b>Click To Claim</b></ClaimButton>
          <div style={{display:"flex", flexDirection:"column",gap:"15px", width:"150px"}}>
                 <div style={{fontSize:"15px"}}>{item.protocol}</div>
                 <div style={{fontSize:"35px"}}>$254</div>
                <div style={{fontSize:"15px"}}> {item.address.substring(0, 5)}...{item.address.substring(38, 42)}</div>
          </div>
      </AirdropInfo>

                {/* <div>{protocolList[item.name]?.Claimable}</div> */}
    </AirdropFlexBox>
  )
}

export default Airdropbox