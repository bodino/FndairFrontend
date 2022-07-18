import { useState } from 'react';
import React from 'react';
import { css } from '../ui/stitches.config';
import {styled, darkTheme, createGlobalStyle} from '../ui/stitches.config';
import {Text, Button} from '../ui/text.js';
import { Example } from '../components/Example'
import { ThemeProvider } from 'next-themes';
import { RightItemsBox, LeftSmallItemsBox,LeftLargeItemsBox, IconBoxes, FooterContainer, FooterPagesContainer, FooterPages } from '../ui/flexboxes'
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { ThemeToggle } from '../ThemeToggle'
import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive'
import logoLight from "../images/LogioLight.png";
import logoDark from "../images/LogoDark.png";
import { useTheme } from "next-themes";
import {BigLogo, SmallLogo} from '../ui/text.js'
import { Link } from 'react-router-dom'



import {
    TwitterLogoIcon,
    Pencil1Icon,
    GitHubLogoIcon,
    HomeIcon,
    HamburgerMenuIcon,
  } from '@radix-ui/react-icons';
import Verticalnavbarcomp from './Verticlenavbarcomp';

  const StyledSeparator = styled(SeparatorPrimitive.Root, {
    backgroundColor: "$buttoncolor",
    '&[data-orientation=horizontal]': { height: 1, width: '50%' },
    '&[data-orientation=vertical]': { height: '50%', width: 1 },
    alignSelf: 'center',
  });
  import useAnalyticsEventTracker from '../components/AnalyticsEventTracker'

  //GA tracker
  const gaEventTracker = useAnalyticsEventTracker('Footer');
  
  console.log(ThemeProvider);
  // Exports
  export const Separator = StyledSeparator;

function Footer() {
  var logo;
  
  //generate state variable for homeclick status
  const [homeClick, setHomeClick] = useState(true);
  const [writingClick, setWritingClick] = useState(false);

  //create function to handle homeclick
  const handleHomeClick = () => {
    setHomeClick(true);
    setWritingClick(false);
  }
  //create function to handle writingclick
  const handleWritingClick = () => {
    setHomeClick(false);
    setWritingClick(true);
  }


  return (
    <FooterContainer>
      <div style={{marginTop: '30px'}}>
        <BigLogo src={'/VectorSmalLogo.svg'} style={{height: '1.5', width: '1.5'}}></BigLogo> 
        <SmallLogo src={'/Logo.svg'} style={{height: '55px', width: '260px'}}></SmallLogo> 
      </div>
      <FooterPagesContainer>
        <Link to="/" style={{textDecoration:"none", color: 'white'}}><FooterPages>HOME</FooterPages></Link>
        <Link to="/portfolio" style={{textDecoration:"none", color: 'white'}}><FooterPages>Portfolio</FooterPages></Link>
        <Link to="/pricing" style={{textDecoration:"none", color: 'white'}}><FooterPages>Pricing</FooterPages></Link>
        <Link to="/about" style={{textDecoration:"none", color: 'white'}}><FooterPages>About</FooterPages></Link>
      </FooterPagesContainer>
      <FooterPagesContainer>
        <Link to="/about" style={{textDecoration:"none", color: 'white'}}><FooterPages onClick={() => gaEventTracker('contact from footer')}>Contact</FooterPages></Link>
        <Link to="/about" style={{textDecoration:"none", color: 'white'}}><FooterPages onClick={() => gaEventTracker('privacy page')}>Privacy</FooterPages></Link>
        <FooterPages>Blog</FooterPages>
        <FooterPages>Terms of use</FooterPages>
      </FooterPagesContainer>
      <LeftLargeItemsBox style={{marginTop: '30px'}}>
        <IconBoxes style={{paddingRight: '10px'}}>
          <GitHubLogoIcon style={{height: '30', width: '30'}}/>
        </IconBoxes>
      
        <IconBoxes>
          <TwitterLogoIcon style={{height: '30', width: '30'}}/>
        </IconBoxes>
      </LeftLargeItemsBox>
   


    </FooterContainer>
  );
}
export default Footer;
