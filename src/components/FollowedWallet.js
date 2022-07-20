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
import { WalletDropdownItem } from '../ui/walletDropdown'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import axios from 'axios'

import { useAccount } from 'wagmi'
import {CrossCircledIcon} from '@radix-ui/react-icons'
import { WalletConnect, StaticWalletConnect } from '../ui/text'

import { ClaimButton } from '../ui/text'
import { toast } from 'react-toastify'
axios.defaults.withCredentials = true;

export function Airdropbox({ checklogin, item }) {
  const { data, isLoading, error } = useAccount()

  // const [counter, setCounter] = React.useState(13)
  const [show, setShow] = useState(true)

  // const intervalRef = React.useRef(null)
  // const startCounter = () => {
  //   if (intervalRef.current) return
  //   intervalRef.current = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 3)
  //   }, 10)
  // }

  // const elementStyle = {
  //   background: `rgb(${counter},78,123)`,
  // }

  // const stopCounter = () => {
  //   if (intervalRef.current) {
  //     clearInterval(intervalRef.current)
  //     intervalRef.current = null
  //     if (counter > 300) {
  //       setShow(false)
  //       removeWallet(item)
  //       console.log(counter)
  //     }
  //     setCounter(13)
  //   }
  // }

  async function removeWalletOne() {
    console.log(item)
    if (data.address.toLowerCase() !== item ) {
    // setShow(false)
    removeWallet(item)
    }
    else {
      toast("Cannon't Remove Account Address")
    }
  }
  async function removeWallet(passedAddress) {
    await axios
      .delete(process.env.REACT_APP_BACKEND_API_LINK+'user/'+data.address+"/"+passedAddress, {
      })
      .then(function (response) {
        console.log('LETS GO!')
        checklogin()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  if (show) {
    return (
     <StaticWalletConnect css={{ marginRight: '20px'}} >
      
        <div style={{paddingRight:"10px",}}>
        {item.substring(0, 5)}...{item.substring(38, 42)}
        </div>
        <CrossCircledIcon  onClick={() => {
             removeWalletOne()
            }} style={{width:"20px", height:"20px", cursor: "pointer", '&:hover': {
             color:"red"
        
            },}}/>
     </StaticWalletConnect>
    
    )
  }
}

export default Airdropbox
