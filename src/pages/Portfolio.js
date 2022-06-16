import { useState } from 'react'
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
import {
  ParagraphBox,
  HorizontalFlexBox,
  HorizontalFlexBoxWithColor,
  AirdropHorizontalFlexBox,
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
import Mapairdrops from '../components/Mapairdops'







function Portfolio() {
    const axios = require('axios');
    const [{ data: accountData }, disconnect] = useAccount({
        fetchEns: true,
    })
  return (
 
      <Content>
        <Navabar />
        <TesitmonyNamer>Available To Claim Now</TesitmonyNamer>
        <AirdropHorizontalFlexBox>
           
          <Mapairdrops/> 
        </AirdropHorizontalFlexBox>
        <TesitmonyNamer>Available To Claim Now</TesitmonyNamer>


        <Footer/>
      </Content>
  )
}
export default Portfolio
