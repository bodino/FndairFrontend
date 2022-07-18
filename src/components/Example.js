import { useConnect, useAccount, useTransaction, useSignMessage } from 'wagmi'
import '../ui/dropdowns'
import '@rainbow-me/rainbowkit/styles.css'
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
import axios from "axios";
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
  totalRefferedObject
} from '../hooks/recoil'
import { useDisconnect } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ENSListObject, WalletListArray, trackedWalletListObject, setLogOutObject, setClickedObject, protocolListObject, subscriptionInfoObject, claimedAirDropListObject, totalClaimedObject} from '../hooks/recoil';
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;



var x = 0
var walletarray = [3]

export function Example() {
  const { disconnect } = useDisconnect()
  axios.defaults.withCredentials = true;

  const [airDropList, setairDropList] = useRecoilState(airDropListObject)
  const [claimedAirDropList, setclaimedAirDropList] = useRecoilState(claimedAirDropListObject)

  const [trackedWalletList, settrackedWalletListt] = useRecoilState(trackedWalletListObject)
  const [protocolList, setprotocolList] = useRecoilState(protocolListObject)
  const [totalClaimed, settotalClaimed] = useRecoilState(totalClaimedObject)

  const [subscriptionInfo, setsubscriptionInfo] = useRecoilState(subscriptionInfoObject)
  const [totalReffered, settotalReffered] = useRecoilState(totalRefferedObject)



  const [walletList, setwalletList] = useRecoilState(WalletListArray)
  const [ENS, setENS] = useRecoilState(ENSListObject)
  const {
    data: signer,
    error: signererror,
    isLoading: signerisloading,
    refetch,
  } = useSigner()
  // const [clicked, setClicked] = useState(false);
  const [clicked, setClicked] = useRecoilState(setClickedObject)
  const [LogOut, setLogOut] = useRecoilState(setLogOutObject)
  const [signedMessage, setSignedMessage] = useRecoilState(signedMessageObject)
  // const provider = useProvider()
  const { data, isLoading, error } = useAccount()
  const provider = useProvider()
  const navigate = useNavigate()
  const { isConnected, connector, connectors, connectAsync } = useConnect()
  const {
    data: signingmessagedata,
    error: signingmessageerror,
    isLoading: signingmessageisloading,
    signMessageAsync,
  } = useSignMessage({
    message:
      'Welcome to Fndair!\n\nClick “Sign” to connect. No password needed!\n\nThis request will not trigger a blockchain transaction or cost any gas fees.',
  })

  function convertObjectToArray(res) {
    var eligableAirdrops = [];
    var claimedAirdrops = [];
    var totalClaimed = 0;

    console.log(res.data)
            var x =0;
            var y =0;
            for (var j =0; j < res.data.wallet.length; j++){
              console.log(res.data);
              for(var i =0; i < res.data.wallet[j].claimed.length; i++){
                 res.data.wallet[j].claimed[i].address = res.data.wallet[j]._id;
                 claimedAirdrops[y] =  res.data.wallet[j].claimed[i];
                 totalClaimed = res.data.wallet[j].claimed[i].valueUsd + totalClaimed;
                 y++;
               }
            for(var i =0; i < res.data.wallet[j].toClaim.length; i++){
             console.log(res.data.wallet[j]._id)
              res.data.wallet[j].toClaim[i].address = res.data.wallet[j]._id;
              eligableAirdrops[x] =  res.data.wallet[j].toClaim[i];

              x++;
            }
          }
          //.toFixed(2)
          settotalReffered(res.data.subscriptionInfo.referralValue)
          settotalClaimed(totalClaimed)
          setclaimedAirDropList(claimedAirdrops)
          setairDropList(eligableAirdrops)
          setprotocolList(res.data.protocols)
          settrackedWalletListt(res.data.followedAddresses)
          setsubscriptionInfo(res.data.subscriptionInfo)
  }

 

  useEffect(() => {
    async function checklogin() {
      await axios
        .get(process.env.REACT_APP_BACKEND_API_LINK +'login', {},{withCredentials: true, headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'} })
        .then(function (res) {
            console.log(res.data.loggedin)
          if ((res.data.loggedin = true)) {
            if ((res.data._id)) {
              // ensgetter();
              console.log(res)
              convertObjectToArray(res);
              setSignedMessage(true)
              
            } else {
              setclaimedAirDropList()
              setairDropList()
              settotalClaimed()
              settrackedWalletListt()
              setprotocolList()
              disconnect()
              serverDisconnect()
           
            }
          } else {
            console.log("wowoow")

            console.log(res)

            disconnect()
            serverDisconnect()
          }
        })
        .catch(function (error) {
          console.log(error)
          disconnect()
          serverDisconnect()
        })
    }


    checklogin()
  
  }, [connector])


  async function ensgetter() {
    var food = await provider.lookupAddress(data.address)
    setENS(food);
  }  

  useEffect(() => {
    if (isConnected && !signedMessage && clicked) {
      singstuff()
    }

    if (!isConnected && LogOut) {
      disconnect()
      serverDisconnect()
      setSignedMessage(false);
      setclaimedAirDropList()
      setairDropList()
      settotalClaimed()
      settrackedWalletListt()
      setprotocolList()

    }

    
  }, [isConnected])

  async function singstuff() {
    let signature
    try {
      var data1 = await signMessageAsync()
      const UserInfo = {
        signature: data1,
        message:
          'Welcome to Fndair!\n\nClick “Sign” to connect. No password needed!\n\nThis request will not trigger a blockchain transaction or cost any gas fees.',
        address: data.address,
      }
      await axios
        .post(process.env.REACT_APP_BACKEND_API_LINK+'login', {
          UserInfo
        },{withCredentials: true, headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'} })
        .then(function (response) {
          setSignedMessage(true)
          convertObjectToArray(response)
          console.log(response)
          navigate("/portfolio");
          ensgetter();
        })
        .catch(function (error) {
          console.log(error)
          disconnect()
        })
    } catch (error) {
      disconnect()
    }
  }

  async function serverDisconnect() {
    // await axios
    //   .get(process.env.REACT_APP_BACKEND_API_LINK+'disconnect', {})
    //   .then(function (response) {
    //     if ((response.data.loggedin = false)) {
    //       setSignedMessage(false)
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error)
        
    //   })
  }

  var food = []
  connectors[0].logo = '/metamask-fox.svg'
  connectors[1].logo = '/walletconnect-logo.svg'
  connectors[2].logo = '/coinbasewallet-logo.png'

  return (
    // <ConnectButton chainStatus="icon" accountStatus="avatar" showBalance={false}/>
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div
            {...(!mounted && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain || !signedMessage) {
                return (
                  <WalletConnect
                    onClick={() => {
                      setClicked(true)
                      openConnectModal()
                    }}
                  >
                    Connect Wallet
                  </WalletConnect>
                )
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                )
              }

              if (signedMessage) {
                return (
                  <div style={{ display: 'flex', gap: 1 }}>
                    <WalletConnect
                      onClick={() => {
                        openChainModal()
                      }}
                      css={{ display: 'flex', alignItems: 'center' }}
                      type="button"
                    >
                      {chain.hasIcon && (
                        <div>
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              style={{
                                width: 12,
                                height: 12,
                                alignSelf: 'center',
                              }}
                            />
                          )}
                        </div>
                      )}
                    </WalletConnect>

                    <WalletConnect  onClick={() => {setLogOut(true); openAccountModal()}} type="button">
                      <div style={{ top: '4px' }}>{account.displayName}</div>
                    </WalletConnect>
                  </div>
                )
              }
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
export default Example
