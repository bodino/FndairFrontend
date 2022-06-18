import { useState } from 'react'
import React from 'react'
import { useAccount } from 'wagmi'
import '../App.css'
import { css } from '../ui/stitches.config'
import { styled, darkTheme, createGlobalStyle } from '../ui/stitches.config'
import { Text, Button } from '../ui/text.js'
import { ThemeToggle } from '../ThemeToggle'

import * as SeparatorPrimitive from '@radix-ui/react-separator'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { ThemeProvider } from 'next-themes'
import { violet } from '@radix-ui/colors'
import { Example } from '../components/Example'
import Connected from '../components/Connected'
import Navabar from '../components/Navabar'
import Steps from 'rc-steps'
import {
  Name,
  Ptext,
  WalletConnect,
  TesitmonyNamer,
  ListNamers,
} from '../ui/text.js'
import {
  HorizontalFlexBox,
  HorizontalFlexBoxWithColor,
  Slidebox,
  Top,
  Bottom,
  TestamonyBox,
  Content,
  ParagraphBox,
  MiniParagraphBox,
  TopBox,
  PriceBox,
  PaymentTextBox,
  PaymentTextBoxNormal,
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
import Timelines from '../components/Timelines'

function Pricing() {
  return (
   <>
      

        <ParagraphBox css={{ paddingBottom: '10px', paddingTop: '50px' }}>
          <b>Premium Product, Fair Price </b>
        </ParagraphBox>

        <MiniParagraphBox css={{ paddingBottom: '60px' }}>
          Average user finds $200
        </MiniParagraphBox>
        <HorizontalFlexBoxWithColor css={{ justifyContent: 'space-around' }}>
          <PriceBox>
            <PaymentTextBox>$0 / Forever</PaymentTextBox>
            <PaymentTextBoxNormal>
              <div style={{ fontSize: '25px' }}>
                <b>
                  <i>FREE</i> Mode
                </b>
              </div>
              check before joining
            </PaymentTextBoxNormal>
            <PaymentTextBoxNormal>
              <ul>
                <ListNamers>Watch up to 5 address </ListNamers>{' '}
                <ListNamers>View value eligible to claim </ListNamers>{' '}
                <ListNamers>Get email alerts on new airdrops</ListNamers>
              </ul>
            </PaymentTextBoxNormal>
            <WalletConnect
              css={{
                alignSelf: 'center',
                marginBottom: '10px',
                width: '300px',
              }}
            >
              Free, Just Connect Your Wallet
            </WalletConnect>
          </PriceBox>
          <PriceBox style={{ width: '500px', border: '2px solid #ffff' }}>
            <PaymentTextBox>Only $18 / month</PaymentTextBox>
            <PaymentTextBoxNormal>
              <div style={{ fontSize: '25px' }}>
                <b>
                  <i>WAGMI</i> MODE
                </b>
              </div>
              for web3 maxis
            </PaymentTextBoxNormal>
            <PaymentTextBoxNormal>
              <ul>
                <ListNamers>Track up to 10 accounts</ListNamers>
                <ListNamers>View airdrops from dozens of protocols</ListNamers>
                <ListNamers>Claim directly from the site</ListNamers>
                <ListNamers>Email alerts (coming soon)</ListNamers>
                <ListNamers>Privacy preserving, login with wallet</ListNamers>
              </ul>
            </PaymentTextBoxNormal>

            <WalletConnect
              css={{
                alignSelf: 'center',
                marginBottom: '10px',
                width: '300px',
              }}
            >
              ​ 1 Month - $28 per month
            </WalletConnect>
            <WalletConnect
              css={{
                alignSelf: 'center',
                marginBottom: '10px',
                width: '300px',
              }}
            >
              {' '}
              6 Months - $24 per month
            </WalletConnect>
            <WalletConnect
              css={{
                alignSelf: 'center',
                marginBottom: '10px',
                width: '300px',
              }}
            >
              12 Months - $18 per month
            </WalletConnect>
            <PaymentTextBoxNormal
              css={{
                fontSize: '11px',
                alignSelf: 'center',
                textAlign: 'center',
                paddingTop: '10px',
              }}
            >
              Pay On Ethereum, Optimism, Arbitrum, and Matic. All payments
              conducted on chain and are final
            </PaymentTextBoxNormal>
          </PriceBox>
        </HorizontalFlexBoxWithColor>
   
        <ParagraphBox css={{ flex: "1 1", textAlign:"center"}}>
         
        </ParagraphBox>
        <Footer />
    
     
        </>
  
    
   
  )
}
export default Pricing
