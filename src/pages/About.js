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
  AboutImageContainer
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
       

        <BottomAboutFlexBox>
        <ParagraphBox style={{ minWidth: '0px' }}>
           
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div>
                <b>FAQ</b>
              </div>
              <ParagraphBox css={{ fontSize: '20px', lineHeight: '35px', paddingInline:"0px" }}>
                  <h3 style={{marginBottom: "0"}}>What is an Airdrop?</h3>
                  <p style={{marginBottom: "0"}}>
                    An Airdrop is a mechanism for projects to distribute Goverance power to the community.
                  </p>

                  <h3 style={{marginBottom: "0"}}>How does Fndair work?</h3>
                  <p style={{marginBottom: "0"}}>
                    We aggregate all the avaliable airdrops and display them to you, so that you ccann easily track your airdrops and make sure to claim them as soon as they are available.
                  </p>

                  <h3 style={{marginBottom: "0"}}>How do I create an account?</h3>
                  <p style={{marginBottom: "0"}}>Just connect directly with your wallet, sign the verification message, and voila!</p>

                  <h3 style={{marginBottom: "0"}}>How do I know if I'm eligible for an Airdrop?</h3>
                  <p style={{marginBottom: "0"}}>
                    Once you connect your wallet, all the airdrops associated with your wallet will be displayed in the portfolio page. You will also be able to keep track of multiple wallets.
                  </p>
                  
                  <h3 style={{marginBottom: "0"}}>How private is Fndair?</h3>
                  <p style={{marginBottom: "0"}}>
                    We believe your wallet is an extension of your identity. Thats why we take user privacy very seriously.
                  </p>              
                </ParagraphBox>
            </div>
          </ParagraphBox>
          <AboutImageContainer>
            <img style={{ width: '490px' }} src={Mockup}></img>
          </AboutImageContainer>
          
        
        </BottomAboutFlexBox>
        <ParagraphBox css={{ flex: "1 1", textAlign:"center"}}></ParagraphBox>
        <Footer />
        </>
  )
}
export default Portfolio
