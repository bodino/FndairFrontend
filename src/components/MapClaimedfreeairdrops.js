import React from 'react'
import { useState, useEffect } from 'react'
import {useRecoilState} from 'recoil'
import { useAccount } from 'wagmi'
import { airDropListObject, protocolListObject,claimedAirDropListObject } from '../hooks/recoil';
import Airdropbox from './Airdropbox';
import AirdropboxFree from './AirdropboxFree';
import ClaimedAirdropboxFree from './ClaimedAirdropboxFree';





export function MapClaimedfreeairdrops() {
    const [airDropList, setairDropList] = useRecoilState(airDropListObject)
    const [protocolList, setprotocolList] = useRecoilState(protocolListObject)
    const [claimedAirDropList, setclaimedAirDropList] = useRecoilState(claimedAirDropListObject)


    return !claimedAirDropList ? (<h1></h1>) :     
        <> 
   
        {claimedAirDropList.map((item) =>(
            <>
         {item ? <ClaimedAirdropboxFree item = {item}/> : <></>}
            </>
        ))}
       </>
};

export default MapClaimedfreeairdrops