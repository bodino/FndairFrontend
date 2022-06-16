import React from 'react'
import { useState, useEffect } from 'react'
import {useRecoilState} from 'recoil'
import { useAccount } from 'wagmi'
import { airDropListObject, protocolListObject } from '../hooks/recoil';
import Airdropbox from './Airdropbox';





export function Mapairdrops() {
    const [airDropList, setairDropList] = useRecoilState(airDropListObject)
    const [protocolList, setprotocolList] = useRecoilState(protocolListObject)


    return !airDropList ? (<h1></h1>) :     
        <> 
   
        {airDropList.map((item) =>(
            <>
         {item.amount > 0 ? <Airdropbox item = {item} protocolList = {protocolList}/> : <></>}
            </>
        ))}
       </>
};

export default Mapairdrops