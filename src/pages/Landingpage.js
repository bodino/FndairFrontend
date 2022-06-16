import { useState } from 'react'
import React from 'react'
import { useAccount } from 'wagmi'
import '../App.css'
import { css } from '../ui/stitches.config'
import { styled, darkTheme, createGlobalStyle } from '../ui/stitches.config'
import { Text, Button } from '../ui/text.js'
import { ThemeToggle } from '../ThemeToggle'
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
  MiniParagraphBox
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
} from '../ui/flexboxes'
import { BbSeperator, HorizontalSeperator } from '../ui/background'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/icons'

// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Footer from '../components/Footer'
import Timelines from '../components/Timelines'
const axios = require('axios');





function Landingpage() {


  var NewAirDrop = {
    Password: "CryptoAirdropFinderCool",
    Data:{}
  }
  
// var food = axios.post('http://localhost:3001/NewAirdrop', {
//   NewAirDrop
//   })

 





  return (
 
      <Content>
        <TopBox>
        <Navabar />
        <HorizontalFlexBoxWithColor>
          <div style={{display:"flex",flexDirection:"column"}}>
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
          <WalletConnect>Connect Wallet</WalletConnect>
          </MiniParagraphBox>
         </div>
          <ParagraphBox>
          
          <Bubbles></Bubbles>
          </ParagraphBox>
        </HorizontalFlexBoxWithColor>
        </TopBox>
        <BraggingBox>
          <HorizontalFlexBox>
            <InteranalParagraphBox>
              <Top>20+</Top>

              <Bottom> Protocol Integrations </Bottom>
            </InteranalParagraphBox>
   
            <InteranalParagraphBox>
              <Top>10+</Top>
              <Bottom>Address Per User </Bottom>
            </InteranalParagraphBox>

            <InteranalParagraphBox>
              <Top>$18~</Top>
              <Bottom>Unlimited Access</Bottom>
            </InteranalParagraphBox>
          </HorizontalFlexBox>
        </BraggingBox>
        <ParagraphBox css={{ flex: "1 1", textAlign:"center"}}>
          <div style={{paddingBottom:"10px"}}>
        <b>Simple 3 Steps</b>
        </div>
      
        <MiniParagraphBox css={{justifyContent:"center"}}>
          You Connect, We Find, You Profit
          </MiniParagraphBox>
        <Timelines/>
        </ParagraphBox>
     
        <Footer/>
      </Content>
  )
}
export default Landingpage
