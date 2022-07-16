import React from 'react'
import { useState, useEffect } from 'react'
import {useRecoilState} from 'recoil'
import { useAccount } from 'wagmi'
import {ethers} from 'ethers'
import { airDropListObject, protocolListObject,trackedWalletListObject,totalClaimedObject,claimedAirDropListObject } from '../hooks/recoil';
import { WalletConnect,StaticWalletConnect } from '../ui/text';
import Airdropbox from './Airdropbox';
import { FaceIcon, ImageIcon, PlusCircledIcon } from '@radix-ui/react-icons'
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
} from '../ui/navbardropdown'
import {Dialog,DialogTrigger, Button,DialogContent, DialogTitle,DialogDescription, Fieldset, Label, Input,Flex,DialogClose, IconButton   } from '../ui/Dialog'
import FollowedWallet from './FollowedWallet'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export function MapWallets() {
    const [airDropList, setairDropList] = useRecoilState(airDropListObject)
    const [protocolList, setprotocolList] = useRecoilState(protocolListObject)
    const [trackedWalletList, settrackedWalletListt] = useRecoilState(trackedWalletListObject)
    const [claimedAirDropList, setclaimedAirDropList] = useRecoilState(claimedAirDropListObject)
    const [totalClaimed, settotalClaimed] = useRecoilState(totalClaimedObject)

    const [address, setAddress] = useState('')
    const { data, isLoading, error } = useAccount()


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
          <WalletFlexBox css={{maxWidth:"300px", overflowX: "scroll", justifyContent:"flex-start", marginLeft:"20px",width: "",
}}>
        {trackedWalletList.map((item) =>(
            <>
            <FollowedWallet checklogin={checklogin}item={item}></FollowedWallet>
      
            </>
        ))}
        
        </WalletFlexBox>

     
 
      <Dialog>
    <DialogTrigger asChild>
    <PlusCircledIcon style={{width:"25px", height:"25px", marginLeft:"20px", cursor: "pointer"}}/>

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