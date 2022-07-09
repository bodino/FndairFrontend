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
            Tracking all the airdrops you're eligible for is hard. Every year, crypto users lose millions of dollars because they aren't aware of airdrops that they are eligible for.
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
              
                    What is an Airdrop?
                    <li>
                      An Airdrop is a mechanism for projects to distribute Goverance power to the community.
                      </li>
                      How does Fndair work?
                    <li>
                      We aggregate all the avaliable airdrops and display them to you, so that you ccann easily track your airdrops and make sure to claim them as soon as they are available.
                    </li>

                    How do I create an account?
                    <li>Just connect directly with your wallet, sign the verification message, and voila!</li>
                    How do I know if I'm eligible for an Airdrop?
                    <li>
                      Once you connect your wallet, all the airdrops associated with your wallet will be displayed in the portfolio page. You will also be able to keep track of multiple wallets.
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
