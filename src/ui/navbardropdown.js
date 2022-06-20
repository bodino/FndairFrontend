import { styled, keyframes } from "./stitches.config";
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { violet, mauve, blackA } from '@radix-ui/colors';
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';

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
  
  const StyledContent = styled(DropdownMenuPrimitive.Content, {
    // width: 150,
    height:118.5,
    color:"$antibackground",
    fontSize:"$p1",
    padding:"11px",
    // mixBlendMode: "luminosity",
    backdropFilter: "blur(10px)",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    borderRadius:"5px",
    // opacity:".7",
    // width:"100px !important",
    background: "rgba(255, 255, 255, 0.3)",
    '@bp1': {
      display: "none",
    },
   
    
  
    
    
    '@media (prefers-reduced-motion: no-preference)': {
      animationDuration: '400ms',
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
  
  const itemStyles = {
    all: 'unset',
    justifyContent: 'center',
    fontSize: 13,
   
   
    // lineHeight: 1,
    color: "$antibackground",
    borderRadius: 5,
    border:"0px",
    display: 'flex',
    width:"100px",
    alignItems: 'center',
    // height: 50,
    // padding: '0 5px',
    position: 'relative',
    // paddingLeft: 5,
    userSelect: 'none',
    // borderWidth:'0px',
    transitionDuration: '200ms',

    '&[data-disabled]': {
      color: mauve.mauve8,
      pointerEvents: 'none',
    },
  
    '&:focus': {
      backgroundColor: "$buttoncolor",
      color: "$antibackground",
      borderWidth: "0px",
    },
  
    
  };
  
  const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
  const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, { ...itemStyles });
  const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, { ...itemStyles });
  const StyledTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, {
    '&[data-state="open"]': {
      backgroundColor: violet.violet4,
      color: violet.violet11,
      marginBottom:"100px",
     
    },
    ...itemStyles,
 
  });
  
  const StyledLabel = styled(DropdownMenuPrimitive.Label, {
    fontSize: 12,
    lineHeight: '25px',
    color: mauve.mauve11,
    
    
  });
  
  const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
    height: 1,
    backgroundColor: violet.violet6,
    margin: 5,
  });
  
  const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
    position: 'absolute',
    left: 0,
    width: 2,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  });
  
  const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
    fill: 'white',
  });
  
  // Exports
  export const DropdownMenu = DropdownMenuPrimitive.Root;
  export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
  export const DropdownMenuContent = StyledContent;
  export const DropdownMenuItem = StyledItem;
  export const DropdownMenuCheckboxItem = StyledCheckboxItem;
  export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
  export const DropdownMenuRadioItem = StyledRadioItem;
  export const DropdownMenuItemIndicator = StyledItemIndicator;
  export const DropdownMenuTriggerItem = StyledTriggerItem;
  export const DropdownMenuLabel = StyledLabel;
  export const DropdownMenuSeparator = StyledSeparator;
  export const DropdownMenuArrow = StyledArrow;