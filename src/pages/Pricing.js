import { useState } from 'react'
import React from 'react'
import { useAccount,useContractWrite,useContract,useSigner } from 'wagmi'
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
import {
  PaySeperator
} from '../ui/background'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Footer from '../components/Footer'
import Mapairdrops from '../components/Mapairdops'
import Timelines from '../components/Timelines'
import abi from '../abi/USDC.json'
import { ethers } from 'ethers'


function Pricing() {

  const { data:signerData, error, isLoading, refetch } = useSigner()
  const contract = useContract({
    addressOrName: '0x46D14FA8fE262aDaB112F34852AaB430C53565e5',
    contractInterface: abi.abi,
    signerOrProvider: signerData,
  });

  const {
    write,
    data: mintResponse,
    status: status,
  } = useContractWrite(
    {
      addressOrName: '0x46D14FA8fE262aDaB112F34852AaB430C53565e5',
      contractInterface: abi.abi,
      signerOrProvider: signerData,
    },
    "Join",
    {
      args: 1,
      overrides: { value: ethers.utils.parseEther('0.5') },
      onError: (error) => {
        console.log(error.message)
      },
    }
  );

  return (
   <>
      

        <ParagraphBox css={{ paddingBottom: '10px', paddingTop: '50px' }}>
          <b>Premium Product, Fair Price </b>
        </ParagraphBox>

        <MiniParagraphBox css={{ paddingBottom: '60px',fontSize:"18px"  }}>
          Average user finds $200
        </MiniParagraphBox>
        <HorizontalFlexBoxWithColor css={{ justifyContent: 'center' }}>
          <PriceBox>
            
            <PaymentTextBoxNormal>
              <div style={{ fontSize: '25px',fontWeight: "400", marginTop:"20px"}}>       
                  1 Month
              </div>
            </PaymentTextBoxNormal>
            <PaymentTextBox><div style={{ fontSize: '35px',fontWeight: "400",position:"relative", top:"2px"}}>$</div><div style={{ fontSize: '60px',fontWeight: "400", position:"relative", top:"8px"}}>28</div> <div style={{ fontSize: '18px',fontWeight: "400"}}>&nbsp;/ month</div></PaymentTextBox>
            <div style={{ fontSize: '15px',fontWeight: "400"}}>
             
            Billed Monthly
       
         </div>
         <PaySeperator></PaySeperator>
            <PaymentTextBoxNormal css={{alignSelf:"flex-start", marginLeft:"25px"}}>
              <ul>
                <ListNamers>Watch up to 10 address </ListNamers>{' '}
                <ListNamers>View value eligible to claim </ListNamers>{' '}
                <ListNamers>Claim directly from the site </ListNamers>{' '}
                <ListNamers>View hidden airdrops </ListNamers>{' '}
                <ListNamers>Get email alerts on new airdrops</ListNamers>
              </ul>
            </PaymentTextBoxNormal>
            <WalletConnect
              css={{
                alignSelf: 'center',
                marginBottom: '10px',
                width: '187px',
              }}
            >
              Join Now
            </WalletConnect>
          </PriceBox>

          <PriceBox css={{height:"500px"}}>
            
            <PaymentTextBoxNormal>
              <div style={{ fontSize: '25px',fontWeight: "400", marginTop:"20px"}}>       
                  6 Months
              </div>
            </PaymentTextBoxNormal>
            <PaymentTextBox><div style={{ fontSize: '35px',fontWeight: "400",position:"relative", top:"2px"}}>$</div><div style={{ fontSize: '60px',fontWeight: "400", position:"relative", top:"8px"}}>24</div> <div style={{ fontSize: '18px',fontWeight: "400"}}>&nbsp;/ month</div></PaymentTextBox>
            <div style={{ fontSize: '15px',fontWeight: "400"}}>
             
            Billed Semi Annually
       
         </div>
         <PaySeperator></PaySeperator>
            <PaymentTextBoxNormal css={{alignSelf:"flex-start", marginLeft:"25px"}}>
              <ul>
                <ListNamers>Watch up to 10 address </ListNamers>{' '}
                <ListNamers>View value eligible to claim </ListNamers>{' '}
                <ListNamers>Claim directly from the site </ListNamers>{' '}
                <ListNamers>View hidden airdrops </ListNamers>{' '}
                <ListNamers>Get custom poap for your support </ListNamers>{' '}
                <ListNamers>Get email alerts on new airdrops</ListNamers>
              </ul>
            </PaymentTextBoxNormal>
            <WalletConnect
              css={{
                alignSelf: 'center',
                marginBottom: '10px',
                width: '187px',
              }}
            >
              Join Now
            </WalletConnect>
          </PriceBox>

          <PriceBox>
            
            <PaymentTextBoxNormal>
              <div style={{ fontSize: '25px',fontWeight: "400", marginTop:"20px"}}>       
                  12 Months
              </div>
            </PaymentTextBoxNormal>
            <PaymentTextBox><div style={{ fontSize: '35px',fontWeight: "400",position:"relative", top:"2px"}}>$</div><div style={{ fontSize: '60px',fontWeight: "400", position:"relative", top:"8px"}}>18</div> <div style={{ fontSize: '18px',fontWeight: "400"}}>&nbsp;/ month</div></PaymentTextBox>
            <div style={{ fontSize: '15px',fontWeight: "400"}}>
             
            Billed Annually
       
         </div>
         <PaySeperator></PaySeperator>
            <PaymentTextBoxNormal css={{alignSelf:"flex-start", marginLeft:"25px"}}>
              <ul>
                <ListNamers>Watch up to 10 address </ListNamers>{' '}
                <ListNamers>View value eligible to claim </ListNamers>{' '}
                <ListNamers>Claim directly from the site </ListNamers>{' '}
                <ListNamers>View hidden airdrops </ListNamers>{' '}
                <ListNamers>Get email alerts on new airdrops</ListNamers>
              </ul>
            </PaymentTextBoxNormal>
            <WalletConnect
            onClick={() => {
              write({ 
                args: [
                "0x0bBD3a3d952fddf9A8811bC650445B7515a4B9e6", 
              ], overrides: {
                value: ethers.utils.parseEther("0.01")
              }});
            }}
              css={{
                alignSelf: 'center',
                marginBottom: '10px',
                width: '187px',
              }}
            >
              Join Now
            </WalletConnect>
          </PriceBox>
      
      
          
        </HorizontalFlexBoxWithColor>
   
        <ParagraphBox css={{ paddingBottom: '10px', paddingTop: '50px' }}>
          <b>Not sure which one to choose?  </b>
        </ParagraphBox>

        <MiniParagraphBox css={{ paddingBottom: '60px', fontSize:"18px" }}>
        Find your airdrop for free        
        </MiniParagraphBox>
        
        <PriceBox css={{height:"314px", width:"775px", background: "rgba(0, 0, 0, 0.45)", flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>

           
              <div>
            <PaymentTextBoxNormal>
              <div style={{ fontSize: '25px',fontWeight: "500", marginTop:"20px"}}>       
                  Free
              </div>
            </PaymentTextBoxNormal>
            <PaymentTextBox css={{paddingBottom:"40px"}}><div style={{ fontSize: '60px',fontWeight: "400",position:"relative", top:"5px"}}>$</div><div style={{ fontSize: '130px',fontWeight: "400", position:"relative", top:"25px"}}>0</div> <div style={{ fontSize: '30px',fontWeight: "400"}}>&nbsp;/ month</div></PaymentTextBox>
            </div>
            <div>
            <PaymentTextBoxNormal css={{}}>
                <ListNamers>Free for life</ListNamers>
                <ListNamers>Watch up to 5 address </ListNamers>{' '}
                <ListNamers>View value eligible to claim </ListNamers>{' '}
                <ListNamers>Get email alerts on new airdrops</ListNamers>
            </PaymentTextBoxNormal>
            <WalletConnect
              css={{
                alignSelf: 'center',
                marginBottom: '10px',
                width: '187px',
              }}
            >
              Try For Free
            </WalletConnect>
            </div>
          </PriceBox>


        <ParagraphBox css={{ flex: "1 1", textAlign:"center"}}>
         
        </ParagraphBox>
        <Footer />
    
     
        </>
  
    
   
  )
}
export default Pricing


