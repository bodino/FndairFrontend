import { useConnect, useAccount, useTransaction } from 'wagmi'
import '../ui/dropdowns'
import {
  CookieIcon,
  CrossCircledIcon,
  FaceIcon,
  HamburgerMenuIcon,
  HomeIcon,
  Pencil1Icon,
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkBreak2Icon,
} from '@radix-ui/react-icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/navbardropdown'
import Connected from './Connected'
import makeBlockie from 'ethereum-blockies-base64'
import { BigNumber } from 'ethers'
import { styled, darkTheme } from '../ui/stitches.config'
import { RotateHamburger, Text } from '../ui/text'
import { Flexbox1 } from '../ui/flexboxes'
import { IconBoxes } from '../ui/flexboxes'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { css } from '../ui/stitches.config'
import * as SeparatorPrimitive from '@radix-ui/react-separator';




var x = 0
var walletarray = [3]

function Verticalnavbarcomp({homeClick,handleHomeClick,writingClick,handleWritingClick}) {
  return (
    <DropdownMenu>
               
               <RotateHamburger>
      <DropdownMenuTrigger>
     

       <HamburgerMenuIcon/>
      

      </DropdownMenuTrigger>
      </RotateHamburger>
      <DropdownMenuContent>

      <DropdownMenuItem onClick={handleHomeClick} css={{backgroundColor: homeClick ? "$buttoncolor" : ""}}>       
        <HomeIcon />
      </DropdownMenuItem>
      <DropdownMenuItem onClick={handleWritingClick} css={{backgroundColor: writingClick ? "$buttoncolor" : ""}}>        
        <Pencil1Icon />
      </DropdownMenuItem>
  
      <DropdownMenuItem>       

        <GitHubLogoIcon />
      </DropdownMenuItem>

      <DropdownMenuItem>       

      
        <TwitterLogoIcon/>
      </DropdownMenuItem>


     

    

        {/* {error && <div>{error?.message ?? 'Failed to connect'}</div>} */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default Verticalnavbarcomp
