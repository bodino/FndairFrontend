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
import useAnalyticsEventTracker from '../components/AnalyticsEventTracker'

//GA tracker
const gaEventTracker = useAnalyticsEventTracker('About');

function Portfolio() {
  return (
    <>
        <HorizontalFlexBoxWithColor style={{marginBottom: '0', paddingBottom: '0'}}>
          <ParagraphBox>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{paddingBottom: '0'}}>
                <b>About Us</b>
              </div>
              <BbSeperator />
            </div>
          </ParagraphBox>
          <ParagraphBox css={{ fontSize: '20px', lineHeight: '35px'}}>
            Tracking all the airdrops you're eligible for is hard. Every year, crypto users lose millions of dollars because they aren't aware of airdrops that they are eligible for.
            It's happened to us too. So we built Fndair to help you never miss an airdrop again.
          </ParagraphBox>
        </HorizontalFlexBoxWithColor>

        
       

        <BottomAboutFlexBox>
        <ParagraphBox style={{ minWidth: '0px' }}>
           
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0px' }}>
              <div style={{marginBottom: '5px'}}>
                <b>FAQ</b>
              </div>
              <div style={{display: 'flex', flecDirection: 'row'}}>
                <ParagraphBox css={{ fontSize: '20px', lineHeight: '35px', paddingInline:"0px", marginRight: '15px', minWidth: '50%' }}>
                    <h3 style={{marginBottom: "0"}}>What is an Airdrop?</h3>
                    <p style={{marginBottom: "0"}}>
                      An Airdrop is a mechanism for projects to distribute Goverance power to the community.
                    </p>

                    <h3 style={{marginBottom: "0"}}>How does Fndair work?</h3>
                    <p style={{marginBottom: "0"}}>
                      We aggregate all the avaliable airdrops and display them to you, so that you can easily track your airdrops and make sure to claim them as soon as they are available.
                    </p>

                    <h3 style={{marginBottom: "0"}}>How do I create an account?</h3>
                    <p style={{marginBottom: "0"}}>Just connect directly with your wallet, sign the verification message, and voila!</p>              
                  </ParagraphBox>
                  <ParagraphBox css={{ fontSize: '20px', lineHeight: '35px', paddingInline:"0px", minWidth: '50%' }}>
                    <h3 style={{marginBottom: "0"}}>How do I know if I'm eligible for an Airdrop?</h3>
                    <p style={{marginBottom: "0"}}>
                      Once you connect your wallet, all the airdrops associated with your wallet will be displayed in the portfolio page. You will also be able to keep track of multiple wallets.
                    </p>
                    
                    <h3 style={{marginBottom: "0"}}>How private is Fndair?</h3>
                    <p style={{marginBottom: "0"}}>
                      We believe your wallet is an extension of your identity. Thats why we take user privacy very seriously, FNDAIR onnly uses secure networks and takes particular care to ensure that your private information stays that way.
                    </p>
                  </ParagraphBox>
                </div>
            </div>
        </ParagraphBox>    
        
        </BottomAboutFlexBox>

        {/* <HorizontalFlexBoxWithColor style={{marginBottom: '0', height: '30px', justifyContent: 'flex-start', paddingTop: '0', paddingBottom: '0'}}>
          <ParagraphBox>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div>
                <b>Contact Us</b>
              </div>
              <BbSeperator />
            </div>
          </ParagraphBox>
          <ParagraphBox css={{ fontSize: '20px', lineHeight: '35px' }}>
            info@fndair.com
          </ParagraphBox>
        </HorizontalFlexBoxWithColor> */}

        <ParagraphBox css={{ flex: "1 1", textAlign:"center"}}></ParagraphBox>
        <Footer />
        </>
  )
}
export default Portfolio
