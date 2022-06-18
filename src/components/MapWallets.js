import React from 'react'
import { useState, useEffect } from 'react'
import {useRecoilState} from 'recoil'
import { useAccount } from 'wagmi'
import { airDropListObject, protocolListObject,trackedWalletListObject } from '../hooks/recoil';
import { WalletConnect,StaticWalletConnect } from '../ui/text';
import Airdropbox from './Airdropbox';
import { FaceIcon, ImageIcon, PlusCircledIcon } from '@radix-ui/react-icons'




export function MapWallets() {
    const [airDropList, setairDropList] = useRecoilState(airDropListObject)
    const [protocolList, setprotocolList] = useRecoilState(protocolListObject)
    const [trackedWalletList, settrackedWalletListt] = useRecoilState(trackedWalletListObject)


    return !trackedWalletList ? (<h1></h1>) :     
        <> 

        {trackedWalletList.map((item) =>(
            <>
             <StaticWalletConnect css={{width:"100px", marginLeft:"20px"}}>
             {item.substring(0, 5)}...{item.substring(38, 42)}
             </StaticWalletConnect>
            </>
        ))}

    <PlusCircledIcon style={{width:"25px", height:"25px", marginLeft:"20px", cursor: "pointer"}}/>
       </>
};

export default MapWallets