import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { WalletDropdownItem } from '../ui/walletDropdown'
import { RotateButton } from '../ui/animations'

import { useAccount } from 'wagmi'
import {Cross1Icon} from '@radix-ui/react-icons'
import { toast } from 'react-toastify'
axios.defaults.withCredentials = true;

export default function WalletDropdownBox({ checklogin, item, setAddress }) {
    const { data, isLoading, error } = useAccount()
    const [show, setShow] = useState(true)

    async function removeWallet(passedAddress) {
        await axios
        .delete(process.env.REACT_APP_BACKEND_API_LINK+'user/'+data.address+"/"+passedAddress, {})
        .then(function (response) {
            console.log('LETS GO!')
            checklogin()
        })
        .catch(function (error) {
        console.log(error)
        })
    }

    async function removeWalletOne() {
        console.log(item)
        if (data.address.toLowerCase() !== item ) {
        // setShow(false)
        removeWallet(item)
        }
        else {
          toast("Cannon't Remove Account Address")
        }
    }
    
    if (show) {
        return(
            <WalletDropdownItem>
                <div style={{paddingRight:"10px",}} onClick={() => {setAddress(item)}}>
                    {item.substring(0, 9)}...{item.substring(34, 42)}
                </div>
                <RotateButton>
                    <Cross1Icon  onClick={() => {
                        removeWalletOne()
                        .then(toast("Successfully deleted wallet address"))
                    }} style={{width:"18px", height:"18px", cursor: "pointer", '&:hover': {
                    color:"red"
                    },}}/>
                </RotateButton>
            </WalletDropdownItem>
        )
    }
}