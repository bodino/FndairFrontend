import { styled } from "./stitches.config";

export const LeftLargeItemsBox = styled('div', {

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
    width: "1380",
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
    minWidth:"450px",
    paddingBottom:"40px",
   
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

    paddingBottom: "10px",
    paddingTop:"10px",
    marginTop:"-40px",
    marginBottom:"40px",
    borderRadius:"10px",
    width: "1380",
    // maxWidth: "1000px",
    flexDirection: "column",
    background:"rgb(255,255,255,0.4)",
    mixBlendMode: "luminosity",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    
    '@bp3': {
        width:"970px",
      },
   
    
})

export const InteranalParagraphBox = styled('div', {

    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"",
    fontSize:"30px",
    width: "1380",
    // maxWidth: "1000px",
    flexDirection: "column",
    height: "80px",
    color:"#FFFFFF",
    
    '@bp3': {
        width:"1000px",
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
    paddingTop:"10px",
    width: "1380",
    // maxWidth: "1000px",
    flexDirection: "row",
    
    '@bp3': {
        width:"1000px",
      },
   
    
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
    width: "200px",
    // maxWidth: "1000px",
    flexDirection: "column",
    minHeight:"200px",
    background: "$secondaryHighLight",
    borderRadius: "10px",
    fontWeight: "300",
    margin:"10px",
    
    '@bp3': {
        width:"200x",
      },
   
    
})

export const AirdropHorizontalFlexBox = styled('div', {
    justifyContent:"center",

    display: "flex",
    alignItems:"center",
    padding:"",
    paddingTop:"10px",
    width: "1380",
    // maxWidth: "1000px",
    flexDirection: "row",
    flexWrap: "wrap",
  
    '@bp3': {
        width:"1000px",
      },
   
    
})

export const TopBox = styled('div', {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(45deg, rgb(116, 27, 107), rgb(0, 80, 124))"

})

export const DiscriptorBox = styled('div', {
    // width: "100px",
    height:"340px",
    Width:"300px",
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
    alignItems:"flex-start",
    padding:"",
    height:"720px",
    marginInline:"15px",
   
    borderRadius:"10px",
    width: "1380",
    // maxWidth: "1000px",
    flexDirection: "column",
    background:"rgb(255,255,255,0.4)",
    mixBlendMode: "luminosity",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  
    
    '@bp3': {
        width:"420px",
      },
   
    
})


export const PaymentTextBox = styled('div', {

    display: "flex",
    // alignItems:"center",
    fontSize:"$header1",
    color:"$antibackground",
    fontFamily: "Inter, Arial",
    textAlign:"left",
    paddingInline: "50px",
    paddingTop:"40px",

    flexDirection: "column",
    paddingBottom:"40px",
   
})

export const PaymentTextBoxNormal = styled('div', {

    display: "flex",
    // alignItems:"center",
    fontSize:"$header1",
    color:"$antibackground",
    fontFamily: "Inter, Arial",
    fontSize:"19px",
    textAlign:"left",
    paddingInline: "50px",
    // maxWidth: "1000px",
    // textShadow: "#467898 5px 5px",
    flexDirection: "column",
    paddingBottom:"20px",
   
})