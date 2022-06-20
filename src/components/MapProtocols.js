import React from 'react'
import { useState, useEffect } from 'react'
import {useRecoilState} from 'recoil'
import { useAccount } from 'wagmi'
import { airDropListObject, protocolListObject } from '../hooks/recoil';
import ProtocolBox from './ProtocolBox';





export function MapProtocols() {
    const [airDropList, setairDropList] = useRecoilState(airDropListObject)
    const [protocolList, setprotocolList] = useRecoilState(protocolListObject)


    return !airDropList ? (<h1></h1>) :     
        <> 
   
        {airDropList.map((item) =>(
            <>
         {item.tokAvail > 0 ? <ProtocolBox item = {item}/> : <></>}
            </>
        ))}
       </>
};

export default MapProtocols