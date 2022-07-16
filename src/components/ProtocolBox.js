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

import GraphPopup from './GraphPopup'

import {ClaimButton} from '../ui/text'

export function ProtocolBox({item}) {
  const [trigger, setTrigger] = useState(false);
  console.log("TESTTEST")
  console.log(item)



  return (
    //needs image
    <ProtocolFlexBox >
      <div onClick={() => {setTrigger(true)}} style={{display:"flex", flexDirection:"row"}}>
      <img style={{width:"47px", marginInline:"25px", borderRadius:"50%"}}src={item.icon} ></img>
    
      <div style={{display:"flex", flexDirection:"column", width:"120px",}}>
        <div style={{fontSize:"15px"}}>{item.name}</div>
        <div style={{fontWeight: "500", fontSize:"25px"}}>${item.priceUsd.toFixed(2)}</div>
      </div>
      </div>
      <GraphPopup trigger={trigger} icon={item.icon} setTrigger={setTrigger} address={item.gekoId} description={item.desc} name={item.name} item={item}/>
    </ProtocolFlexBox>
  )
}

export default ProtocolBox