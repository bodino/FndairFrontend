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
  PorfolioContainer
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
  signedMessageObject
} from '../hooks/recoil'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'
import Mapfreeairdrops from '../components/Mapfreeairdrops'

function Portfolio() {
  const { data: account } = useAccount()
  const [ENS, setENS] = useRecoilState(ENSListObject)
  const [airDropList, setairDropList] = useRecoilState(airDropListObject)
  const [signedMessage, setSignedMessage] = useRecoilState(signedMessageObject)
  const [protocolList, setprotocolList] = useRecoilState(protocolListObject)


  if (airDropList && account && protocolList) {
    return (
      <>
      <PorfolioContainer
    
      >
        <HorizontalFlexBoxWithColor
          css={{ alignItems: 'flex-start', minHeight: '0px' }}
        >
          <AirdropHorizontalFlexBox css={{ justifyContent: 'flex-start' }}>
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
                    <ParagraphBox css={{ paddingBottom: '10px' }}>
                      <b>Welcome Back {account.displayName}</b>
                    </ParagraphBox>
                  )
                } else {
                  return (
                  <ParagraphBox css={{ paddingBottom: '10px' }}>
                      <b>Welcome Back</b>
                    </ParagraphBox>
                  )
                }
                }}
              </ConnectButton.Custom>

              <ParagraphBox css={{ fontSize: '20px' }}>
                Total Claimed $4,235
              </ParagraphBox>
              <ParagraphBox css={{ fontSize: '20px', paddingBottom: '10px' }}>
                Wallets You Follow
              </ParagraphBox>
              <HorizontalFlexBox>
                <MapWallets/>
              </HorizontalFlexBox>
            </div>
          </AirdropHorizontalFlexBox>
        </HorizontalFlexBoxWithColor>
        <PorfolioSeperator />
        <AirdropHorizontalFlexBox css={{ justifyContent: 'flex-start' }}>
          <ParagraphBox css={{ fontSize: '25px', paddingBottom:'0px' }}>Unclaimed</ParagraphBox>
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{ justifyContent: 'flex-start',  paddingBottom:"20px", paddingLeft:"20px" }}>
        {airDropList[0].info ? <Mapairdrops />: <Mapfreeairdrops/>}          
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{ justifyContent: 'flex-start'  }}>
          <ParagraphBox css={{ fontSize: '25px', paddingBottom:'0px' }}>Claimed</ParagraphBox>
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{ justifyContent: 'flex-start', paddingLeft:"20px" }}>
          {/* <Mapairdrops /> */}
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
