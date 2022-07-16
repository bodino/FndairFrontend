import { useState, useEffect } from 'react'
import React from 'react'
import { useAccount } from 'wagmi'
import '../App.css'
import { css } from '../ui/stitches.config'
import { styled, darkTheme, createGlobalStyle } from '../ui/stitches.config'
import { Text, Button } from '../ui/text.js'
import { ThemeToggle } from '../ThemeToggle'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import {
  signedMessageObject,
  setLogOutObject,
  setClickedObject,
  referralAddressObject
} from '../hooks/recoil'
import VertTimeline from '../components/VertTimeline'
import Bubbles from '../components/Bubbles'
import {
  BraggingBox,
  Content,
  Flexbox1,
  Header,
  IconBoxes,
  InteranalParagraphBox,
  NavabarContainer,
  TopBox,
  MiniParagraphBox,HortTime, VertTime, InteranalParagraphBoxDisapearLater
} from '../ui/flexboxes'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { ThemeProvider } from 'next-themes'
import { violet } from '@radix-ui/colors'
import { Example } from '../components/Example'
import Connected from '../components/Connected'
import Navabar from '../components/Navabar'
import Steps from 'rc-steps'
import { Name, Ptext, WalletConnect, TesitmonyNamer } from '../ui/text.js'
import {
  ParagraphBox,
  HorizontalFlexBox,
  HorizontalFlexBoxWithColor,
  Slidebox,
  Top,
  Bottom,
  TestamonyBox,
  InteranalParagraphBoxDisapear,
} from '../ui/flexboxes'
import { BbSeperator, HorizontalSeperator } from '../ui/background'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/icons'

// import Swiper and modules styles
import 'swiper/css'
import {useParams} from 'react-router-dom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Footer from '../components/Footer'
import Timelines from '../components/Timelines'
import { WidthIcon } from '@radix-ui/react-icons'
import { ethers } from 'ethers'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'
import useLocalStorage from '../hooks/use-local-storage';
import useAnalyticsEventTracker from '../components/AnalyticsEventTracker'

const axios = require('axios')

function Landingpage() {
  const [referralAddress, setreferralAddress] = useLocalStorage('referralAddressObject','')
  const food = useParams()
  const [signedMessage, setSignedMessage] = useRecoilState(signedMessageObject)
  const [clicked, setClicked] = useRecoilState(setClickedObject)
  const [LogOut, setLogOut] = useRecoilState(setLogOutObject)

  useEffect(() => {
    if (ethers.utils.isAddress(food.id)){
      console.log(food.id)
      setreferralAddress(food.id);
    }
  }, []);

  var NewAirDrop = {
    Password: 'CryptoAirdropFinderCool',
    Data: {},
  }

  //GA tracker
  const gaEventTracker = useAnalyticsEventTracker('Landing Page');

  return (
    <>
      <HorizontalFlexBoxWithColor>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <ParagraphBox>
            <b>
              We Find
              <br></br>
              Airdrops For You
            </b>
          </ParagraphBox>
          <MiniParagraphBox>
            Once you connect your wallet, we do the rest.
          </MiniParagraphBox>
          <MiniParagraphBox>
            <ConnectButton.Custom onClick={() => gaEventTracker('connect from title')}>
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
                              gaEventTracker('connect from navbar')
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
                              style={{ width: '108px', textAlign: 'center' }}
                              onClick={() => {
                                setLogOut(true)
                                openAccountModal()
                              }}
                              type="button"
                            >
                              <div style={{ top: '4px' }}>
                                {account.displayName}
                              </div>
                            </WalletConnect>
                          </div>
                        )
                      }
                    })()}
                  </div>
                )
              }}
            </ConnectButton.Custom>
          </MiniParagraphBox>
        </div>
        <ParagraphBox>
          <Bubbles></Bubbles>
        </ParagraphBox>
      </HorizontalFlexBoxWithColor>
      <div
        style={{
          background: 'rgb(27, 32, 48)',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: '1 1 ',
        }}
      >
        <BraggingBox>
          <HorizontalFlexBox>
            <InteranalParagraphBoxDisapearLater>
              <Top>20+</Top>

              <Bottom> Protocol Integrations </Bottom>
            </InteranalParagraphBoxDisapearLater>

            <InteranalParagraphBoxDisapear>
              <Top>10+</Top>
              <Bottom>Address Per User </Bottom>
            </InteranalParagraphBoxDisapear>

            <InteranalParagraphBox>
              <Top>$18~</Top>
              <Bottom>Unlimited Access</Bottom>
            </InteranalParagraphBox>
          </HorizontalFlexBox>
        </BraggingBox>
        <ParagraphBox css={{ flex: '1 1', textAlign: 'center' }}>
          <div style={{ paddingBottom: '10px' }}>
            <b>Simple 3 Steps</b>
          </div>

          <MiniParagraphBox css={{ justifyContent: 'center' }}>
            You Connect, We Find, You Profit
          </MiniParagraphBox>
          <HortTime>
          <Timelines/>
          </HortTime>
        
          <VertTime>
          <VertTimeline />
          </VertTime>
         
        </ParagraphBox>
        
        <Footer />
      </div>
    </>
  )
}
export default Landingpage
