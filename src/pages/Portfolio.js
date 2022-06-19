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
import { useEnsAddress } from 'wagmi'

import {
  airDropListObject,
  protocolListObject,
  ENSListObject,
  trackedWalletListObject,
} from '../hooks/recoil'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'

function Portfolio() {
  const { data: account } = useAccount()
  const [ENS, setENS] = useRecoilState(ENSListObject)

  if (account) {
    return (
      <div
        style={{
          background: 'rgb(27, 32, 48)',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
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
                {({ account, mounted }) => {
                  return (
                    <ParagraphBox css={{ paddingBottom: '10px' }}>
                      <b>Welcome Back {account.displayName}</b>
                    </ParagraphBox>
                  )
                }}
              </ConnectButton.Custom>

              <ParagraphBox css={{ fontSize: '20px' }}>
                Total Claimed $4,235
              </ParagraphBox>
              <ParagraphBox css={{ fontSize: '20px', paddingBottom: '10px' }}>
                Wallets You Follow
              </ParagraphBox>
              <HorizontalFlexBox>
                <MapWallets />
              </HorizontalFlexBox>
            </div>
          </AirdropHorizontalFlexBox>
        </HorizontalFlexBoxWithColor>
        <PorfolioSeperator />
        <AirdropHorizontalFlexBox css={{ justifyContent: 'flex-start' }}>
          <ParagraphBox css={{ fontSize: '25px', paddingBottom:'0px' }}>Unclaimed</ParagraphBox>
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{ justifyContent: 'flex-start',  paddingBottom:"20px", paddingLeft:"20px" }}>
          <Mapairdrops />
          <Mapairdrops />
          
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{ justifyContent: 'flex-start'  }}>
          <ParagraphBox css={{ fontSize: '25px', paddingBottom:'0px' }}>Claimed</ParagraphBox>
        </AirdropHorizontalFlexBox>

        <AirdropHorizontalFlexBox css={{ justifyContent: 'flex-start', paddingLeft:"20px" }}>
          <Mapairdrops />
        </AirdropHorizontalFlexBox>
       
        <Footer />
      </div>
    )
  }
}
export default Portfolio
