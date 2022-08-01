import { useState, useEffect } from 'react'
import React from 'react'
import { useAccount } from 'wagmi'
import '../App.css'
import { css } from '../ui/stitches.config'
import { styled, darkTheme, createGlobalStyle } from '../ui/stitches.config'
import { Text, Button, EarnPhoto } from '../ui/text.js'
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
  MiniParagraphBox,
  HortTime,
  VertTime,
  InteranalParagraphBoxDisapearLater,
  AboutLandingPage,
  ClickToClaimContainer,
  RadialBackgroundContainer
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
  ReferralBox,
  ReferralHeader
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
import { Link } from 'react-router-dom'
import LandingPageGraphic from '../images/ClickToClaim2.png'
import LandingPageGraphic2 from '../images/LandingPageGraphic.png'
import Referral from '../images/referral2.png'

const axios = require('axios')
axios.defaults.withCredentials = true;

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
              <Top>10+</Top>

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
        <ParagraphBox css={{ flex: '1 1', textAlign: 'center', alignItems: 'center', paddingInline: "0px", }}>
          <div style={{ paddingBottom: '10px' }}>
            <b>3 Simple Steps</b>
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

          <AboutLandingPage>
            {/* <p style={{fontSize: '25px', paddingTop: '20px', fontWeight: '200'}}>Why use FNDAIR</p> */}
            <h3 style={{maxWidth: '85%', maxHeight: '100%', marginTop: '30px', marginBottom: '15px', fontSize: '30px'}}>FNDAIR keeps track of your airdrops so you don't have to</h3>
            <p style={{fontSize: '22px', marginTop: '0', marginBottom: '30px', fontWeight: '250', maxWidth: '85%', maxHeight: '100%'}}>Never forget to claim your tokens again</p>
            <Link to="/portfolio" style={{  textDecoration:"none", paddingInline:"10px", width: '150px'}}>
              <WalletConnect style={{marginBottom: '30px'}}>
                Claim Now
              </WalletConnect>
            </Link >
          </AboutLandingPage>

          <ClickToClaimContainer>
            {/* <div>
              <img src={LandingPageGraphic} style={{width: '430px'}}/>
            </div> */}
            {/* <RadialBackgroundContainer> */}
              <EarnPhoto src={LandingPageGraphic2} />
            {/* </RadialBackgroundContainer> */}
            <div style={{textAlign: 'left'}}>
              <p style={{fontSize: '30px', marginTop: '0', marginBottom: '0', fontWeight: 'bold', paddingTop: '20px'}}>
                Show me the money
              </p>
              <p style={{fontSize: '22px', marginTop: '0', marginBottom: '20px', color: 'rgb(165, 168, 182)'}}>
                A simple way to claim your tokens
              </p>
              <p style={{fontSize: '18px', marginTop: '0', marginBottom: '5px', lineHeight:"28px"}}>
                After connnecting you wallet, we search our database and match your wallet address to any unclaimed airdrops that you are eligible for.
                We collect all this information and display it to you in a personalised dashboard where you can simply just click to claim.
              </p>
            </div>
          </ClickToClaimContainer>

          <ClickToClaimContainer css={{marginTop: '20px', '@bp0': {
        width: '720px',
        flexDirection: 'column-reverse',
        alignItems:"center",
    },  '@bp734': {
      width:"375px"
  }}}>
            <div style={{textAlign: 'left', Width: '50%', paddingRight: "5px"}}>
              <p style={{fontSize: '30px', marginTop: '0', marginBottom: '0', fontWeight: 'bold', paddingTop: '30px'}}>
                Earn from referrals
              </p>
              <p style={{fontSize: '22px', marginTop: '0', marginBottom: '20px', color: 'rgb(165, 168, 182)'}}>
                A reward for helping grow our community
              </p>
              <p style={{fontSize: '18px', marginTop: '0', marginBottom: '5px', lineHeight:"28px"}}>
                Missing out on an airdrop is like missing out on the chance to collect free cash, why not share the love with your friends and family.
                Help share FNDAIR using your unique code so that they too will never miss and airdrop again. By the way, you will also be rewarded with cold hard crypto currency 😃
              </p>
            </div>
            <div>
              <EarnPhoto src={Referral} style={{width: '380px'}}/>
            </div>
          </ClickToClaimContainer>
        </ParagraphBox>
        
        <Footer />
      </div>
    </>
  )
}
export default Landingpage
