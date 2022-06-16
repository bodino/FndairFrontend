import react from 'react'
import {atom} from 'recoil'

export const airDropListObject = atom({
    key: "airDropListObject",
    default: false
})

export const protocolListObject = atom({
    key: "protocolListObject",
    default: false
})

export const clickedObject = atom({
    key: "clickedObject",
    default: false
})

export const signedMessageObject = atom({
    key: "signedMessageObject",
    default: false
})

