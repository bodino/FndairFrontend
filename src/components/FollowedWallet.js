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
} from '../ui/flexboxes'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import axios from 'axios'
import { useAccount } from 'wagmi'

import { WalletConnect, StaticWalletConnect } from '../ui/text'

import { ClaimButton } from '../ui/text'

export function Airdropbox({ checklogin, item }) {
  const { data, isLoading, error } = useAccount()

  const [counter, setCounter] = React.useState(13)
  const [Show, setShow] = useState(true)

  const intervalRef = React.useRef(null)
  const startCounter = () => {
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 3)
    }, 10)
  }

  const elementStyle = {
    background: `rgb(${counter},78,123)`,
  }

  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
      if (counter > 300) {
        setShow(false)
        removeWallet(item)
        console.log(counter)
      }
      setCounter(13)
    }
  }

  async function removeWallet(passedAddress) {
    await axios
      .delete('https://backend.fndair.com/user/'+data.address+"/"+passedAddress, {
      })
      .then(function (response) {
        console.log('LETS GO!')
        checklogin()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  if (Show) {
    return (
      <StaticWalletConnect
        css={{ width: '100px', marginRight: '20px' }}
        onMouseDown={startCounter}
        onMouseUp={stopCounter}
        onMouseLeave={stopCounter}
        style={elementStyle}
      >
        {item.substring(0, 5)}...{item.substring(38, 42)}
      </StaticWalletConnect>
    )
  }
}

export default Airdropbox
