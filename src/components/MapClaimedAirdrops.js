import React from 'react'
import { useState, useEffect } from 'react'
import {useRecoilState} from 'recoil'
import { useAccount } from 'wagmi'
import { airDropListObject, protocolListObject,claimedAirDropListObject } from '../hooks/recoil';
import ClaimedAirdropbox from './ClaimedAirdropbox';





export function MapClaimedAirdrops() {
    const [airDropList, setairDropList] = useRecoilState(airDropListObject)
    const [protocolList, setprotocolList] = useRecoilState(protocolListObject)
    const [claimedAirDropList, setclaimedAirDropList] = useRecoilState(claimedAirDropListObject)

    console.log(claimedAirDropList);

    return !claimedAirDropList ? (<h1></h1>) :     
        <> 
        {claimedAirDropList.map((item) =>(
            <>
         {item.tokAvail > 0 ? <ClaimedAirdropbox item = {item}/> : <></>}
            </>
        ))}
       </>
};

export default MapClaimedAirdrops