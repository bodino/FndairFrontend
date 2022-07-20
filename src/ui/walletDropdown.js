import { styled, keyframes } from "./stitches.config";
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { violet, mauve, blackA } from '@radix-ui/colors';

const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });
  
  const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  });
  
  const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });
  
  const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  });

const StyledTrigger = styled(DropdownMenuPrimitive.Trigger, {
    background: 'Black',
    height: "50px",
    width: "300px",
    color: "White",
    borderRadius:"5px 5px 0 0",
    marginLeft: "15px",
    marginTop: "15px",
    borderStyle: "solid",
    borderColor: "White",
    border: "1.5px",
    padding: "5px",
    fontSize: "20",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: "10px"

});

const StyledContent = styled(DropdownMenuPrimitive.Content, {
    
    width: "300px",
    color: "White",
    fontSize:"20px",
    backdropFilter: "blur(10px)",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    borderRadius:"0 0 5px 5px",
    // opacity:".7",
    // width:"100px !important",
    background: "rgba(255, 255, 255, 0.13)",
    
    '@media (prefers-reduced-motion: no-preference)': {
      animationDuration: '500ms',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationFillMode: 'forwards',
      willChange: 'transform, opacity',
      '&[data-state="open"]': {
        '&[data-side="top"]': { animationName: slideDownAndFade },
        '&[data-side="right"]': { animationName: slideLeftAndFade },
        '&[data-side="bottom"]': { animationName: slideUpAndFade },
        '&[data-side="left"]': { animationName: slideRightAndFade },
      },
    },
  });

  const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
      
  })

  const itemStyles = {
    all: 'unset',
    justifyContent: 'center',
    fontSize: 20,
    color:"$antibackground",
    border:"0px",
    display: 'flex',
    maxWidth:"300px",
    alignItems: 'center',
    position: 'relative',
    userSelect: 'none',
    transitionDuration: '200ms',
    justifyContent: 'space-between',
    padding: "6px",
    paddingTop: "3px",
    paddingBottom: "3px",
    paddingLeft: "10px",

    '&[data-disabled]': {
      color: mauve.mauve8,
      pointerEvents: 'none',
    },
  
    '&:focus': {
      backgroundColor: "rgba(150, 150, 150, 0.5)",
      borderWidth: "0px",
    },  
  };  
   
const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });

export const WalletDropdown = DropdownMenuPrimitive.Root;
export const WalletDropdownTrigger = StyledTrigger;
export const WalletDropdownContent = StyledContent;
export const WalletDropdownItem = StyledItem;
export const WalletDropdownArrow = DropdownMenuPrimitive.Arrow
export const WalletDropdownGroup = DropdownMenuPrimitive.Group