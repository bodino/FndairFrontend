import { useEffect, useState } from 'react'
import React from 'react'
import { useAccount } from 'wagmi'
import '../App.css'
import { css } from '../ui/stitches.config'
import { styled, darkTheme, createGlobalStyle } from '../ui/stitches.config'
import { Text, Button } from '../ui/text.js'
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
  TopPorfolioFlexBox
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
  ReferralBox
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
  totalClaimedObject
} from '../hooks/recoil'
import {
  useRecoilState,  
} from 'recoil'
import Mapfreeairdrops from '../components/Mapfreeairdrops'
import MapClaimedAirdrops from '../components/MapClaimedAirdrops'
import MapClaimedfreeairdrops from '../components/MapClaimedfreeairdrops'

function Portfolio() {
  const { data: account } = useAccount()
  const [ENS, setENS] = useRecoilState(ENSListObject)
  const [airDropList, setairDropList] = useRecoilState(airDropListObject)
  const [signedMessage, setSignedMessage] = useRecoilState(signedMessageObject)
  const [protocolList, setprotocolList] = useRecoilState(protocolListObject)
  const [claimedAirDropList, setclaimedAirDropList] = useRecoilState(claimedAirDropListObject)
  const [totalClaimed, settotalClaimed] = useRecoilState(totalClaimedObject)



  if (airDropList && account && protocolList) {
    return (
      <>
      <PorfolioContainer
    
      >
        <HorizontalFlexBoxWithColor
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
                    <ParagraphBox css={{ paddingBottom: '10px', fontSize:"35px" }}>
                      <b>Welcome {account.displayName}</b>
                    </ParagraphBox>
                  )
                } else {
                  return (
                  <ParagraphBox css={{ paddingBottom: '10px' }}>
                      <b>Welcome</b>
                    </ParagraphBox>
                  )
                }
                }}
              </ConnectButton.Custom>

              <ParagraphBox css={{ fontSize: '25px', color:"#9a9a9a" }}>
                Total Claimed ${totalClaimed.toFixed(2).toLocaleString()}
              </ParagraphBox>
              <ParagraphBox css={{ fontSize: '20px', paddingBottom: '10px' }}>
                Wallets You Follow
              </ParagraphBox>
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
              
              <ReferralBox><ReferralHeader css={{fontSize: '35px', marginTop:"30px"}}>
                      $1,281.69
                    </ReferralHeader>
                    <ReferralHeader css={{fontSize: '20px', color:"rgb(154, 154, 154)"}}>
                      Earned from referrals 
                    </ReferralHeader>
                    <ReferralBox css={{minHeight:"45px", maxWidth:"300px", borderRadius:"10px",flexDirection:"row", marginTop:"20px",marginBottom:"20px" }}>
                      <div style={{backgroundImage: "linear-gradient(45deg, #FFFFFF, rgb(27, 32, 48))", WebkitBackgroundClip: "text", WebkitTextFillColor:"transparent", backgroundSize: "100%", overflow: "hidden", width:"200px", marginLeft:"20px"}}>
                        https://asdfasdfsadfasdmflkasdlfasdffasdfas
                      </div>
                      <div style={{width:"80px", background:"rgb(13, 78, 123)", height:"45px",borderTopRightRadius:"10px",borderBottomRightRadius:"10px", alignItems:"center",display:"flex", justifyContent:"center"}}>
                        Copy
                      </div>
                    </ReferralBox>
                    <ReferralHeader css={{fontSize: '14px', paddingBottom:"30px"}}>
                      Earn up to $40 instantly per referral 
                    </ReferralHeader>

                   </ReferralBox>
              </div>
          </TopPorfolioFlexBox>
        </HorizontalFlexBoxWithColor>
        <PorfolioSeperator />
        <AirdropHorizontalFlexBox css={{ justifyContent: 'flex-start' }}>
          <ParagraphBox css={{ fontSize: '25px', paddingBottom:'0px' }}>Unclaimed</ParagraphBox>
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{ justifyContent: 'flex-start',  paddingBottom:"20px", paddingLeft:"20px" }}>
        {airDropList[0]?.info ? <Mapairdrops />: <Mapfreeairdrops/>}          
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{ justifyContent: 'flex-start'  }}>
          
          <ParagraphBox css={{ fontSize: '25px', paddingBottom:'0px' }}>Claimed</ParagraphBox>
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{ justifyContent: 'flex-start', paddingLeft:"20px" }}>
        
        {claimedAirDropList[0]?.info ? <MapClaimedAirdrops />: <MapClaimedfreeairdrops/>}                 
        </AirdropHorizontalFlexBox>
        

        <AirdropHorizontalFlexBox css={{ justifyContent: 'flex-start'  }}>
          <ParagraphBox css={{ fontSize: '25px', paddingBottom:'0px' }}>Protocols We Support</ParagraphBox>
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{ justifyContent: 'flex-start', paddingLeft:"20px" }}>
          <MapProtocols />
        </AirdropHorizontalFlexBox>
        
        <ParagraphBox css={{ flex: "1 1", textAlign:"center"}}/>

            <Footer/>

      </PorfolioContainer>
      </>
    )
  } else {
    return(
    <>
    <PorfolioContainer css={{    background: "rgb(27, 32, 48)"}}>
              {/* <ParagraphBox css={{ flex: "1 1", textAlign:"center"}}/> */}

    </PorfolioContainer>
    </>
    )
  }
}
export default Portfolio
