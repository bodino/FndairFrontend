import { display } from "@mui/system";
import { styled } from "./stitches.config";

export const LeftLargeItemsBox = styled('div', {

    display: "flex",
    alignContent: "center",
    alignItems: "center",
    padding:"",
    height:"50px",
    paddingInline:"20px",
    // '@bp2': {
    //     display: "none",
    //   },

   
})
export const CenterLargeItemsBox = styled('div', {

    display: "flex",
    alignContent: "center",
    alignItems: "center",
    padding:"",
    height:"50px",
    paddingInline:"20px",
    '@bp2': {
        display: "none",
      },

   
})

export const Breaker = styled('div', {

    display: "none",
    alignContent: "center",
    alignItems: "center",
    padding:"",
    height:"50px",
    paddingInline:"20px",
    '@bp2': {
        display: "flex",
      },

   
})

export const LeftSmallItemsBox = styled('div', {

    display: "flex",
    alignContent: "center",
    alignItems: "center",
    padding:"",
    height:"50px",
    paddingInline:"20px",
    '@bp1': {
        display: "none",
      },

   
})

export const RightItemsBox = styled('div', {

    display: "flex",
    alignContent: "center",
    alignItems: "center",
    padding:"",
    height:"50px",
    paddingTop:"10px",
    paddingInline:"20px",
 

   
})

export const Content = styled('div', {
    height: 'inherit',
    display:"flex", flexDirection:"column", 
    '@bp3': {
        alignItems:"center",
      },
   
   
})


export const NavabarContainer = styled('div', {

    display: "flex",
    
     justifyContent: "space-between",
     alignItems:"center",
    padding:"",
    height:"50px",
    paddingTop:"15px",
    width: "100%",
    // maxWidth: "1000px",
    flexDirection: "row",
    height: "80px",
    marginBottom: "15px",
    
   

    minHeight: "80px",
    '@bp3': {
        width:"1000px",
      },
   
    
})


export const IconBoxes = styled('div', {

    display: "flex",
    // alignContent: "center",
    marginRight:"5px",
    marginLeft:"5px",
    justifyContent:"center",
    alignItems:"center",
    minWidth:"50px",
    height:"39.5px",
    fontFamily:"Inter, Arial",
    fontSize:"$title",
    color:"$antibackground",
    // border: "1px solid $background",
    
    // border: " solid",
    borderRadius: "5px",
    transition: 'background-color 200ms',
  
    
    '&:hover': {
        // backgroundColor: "$buttoncolor",
        // border: "1px solid $antibackground",

      },
})



export const ParagraphBox = styled('div', {

    display: "flex",
    // alignItems:"center",
    fontSize:"$header1",
    color:"$antibackground",
    fontFamily: "Inter, Arial",
    width: "1380",
    textAlign:"left",
    paddingInline: "20px",
    // maxWidth: "1000px",
    // textShadow: "#467898 5px 5px",
    flexDirection: "column",
    // minWidth:"450px",
    paddingBottom:"40px",
    // '@bp0': {
    //     minWidth:"300px",
    //     textAlign:"center"
    //   },
   
})

export const ReferralHeader = styled('div', {

    display: "flex",
    // alignItems:"center",
    fontSize:"$header1",
    color:"$antibackground",
    fontFamily: "Inter, Arial",
    textAlign:"center",
    paddingInline: "20px",
    marginBottom:"10px",
    // maxWidth: "1000px",
    // textShadow: "#467898 5px 5px",
    flexDirection: "column",

    
  
   
})

export const MiniParagraphBox = styled('div', {

    display: "flex",
    // alignItems:"center",
    fontSize:"15px",
    fontFamily: "Inter, Arial",
    width: "1380",
    textAlign:"left",
    paddingInline: "20px",
    color: "rgb(165, 168, 182)",
    // maxWidth: "1000px",
    // textShadow: "#467898 5px 5px",
   
    paddingBottom:"40px",
    fontWeight:"5",
   
    


   
    
})

export const BraggingBox = styled('div', {

    display: "flex",
    alignItems:"center",
    padding:"",
    backdropFilter: "blur(15px)",


    paddingBottom: "10px",
    paddingTop:"10px",
    marginTop:"-40px",
    marginBottom:"40px",
    borderRadius:"10px",
    width: "1380",
    // maxWidth: "1000px",
    flexDirection: "column",
    background:"rgb(255,255,255,0.3)",
    mixBlendMode: "luminosity",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    width:"980px",
    '@bp0': {
        width:"90%",
    }

   
    
})

export const InteranalParagraphBox = styled('div', {

    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"",
    fontSize:"30px",

    // maxWidth: "1000px",
    flexDirection: "column",
    height: "80px",
    color:"#FFFFFF",
    
    '@bp3': {
   
      },
   
    
})



export const InteranalParagraphBoxDisapear = styled('div', {

    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"",
    fontSize:"30px",

    // maxWidth: "1000px",
    flexDirection: "column",
    height: "80px",
    color:"#FFFFFF",
    
    '@bp630': {
        display:"none"
      },
   
    
})

export const InteranalParagraphBoxDisapearLater = styled('div', {

    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"",
    fontSize:"30px",

    // maxWidth: "1000px",
    flexDirection: "column",
    height: "80px",
    color:"#FFFFFF",
    
    '@bp400': {
        display:"none"
      },
   
    
})
export const Top = styled('div', {

 
    fontSize:"$header1",
    color:"#FFFFFF",
    
})

export const Bottom = styled('div', {

    fontSize:"$title",

 
    
  
})

export const HorizontalFlexBox = styled('div', {

    display: "flex",
    alignItems:"center",
    padding:"",
   
    width: "100%",
    justifyContent:"space-evenly",
    // maxWidth: "1000px",
    flexDirection: "row",
 

      '&::-webkit-scrollbar': { 
        display: "none", 
    }
    
   
   
    
})

export const WalletFlexBox = styled('div', {

    display: "flex",
    alignItems:"center",
    padding:"",
   
    justifyContent:"flex-start",
    // maxWidth: "1000px",
    flexDirection: "row",
 

      '&::-webkit-scrollbar': { 
        display: "none", 
    }
    
   
   
    
})

export const HorizontalFlexBoxWithColor = styled('div', {

    display: "flex",
    alignItems:"center",
    
   
    paddingTop:"20px",
    paddingBottom:"20px",
    marginBottom: "15px",
    width: "1380",
    // maxWidth: "1000px",
    flexDirection: "row",
    minHeight:"350px",
    // background: "$secondaryHighLight",
    borderRadius: "10px",
    // paddingInline:"75px",
    fontWeight: "400",
    justifyContent:"space-between",
    '@bp3': {
        width:"1000px",
      },

      '@bp0': {
        flexDirection:"column",
      },
   
    
})

export const PortfolioFlexBoxWithColor = styled('div', {

    display: "flex",
    alignItems:"center",
    
   
    paddingTop:"20px",
    paddingBottom:"20px",
    marginBottom: "15px",
    width: "1380",
    // maxWidth: "1000px",
    flexDirection: "row",
    minHeight:"350px",
    // background: "$secondaryHighLight",
    borderRadius: "10px",
    // paddingInline:"75px",
    fontWeight: "400",
    justifyContent:"space-between",
    '@bp3': {
        width:"1000px",
      },

      '@bp0': {
        flexDirection:"column",
      },

      '@bp734': {
        width:"375px",
      },
   
    
})



export const BottomAboutFlexBox = styled('div', {

    display: "flex",
    alignItems:"center",
    
    flexDirection: 'row', justifyContent: 'flex-start',
    paddingTop:"20px",
    paddingBottom:"20px",
    marginBottom: "15px",
    maxWidth: "1000px",
    minHeight:"350px",
    // background: "$secondaryHighLight",
    borderRadius: "10px",
    // paddingInline:"75px",
    fontWeight: "400",
    '@bp0': {
       flexDirection:"column",
      },

   
    
})

export const VertTime = styled('div', {
    display:"none",

      '@bp0': {
        display:"flex"
      },
   
    
})

export const HortTime = styled('div', {
    display:"flex",
    '@bp0': {
      display:"none"
    },
 
  
})


export const Slidebox = styled('div', {

    display: "flex",
    alignItems:"flex-start",
    padding:"",
    // maxWidth: "1000px",
    flexDirection: "column",
    BackgroundColor: "$buttoncolor",
    height: "150px",
    Width: "150px"
    
})

export const TestamonyBox = styled('div', {

    display: "flex",
    alignItems:"center",
    fontSize:"20px",
    margin:"10px",
    height:"80px",
    width: "1380",
 
    // maxWidth: "1000px",
    flexDirection: "row",
    textShadow: "none",
    background: "$secondaryHighLight",
    borderRadius: "10px",
    paddingInline:"50px",
    fontWeight: "400",
    
    '@bp3': {
        width:"900px",
      },
      
   
    
})

export const AirdropFlexBox = styled('div', {

    display: "flex",
    alignItems:"center",
    width: "380px",
    boxShadow: "0px 4px 10px 1px rgba(0, 0, 0, 0.3)",
    // maxWidth: "1000px",
    flexDirection: "row",
    minHeight:"200px",
    background: "rgb(41, 46, 65)",
    borderRadius: "30px",
    fontWeight: "300",
    margin:"10px",
    
    '@bp3': {
        width:"200x",
      },
   
    
})

export const ReferralBox = styled('div', {
    display: "flex",
    alignItems:"center",
    width: "400px",
    boxShadow: "0px 4px 10px 1px rgba(0, 0, 0, 0.3)",
    // maxWidth: "1000px",
    flexDirection: "column",
    minHeight:"200px",
    background: "rgb(41, 46, 65)",
    borderRadius: "30px",
    fontWeight: "300",
    margin:"10px",
    marginRight:"18px",
    
    '@bp918': {
        width:"300px",
      },
    
})

export const AirdropHorizontalFlexBox = styled('div', {
    justifyContent:"flex-start",

    display: "flex",
    alignItems:"center",

    paddingTop:"10px",
    width: "1380",
    // maxWidth: "1000px",
    flexDirection: "row",
    flexWrap: "wrap",
  
    '@bp3': {
        width:"1000px",
      },

    //   '@bp0': {
    //     justifyContent:"center",
    //     paddingLeft:"0px !important",
    //   },
   
    
})


export const SecondHalfFlexBox = styled('div', {
   
    display:"flex",
    flexDirection:"column",
    maxWidth:"1000px",
    '@bp734': {
        maxWidth: "375px",
      },
   
    
})
export const TopPorfolioFlexBox = styled('div', {
    justifyContent:"space-between",

    display: "flex",
    alignItems:"center",
    padding:"",
    paddingTop:"10px",
    width:"100vw",
    // maxWidth: "1000px",
    flexDirection: "row",
    flexWrap: "wrap",
  
    // '@bp0': {
    //     // justifyContent:"center",
    //     alignItems:"flex-start",
    //     flexDirection:"column",
    //     width:"100vw",
    //   },
   
    
})

export const TopBox = styled('div', {
    width: "100vw",
    display: "flex",
    flex:"1 1",
    flexDirection: "column",
  
    alignItems: "center",
    background: "linear-gradient(45deg, rgb(116, 27, 107), rgb(0, 80, 124))"

})

export const DiscriptorBox = styled('div', {
    // width: "100px",
    height:"340px",
    width:"300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    fontSize:"19px",
    // margin:"20px",
    alignItems: "center",
    background: "rgb(41, 46, 65)",
    borderRadius:"10px",

})


export const PriceBox = styled('div', {

    display: "flex",
    alignItems:"center",
    padding:"",
    height:"446px",
    marginInline:"15px",
   
    borderRadius:"10px",
    width: "1380",
    // maxWidth: "1000px",
    flexDirection: "column",
    background:"rgb(255,255,255,0.4)",
    mixBlendMode: "luminosity",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  
    
    '@bp3': {
        minWidth:"305px",
      },
   
    
})


export const PaymentTextBox = styled('div', {

    display: "flex",
    // alignItems:"center",
    fontSize:"$header1",
    color:"$antibackground",
    fontFamily: "Inter, Arial",
    textAlign:"center",
    alignItems:"flex-end",
  

    flexDirection: "row",
    paddingBottom:"5px",
   
})

export const PaymentTextBoxNormal = styled('div', {

    display: "flex",
    // alignItems:"center",
    fontSize:"$header1",
    color:"$antibackground",
    fontFamily: "Inter, Arial",
    fontSize:"19px",
    textAlign:"left",
    // paddingInline: "50px",
    // maxWidth: "1000px",
    // textShadow: "#467898 5px 5px",
    flexDirection: "column",
   
})

export const AirdropInfo = styled('div', {

    display: "flex",
    // alignItems:"center",
    fontSize:"$header1",
    color:"$antibackground",
    fontFamily: "Inter, Arial",
    fontSize:"19px",
    height:"200px",
    flex:"1 1",
    textAlign:"left",
    alignItems:"center",
    width: "150px",
    
    // maxWidth: "1000px",
    // textShadow: "#467898 5px 5px",
    flexDirection: "column",
   
   
})


export const AirdropIcon = styled('div', {

   minWidth: "170px",
   display:"flex",
   justifyContent:"center",
   alignItems:"center",
   
})

export const AirdropInfoBox = styled('div', {

    Width: "210px",
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"flex-start"
    
 })



export const ProtocolBox = styled('div', {

    display: "flex",
    // alignItems:"center",
    fontSize:"$header1",
    color:"$antibackground",
    fontFamily: "Inter, Arial",
    fontSize:"19px",
    boxShadow: "0px 4px 10px 1px rgba(0, 0, 0, 0.3)",
    borderRadius: "60px",
    height:"65px",
    flex:"1 1",
    textAlign:"left",
    alignItems:"center",
    width: "228px",
    
    // maxWidth: "1000px",
    // textShadow: "#467898 5px 5px",
    flexDirection: "column",
   
   
})

export const ProtocolFlexBox = styled('div', {

    display: "flex",
    alignItems:"center",
    boxShadow: "0px 4px 10px 1px rgba(0, 0, 0, 0.3)",
    // maxWidth: "1000px",
    flexDirection: "row",
    minHeight:"65px",
    textAlign:"left",
    background: "rgb(41, 46, 65)",
    borderRadius: "30px",
    fontWeight: "300",
    margin:"10px",
    width: "228px",
    
    '@bp3': {
        width:"200x",
      },
   
    
})


export const PorfolioContainer = styled('div', {

    background: 'rgb(27, 32, 48)',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flex: '1 1',
    
    '@bp0': {
        alignItems: 'flex-start',
      },

      '@bp734': {
        alignItems: 'center',
      },
   
    
})