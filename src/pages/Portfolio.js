import { useEffect, useState, Fragment } from 'react'
import React from 'react'
import { useAccount } from 'wagmi'
import '../App.css'
import { css } from '../ui/stitches.config'
import { styled, darkTheme, createGlobalStyle } from '../ui/stitches.config'
import { Text } from '../ui/text.js'
import { ThemeToggle } from '../ThemeToggle'
import {
  BraggingBox,
  Content,
  Flexbox1,
  Header,
  IconBoxes,
  InteranalParagraphBox,
  NavabarContainer,
  PorfolioContainer,
  ReferralHeader,
  TopPorfolioFlexBox,
  SecondHalfFlexBox
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
import { ConnectButton } from '@rainbow-me/rainbowkit'
import {
  ParagraphBox,
  HorizontalFlexBox,
  HorizontalFlexBoxWithColor,
  AirdropHorizontalFlexBox,
  MiniParagraphBox,
  Top,
  Bottom,
  TestamonyBox,
  AirdropFlexBox,
  ReferralBox,
  PortfolioFlexBoxWithColor,
  PortfolioItemBox
} from '../ui/flexboxes'


import {
  BbSeperator,
  HorizontalSeperator,
  PorfolioSeperator,
} from '../ui/background'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/icons'

// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Footer from '../components/Footer'
import Mapairdrops from '../components/Mapairdops'
import MapWallets from '../components/MapWallets'
import MapProtocols from '../components/MapProtocols'
import { useEnsAddress } from 'wagmi'

import {
  airDropListObject,
  protocolListObject,
  ENSListObject,
  trackedWalletListObject,
  signedMessageObject,
  claimedAirDropListObject,
  totalClaimedObject,
  setClickedObject,
  setLogOutObject,
  totalRefferedObject
} from '../hooks/recoil'
import {
  useRecoilState,  
} from 'recoil'
import Mapfreeairdrops from '../components/Mapfreeairdrops'
import MapClaimedAirdrops from '../components/MapClaimedAirdrops'
import MapClaimedfreeairdrops from '../components/MapClaimedfreeairdrops'
import DemoAirdropboxFree from '../components/DemoAirdropboxFree'
import {
  PopupBackgroundLogin,
  PopupContainerLogin,
  ButtonContainer,
  CloseButton,
  ContentContainer,
  LeftContainer,
  IconContainer,
  Description,
  GraphContainer
} from '../ui/popup'

import useAnalyticsEventTracker from '../components/AnalyticsEventTracker'


function Portfolio() {
  const { data: account } = useAccount()
  const [ENS, setENS] = useRecoilState(ENSListObject)
  const [airDropList, setairDropList] = useRecoilState(airDropListObject)
  const [signedMessage, setSignedMessage] = useRecoilState(signedMessageObject)
  const [protocolList, setprotocolList] = useRecoilState(protocolListObject)
  const [claimedAirDropList, setclaimedAirDropList] = useRecoilState(claimedAirDropListObject)
  const [totalClaimed, settotalClaimed] = useRecoilState(totalClaimedObject)
  const [clicked, setClicked] = useRecoilState(setClickedObject)
  const [LogOut, setLogOut] = useRecoilState(setLogOutObject)
  const [totalReffered, settotalReffered] = useRecoilState(totalRefferedObject)

  //GA tracker
  const gaEventTracker = useAnalyticsEventTracker('Portfolio');
  
  if (airDropList && account && protocolList) {
    return (
      <>
      <PorfolioContainer
    
      >
        <PortfolioFlexBoxWithColor
          css={{ alignItems: 'flex-start', minHeight: '0px' }}
        >
          <TopPorfolioFlexBox>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <ConnectButton.Custom>
                {({ account, mounted, chain }) => {
                   if (mounted && account && chain) {
                  return (
                    <PortfolioItemBox css={{ paddingBottom: '10px', fontSize:"35px" }}>
                      <b>Welcome {account.displayName}</b>
                    </PortfolioItemBox>
                  )
                } else {
                  return (
                  <PortfolioItemBox css={{ paddingBottom: '10px' }}>
                      <b>Welcome</b>
                    </PortfolioItemBox>
                  )
                }
                }}
              </ConnectButton.Custom>

              <PortfolioItemBox css={{ fontSize: '25px', color:"#9a9a9a" }}>
                Total Claimed ${Number(parseFloat(totalClaimed).toFixed(2)).toLocaleString('en', {minimumFractionDigits: 2})}
              </PortfolioItemBox>
              <PortfolioItemBox css={{ fontSize: '20px', paddingBottom: '10px' }}>
                Wallets You Follow
              </PortfolioItemBox>
                <div style={{display:"flex", justifyContent:"flex-start", flexDirection:"row", alignItems:"center"}}>
                <MapWallets/>
                </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              
              <ReferralBox>
                <ReferralHeader css={{fontSize: '35px', marginTop:"30px"}}>
                  ${Number(parseFloat(totalReffered).toFixed(2)).toLocaleString('en', {minimumFractionDigits: 2})}
                </ReferralHeader>
                <ReferralHeader css={{fontSize: '20px', color:"rgb(154, 154, 154)"}}>
                  Earned from referrals 
                </ReferralHeader>
                <ReferralBox css={{minHeight:"45px", maxWidth:"300px", borderRadius:"10px",flexDirection:"row", marginTop:"20px",marginBottom:"20px",  '@bp918': {width:"200px"} }}>
                      <div style={{backgroundImage: "linear-gradient(45deg, #FFFFFF, rgb(27, 32, 48))", WebkitBackgroundClip: "text", WebkitTextFillColor:"transparent", backgroundSize: "100%", overflow: "hidden", width:"200px", marginLeft:"20px"}}>
                        https://fndair.com/{account.address}
                      </div>
                      <div onClick={() => {navigator.clipboard.writeText("https://fndair.com/"+account.address)}} style={{width:"80px", background:"rgb(13, 78, 123)", height:"45px",borderTopRightRadius:"10px",borderBottomRightRadius:"10px", alignItems:"center",display:"flex", justifyContent:"center", cursor: "pointer"}}>
                        Copy
                      </div>
                    </ReferralBox>
                    <ReferralHeader css={{fontSize: '14px', paddingBottom:"30px"}}>
                      Earn up to $40 instantly per referral 
                    </ReferralHeader>

              </ReferralBox>
              </div>
          </TopPorfolioFlexBox>
        </PortfolioFlexBoxWithColor>
        <PorfolioSeperator />
        <SecondHalfFlexBox>
        <AirdropHorizontalFlexBox css={{ }}>
          <ParagraphBox css={{ fontSize: '25px', paddingBottom:'0px' }}>Unclaimed</ParagraphBox>
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{   paddingBottom:"20px", paddingLeft:"20px", '@bp734': {
       paddingLeft:"0px",
      }, }}>
        {airDropList[0]?.info ? <Mapairdrops />: <Mapfreeairdrops/>}          
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{  }}>
          
          <ParagraphBox css={{ fontSize: '25px', paddingBottom:'0px' }}>Claimed</ParagraphBox>
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{  paddingBottom:"20px",paddingLeft:"20px",  '@bp734': {
       paddingLeft:"0px",
      }, }}>
        
        {claimedAirDropList[0]?.info ? <MapClaimedAirdrops />: <MapClaimedfreeairdrops/>}                 
        </AirdropHorizontalFlexBox>
        

        <AirdropHorizontalFlexBox css={{}}>
          <ParagraphBox css={{ fontSize: '25px', paddingBottom:'0px' }}>Protocols We Support</ParagraphBox>
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{paddingLeft:"20px", '@bp3': {
        width:"980px",
      }, '@bp734': {
       paddingLeft:"0px",
      }, }}>
          <MapProtocols />
        </AirdropHorizontalFlexBox>

        </SecondHalfFlexBox>
        
        <ParagraphBox css={{ flex: "1 1", textAlign:"center"}}/>

            <Footer/>

      </PorfolioContainer>
      </>
    )
  } else {
    return(
      <>
      <PorfolioContainer css={{ 
   
   filter: "blur(2px) brightness(50%)"}}
      >
        
        <PortfolioFlexBoxWithColor
          css={{  }}
        >
          <TopPorfolioFlexBox>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
             
                    <PortfolioItemBox css={{ paddingBottom: '10px', fontSize:"35px" }}>
                      <b>Welcome Vitalik.eth</b>
                    </PortfolioItemBox>
               
             

              <PortfolioItemBox css={{ fontSize: '25px', color:"#9a9a9a" }}>
                Total Claimed $1,782
              </PortfolioItemBox>
              <PortfolioItemBox css={{ fontSize: '20px', paddingBottom: '10px' }}>
                Wallets You Follow
              </PortfolioItemBox>
                <div style={{display:"flex", justifyContent:"flex-start", flexDirection:"row", alignItems:"center"}}>
                {/* <MapWallets/> */}
                </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              
              <ReferralBox><ReferralHeader css={{fontSize: '35px', marginTop:"30px"}}>
                      $1,281.69
                    </ReferralHeader>
                    <ReferralHeader css={{fontSize: '20px', color:"rgb(154, 154, 154)"}}>
                      Earned from referrals 
                    </ReferralHeader>
                    <ReferralBox css={{minHeight:"45px", maxWidth:"300px", borderRadius:"10px",flexDirection:"row", marginTop:"20px",marginBottom:"20px",  '@bp918': {
        width:"200px",
      }, }}>
                      <div style={{backgroundImage: "linear-gradient(45deg, #FFFFFF, rgb(27, 32, 48))", WebkitBackgroundClip: "text", WebkitTextFillColor:"transparent", backgroundSize: "100%", overflow: "hidden", width:"200px", marginLeft:"20px"}}>
                        https://fndair.com/0x123412351235123452
                      </div>
                      <div onClick={() => {navigator.clipboard.writeText("https://fndair.com/"+account.address)}} style={{width:"80px", background:"rgb(13, 78, 123)", height:"45px",borderTopRightRadius:"10px",borderBottomRightRadius:"10px", alignItems:"center",display:"flex", justifyContent:"center", cursor: "pointer"}}>
                        Copy
                      </div>
                    </ReferralBox>
                    <ReferralHeader css={{fontSize: '14px', paddingBottom:"30px"}}>
                      Earn up to $40 instantly per referral 
                    </ReferralHeader>

                   </ReferralBox>
              </div>
          </TopPorfolioFlexBox>
        </PortfolioFlexBoxWithColor>
        <PorfolioSeperator />
        <SecondHalfFlexBox>
        <AirdropHorizontalFlexBox css={{ }}>
          <ParagraphBox css={{ fontSize: '25px', paddingBottom:'0px' }}>Unclaimed</ParagraphBox>
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{   paddingBottom:"20px", paddingLeft:"20px", '@bp734': {
       paddingLeft:"0px",
      }, }}>
       <DemoAirdropboxFree/> <DemoAirdropboxFree/>
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{  }}>
          
          <ParagraphBox css={{ fontSize: '25px', paddingBottom:'0px' }}>Claimed</ParagraphBox>
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{  paddingBottom:"20px",paddingLeft:"20px",  '@bp734': {
       paddingLeft:"0px",
      }, }}>
        
        <DemoAirdropboxFree/> 
        </AirdropHorizontalFlexBox>
        

        <AirdropHorizontalFlexBox css={{}}>
          <ParagraphBox css={{ fontSize: '25px', paddingBottom:'0px' }}>Protocols We Support</ParagraphBox>
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{paddingLeft:"20px", '@bp734': {
       paddingLeft:"0px",
      }, }}>
        
        </AirdropHorizontalFlexBox>

        </SecondHalfFlexBox>
        
        <ParagraphBox css={{ flex: "1 1", textAlign:"center"}}/>

            <Footer/>

      </PorfolioContainer>

      <PopupBackgroundLogin>
            <PopupContainerLogin>
               
      <div style={{width:"280px", fontSize:"20px"}}> To View Your Portfolio Connect Your Wallet</div>
      <br></br>
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
   
            
             
            </PopupContainerLogin>
        </PopupBackgroundLogin>
    
      </>
    )
  }
}
export default Portfolio
