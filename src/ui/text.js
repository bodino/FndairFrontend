import { styled } from "./stitches.config";

export const Text = styled('span', {
    
    color:"$background",
    // fontSize:"$100",
    // height:"18px"
    display:"flex",
    justifyContent:"center",
     '&:focus': {
      backgroundColor: "$background",
      color: "$antibackground",
      borderWidth: "0px",
    },
})
export const RotateHamburger = styled('span', {
    transitionDuration: '100ms',

    
    '&:hover': {
        transform: 'rotate(90deg)'
      },
      
   
})
export const Button = styled('button', {
    color:"$buttoncolor",
    fontSize:"$100",
    backgroundColor:"$ButtonColor",
    // border: "2px solid $gray400 ",
    // borderRadius: "5px",
    '&:hover': {
        backgroundColor: '$colorsgray6',
      },
})

export const WalletConnect = styled('div', {
  color:"$antibackground",
  fontSize:"$p1",
  padding:"10px",
  mixBlendMode: "luminosity",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  borderRadius:"5px",
  // opacity:".7",
  // width:"100px !important",
  background: "rgba(255, 255, 255, 0.3)",
  border: "1px solid rgba(255, 255, 255, 0.4)",
  // border: "2px solid $gray400 ",
  // borderRadius: "5px",
  '&:hover': {
      // backgroundColor: '$colorsgray6',
      border: "1px solid",
      boxShadow:"4px 4px",
      cursor:"pointer",

    },
})

export const Name = styled('div', {
  color:"$buttoncolor",
  fontSize:"$50",
  paddingLeft:"25px",
  backgroundColor:"$ButtonColor",
  // border: "2px solid $gray400 ",
  // borderRadius: "5px",
  '&:hover': {
      backgroundColor: '$colorsgray6',
    },
})


export const Ptext = styled('div', {
  color:"$antibackground",
  fontSize:"$p1",
  paddingLeft:"25px",
  textAlign:"left",
  lineHeight: "1.8",
  // backgroundColor:"$antibackground",
  // border: "2px solid $gray400 ",
  // borderRadius: "5px",
  // '&:hover': {
  //     backgroundColor: '$colorsgray6',
  //   },
})


export const TesitmonyNamer = styled('div', {
 fontWeight:"800",
 fontSize:"50px",
 marginBottom:"20px",
 textShadow: "#467898 5px 5px",
})

export const ListNamers = styled('li', {
  paddingBottom:"20px",
 })



