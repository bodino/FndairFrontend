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
  } from '../ui/flexboxes'

export function Airdropbox({item,protocolList}) {
   


  return (
    <AirdropFlexBox>
                <div>{item.name}</div>
                <div>{item.amount *10**(-1*protocolList[item.name]?.Decimals)}</div>
                <div>{protocolList[item.name]?.Claimable}</div>
    </AirdropFlexBox>
  )
}

export default Airdropbox