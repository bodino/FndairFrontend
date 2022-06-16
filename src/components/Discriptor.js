import { useConnect, useAccount } from 'wagmi'
import '../ui/dropdowns';
import { LinkBreak2Icon } from '@radix-ui/react-icons';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdowns';
import {
    ParagraphBox,
    HorizontalFlexBox,
    HorizontalFlexBoxWithColor,
    Slidebox,
    Top,
    Bottom,
    DiscriptorBox,
  } from '../ui/flexboxes'
var x = 0;
var walletarray = [3];



export function Discriptor({image,title,info}) {


  return (
  <DiscriptorBox>
    <div style={{ marginTop: "50px", marginBottom: '30px'}}>
    <img draggable="false" style={{ height:"100px", userDrag: "none"  }}src={image}></img>
   </div>

   <div style={{color: "rgb(255, 255, 255)",   paddingBottom: "20px"}}>
    <b>
    {title}
   </b>
   </div>

   <div style={{fontSize:"15px", marginInline: "60px",
    color: "rgb(165, 168, 182)",
    textAlign: "center"}}>
   {info}
   </div>

  </DiscriptorBox>
    
  )
}

export default Discriptor;
