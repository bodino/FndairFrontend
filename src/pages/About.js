import { useState } from 'react'
import React from 'react'
import { useAccount } from 'wagmi'
import '../App.css'
import Mockup from '../images/Mockup.png'

import {
  BraggingBox,
  Content,
  Flexbox1,
  Header,
  IconBoxes,
  InteranalParagraphBox,
  NavabarContainer,
} from '../ui/flexboxes'
import { BbSeperator, HorizontalSeperator } from '../ui/background'

import Navabar from '../components/Navabar'

import {
  ParagraphBox,
  HorizontalFlexBox,
  HorizontalFlexBoxWithColor,
  AirdropHorizontalFlexBox,
  BottomAboutFlexBox,
  Top,
  Bottom,
  TestamonyBox,
  TopBox,
} from '../ui/flexboxes'

import Footer from '../components/Footer'

function Portfolio() {
  return (
    <>

        <HorizontalFlexBoxWithColor>
          <ParagraphBox>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div>
                <b>About Us</b>
              </div>
              <BbSeperator />
            </div>
          </ParagraphBox>
          <ParagraphBox css={{ fontSize: '20px', lineHeight: '35px' }}>
            Tracking all the airdrops your eligible is hard. Every year millions of dollars are lost from crypto users who aren't aware of airdrops they are eligible for.
            It's happened to us too. So we built Fndair to help you never miss an airdrop again.
          </ParagraphBox>
        </HorizontalFlexBoxWithColor>
       

        <BottomAboutFlexBox
         
        >


<ParagraphBox style={{ minWidth: '0px' }}>
           
           <div style={{ display: 'flex', flexDirection: 'column' }}>
               <div>
               <b>FAQ</b>
               </div>
               <ParagraphBox css={{ fontSize: '20px', lineHeight: '35px', paddingInline:"0px" }}>
              
                    Whats and Airdrop
                    <li>
                      An Airdrop is a mechanism for projects to distribute Goverance power to the community.
                      </li>
                      How does Fndair work?
                    <li>
                      We aggregate all the avaliable airdrops and display them to you
                    </li>

                    How do I create an account
                    <li>Just connect directly with your wallet, sign the verification message, and voala!</li>
                    How can I see if I'm eligible for an Airdrop?
                    <li>
                      You can check your eligibility by connecting your wallet and checking the portfolio page
                    </li>
                  
                    How private is Fndair?
                    <li>
                    We believe your wallet is an extension of your identity. Thats why we take user privacy very seriously.
                    </li>

              
           </ParagraphBox>
             </div>
                
          
           </ParagraphBox>
           <img style={{ width: '500px' }} src={Mockup}></img>
        
        </BottomAboutFlexBox>
        <ParagraphBox css={{ flex: "1 1", textAlign:"center"}}>
         
         </ParagraphBox>
        <Footer />
        </>
  )
}
export default Portfolio
