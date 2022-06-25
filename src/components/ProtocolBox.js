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
    AirdropInfo,
    ProtocolFlexBox
  } from '../ui/flexboxes'
import { ConnectButton } from '@rainbow-me/rainbowkit'

  import {ClaimButton} from '../ui/text'

export function ProtocolBox({item}) {
  


  return (
    //needs image
    <ProtocolFlexBox>
        <img style={{width:"40px", marginInline:"25px", borderRadius:"50px"}}src={item.icon}></img>
    

          <div style={{display:"flex", flexDirection:"column", width:"150px",}}>
                 <div style={{fontSize:"15px"}}>{item.name}</div>
                 <div style={{fontWeight: "500", fontSize:"25px"}}>${item.priceUsd.toFixed(2)}</div>
          </div>
  
    </ProtocolFlexBox>
  )
}

export default ProtocolBox