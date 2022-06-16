import { useConnect, useAccount, useTransaction, useSignMessage } from 'wagmi'
import '../ui/dropdowns'
import {
  CookieIcon,
  CrossCircledIcon,
  FaceIcon,
  LinkBreak2Icon,
} from '@radix-ui/react-icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdowns'
import Connected from './Connected'
import makeBlockie from 'ethereum-blockies-base64'
import { BigNumber } from 'ethers'
import { styled, darkTheme } from '../ui/stitches.config'
import { Text, WalletConnect } from '../ui/text'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { SignMessage } from './SignMessage'
import { ethers } from 'ethers'
import { useProvider, useSigner } from 'wagmi'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'
import {
  airDropListObject,
  clickedObject,
  signedMessageObject,
} from '../hooks/recoil'
import { useDisconnect } from 'wagmi'



var x = 0
var walletarray = [3]

export function Example() {
const { disconnect } = useDisconnect()
axios.defaults.withCredentials = true;

const { data:signer, error:signererror, isLoading:signerisloading, refetch } = useSigner()
  // const [clicked, setClicked] = useState(false);
  const [clicked, setClicked] = useRecoilState(clickedObject)
  const [signedMessage, setSignedMessage] = useRecoilState(signedMessageObject)
  // const provider = useProvider()
 const { data, isLoading, error } = useAccount()

 const { isConnected, connector, connectors, connectAsync } = useConnect()

  useEffect(() => {
      console.log("hi")
    if (clicked === true) {
      console.log(clicked)
      console.log('hi')
      setClicked(false)
      singstuff2()
    }
  }, [clicked])


  useEffect(() => {
      console.log("hi")
      async function checklogin(){
        await axios.get('http://localhost:3001/login', { 
            })
            .then(function (res) {
                if (res.data.loggedin = true && data) {
                    console.log(res)
                    setSignedMessage(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
      } 
      checklogin();
  }, [])
  


  const [gotdata, setgotdata] = useState(false)

  

  async function signstuff(connector) {
    await connectAsync(connector)
    setTimeout(doSomething, 1000)
  }
  function doSomething() {
    setClicked(true)
    // console.log("helloworld")
  }
  async function singstuff2() {
    let signature
    try {
      signature = await signer.signMessage(
        'Welcome to Fndair!\n\nClick “Sign” to connect. No password needed!\n\nThis request will not trigger a blockchain transaction or cost any gas fees.',
      )
      setSignedMessage(true)
      const UserInfo = {
        signature: signature,
        message: 'Welcome to Fndair!\n\nClick “Sign” to connect. No password needed!\n\nThis request will not trigger a blockchain transaction or cost any gas fees.',
        address: data.address,
      }
      await axios.post('http://localhost:3001/login', {
        UserInfo
      })
      .then(function (response) {
    
        console.log(response.data)
       })
       .catch(function (error) {
         console.log(error);
       })

    } catch (error) {
      console.log('freedom')
    }
  }

  async function serverDisconnect(){
    await axios.get('http://localhost:3001/disconnect', { 
    })
    .then(function (response) {
        if (response.data.loggedin = false) {
            setSignedMessage(false);
        }
    })
    .catch(function (error) {
        console.log(error);
    })
  }

  var food =[];
  connectors[0].logo = '/metamask-fox.svg'
  connectors[1].logo = '/walletconnect-logo.svg'
  connectors[2].logo = '/coinbasewallet-logo.png'
  if (signedMessage && data)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <WalletConnect>Connected</WalletConnect>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => {
              navigator.clipboard.writeText(data.address)
            }}
          >
            <img
              style={{
                width: '15px',
                paddingRight: '11.75px',
                paddingLeft: '1.75px',
              }}
              src={
                data.ens
                  ? data.ens?.avatar
                  : makeBlockie(data.address)
              }
            />
            {data.ens?.name
              ? `${data.ens?.name} (${data.address})`
              : data.address.substring(0, 5) +
                '...' +
                data.address.substring(38, 42)}
          </DropdownMenuItem>
         

          <DropdownMenuItem onClick={() => {disconnect(); serverDisconnect()}}>
            {' '}
            <Text>
              <CrossCircledIcon
                style={{ width: '18px', paddingRight: '10px', height: '18px' }}
              />
            </Text>
            Disconnect
          </DropdownMenuItem>

          {/* {error && <div>{error?.message ?? 'Failed to connect'}</div>} */}
          {/* <DropdownMenuItem><SignMessage/></DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  else
    return (
  
      
      <DropdownMenu>
        <DropdownMenuTrigger>
          <WalletConnect >Connect Wallet</WalletConnect>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {connectors.map((connector) => (
            <DropdownMenuItem
              disabled={!connector.ready}
              key={connector.id}
              onClick={() => {
                signstuff(connector)
              }}
            >
              <img
                style={{ width: '15px', paddingRight: '10px' }}
                src={connector.logo}
              />

              {connector.name}
              {!connector.ready && ' (unsupported)'}
            </DropdownMenuItem>
          ))}

          {/* {error && <div>{error?.message ?? 'Failed to connect'}</div>} */}
        </DropdownMenuContent>
      </DropdownMenu>
    )
}
export default Example
