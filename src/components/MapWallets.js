import React from 'react'
import { useState, useEffect } from 'react'
import {useRecoilState} from 'recoil'
import { useAccount } from 'wagmi'
import {ethers} from 'ethers'
import { airDropListObject, protocolListObject,trackedWalletListObject,totalClaimedObject,claimedAirDropListObject } from '../hooks/recoil';
import { WalletConnect,StaticWalletConnect } from '../ui/text';
import Airdropbox from './Airdropbox';
import { FaceIcon, ImageIcon, PlusCircledIcon, ChevronDownIcon, Cross1Icon } from '@radix-ui/react-icons'
import axios from 'axios';
import Verticalnavbarcomp from './Verticlenavbarcomp';
import {IconBoxes,HorizontalFlexBox,WalletFlexBox} from '../ui/flexboxes'
import {
  CookieIcon,
  CrossCircledIcon,
  HamburgerMenuIcon,
  HomeIcon,
  Pencil1Icon,
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkBreak2Icon,
  Cross2Icon,

} from '@radix-ui/react-icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/navbardropdown';
import {
  WalletDropdown,
  WalletDropdownTrigger,
  WalletDropdownContent,
  WalletDropdownItem,
  WalletDropdownArrow,
  WalletDropdownGroup
} from '../ui/walletDropdown';
import { RotateButton, RotateArrow, EnlargeButton } from '../ui/animations'
import {Dialog,DialogTrigger, Button,DialogContent, DialogTitle,DialogDescription, Fieldset, Label, Input,Flex,DialogClose, IconButton   } from '../ui/Dialog'
import FollowedWallet from './FollowedWallet'
import WalletDropdownBox from './DropdownWallets'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.withCredentials = true;




export function MapWallets(props) {
    const [airDropList, setairDropList] = useRecoilState(airDropListObject)
    const [protocolList, setprotocolList] = useRecoilState(protocolListObject)
    const [trackedWalletList, settrackedWalletListt] = useRecoilState(trackedWalletListObject)
    const [claimedAirDropList, setclaimedAirDropList] = useRecoilState(claimedAirDropListObject)
    const [totalClaimed, settotalClaimed] = useRecoilState(totalClaimedObject)

    const [address, setAddress] = useState(props.displayAddress)
    const { data, isLoading, error } = useAccount()
    const [rotate, setRotate] = useState('false');

    console.log(address)

    function convertObjectToArray(res) {
      var eligableAirdrops = [];
      var claimedAirdrops = [];
      var totalClaimed = 0;
  
            var x =0;
            var y =0;
            for (var j =0; j < res.data.wallet.length; j++){
              console.log(res.data);
              for(var i =0; i < res.data.wallet[j].claimed.length; i++){
                res.data.wallet[j].claimed[i].address = res.data.wallet[j]._id;
                claimedAirdrops[y] =  res.data.wallet[j].claimed[i];
                totalClaimed = res.data.wallet[j].claimed[i].valueUsd + totalClaimed;
                y++;
              }
            for(var i =0; i < res.data.wallet[j].toClaim.length; i++){
            console.log(res.data.wallet[j]._id)
              res.data.wallet[j].toClaim[i].address = res.data.wallet[j]._id;
              eligableAirdrops[x] =  res.data.wallet[j].toClaim[i];

              x++;
            }
          }
            console.log(res.data.followedAddresses)
            settotalClaimed(totalClaimed)
            setclaimedAirDropList(claimedAirdrops)
            setairDropList(eligableAirdrops)
            settrackedWalletListt(res.data.followedAddresses)
    }
  
    async function checklogin() {
      await axios
        .get(process.env.REACT_APP_BACKEND_API_LINK+'login', {})
        .then(function (res) {
          if ((res.data.loggedin = true)) {
              convertObjectToArray(res);
              console.log(res)
          }
        })
        .catch(function (error) {
      
        })
    }
 

    async function updateWallet(passedAddress) {
      console.log(passedAddress)
        
        if (ethers.utils.isAddress(passedAddress)){
          console.log(passedAddress)
          await axios
          .put(process.env.REACT_APP_BACKEND_API_LINK+'user/'+data.address+"/"+passedAddress, {
          })
          .then(function (response) {
            console.log(response)
            checklogin()
          })
          .catch(function (error) {
          })
        } else {
          console.log("error")
          toast("Address is not valid");
        }
      }
      if (trackedWalletList){
    return (    
     
      <> 
          {/* <WalletFlexBox css={{maxWidth:"300px", overflowX: "scroll", justifyContent:"flex-start", marginLeft:"20px",width: "",}}>
        {trackedWalletList.map((item) =>(
            <>
            <FollowedWallet checklogin={checklogin} item={item}></FollowedWallet>
      
            </>
        ))}
        
        </WalletFlexBox> */}
        <WalletDropdown>
          <WalletDropdownTrigger style={{borderStyle: "solid", fontSize: "20px"}} >
            {address.substring(0, 9)}...{address.substring(34, 42)}
            <ChevronDownIcon style={{width:"32px", height:"32px", marginRight:"4px"}} />
          </WalletDropdownTrigger>
          <WalletDropdownContent>
              {trackedWalletList.map(item => (
                <>
                  <WalletDropdownBox checklogin={checklogin} item={item} setAddress={setAddress}></WalletDropdownBox>
                </>
              ))}
          </WalletDropdownContent>
        </WalletDropdown>
     
 
      <Dialog>
    <DialogTrigger asChild>
    <EnlargeButton><PlusCircledIcon style={{width:"35px", height:"35px", marginLeft:"20px", marginTop: "15px", cursor: "pointer"}}/></EnlargeButton>

    </DialogTrigger>
    <DialogContent >
      <DialogTitle>Add Wallet</DialogTitle>
      <DialogDescription>
       Add a wallet you'd like to track
      </DialogDescription>
      
      <Fieldset>
        <Label htmlFor="username">Wallet Address</Label>
        <Input onChange={event => setAddress(event.target.value)} id="username" placeholder="0x0000000000000000000000000000000000000000" />
      </Fieldset>
      <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
        <DialogClose onClick={() => {
                      updateWallet(address)
                      .then(toast("New Wallet address has been added"))
                    }} asChild>
          <Button variant="green">Save</Button>
        </DialogClose>
      </Flex>
      <DialogClose asChild>
        <IconButton aria-label="Close">
          <Cross2Icon />
        </IconButton>
      </DialogClose>
    </DialogContent>
  </Dialog>

  <ToastContainer />

       </>
    );
   }
  }

export default MapWallets