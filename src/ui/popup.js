import { styled } from "./stitches.config";

export const PopupBackground = styled('div', {
    position: 'fixed',
    left: '-1vw',
    top: "-1vh",
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgb(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center"
})

export const PopupBackgroundLogin = styled('div', {
    position: 'fixed',
    top:"110px",
    width: '100vw',
    height: 'calc(100% - 110px)',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
 


})

export const PopupContainer = styled('div', {
    width: '55vw',
    height: '45vh',
    borderRadius: '12px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: '10px'
})

export const PopupContainerLogin = styled('div', {
    width: '400px',
    height: '200px',
    borderRadius: '12px',
    background: "linear-gradient(45deg, rgb(116, 27, 107), rgb(0, 80, 124))",
    // mixBlendMode: "luminosity",
    // backdropFilter: "blur(15px)",
    filter: "drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px)",
    justifyContent:"center",
    alignItems:"center",
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
})

export const ButtonContainer = styled('div', {
    display: 'flex',
    justifyContent: "flex-end",
    alignItems: 'flex-start'
})

export const CloseButton = styled('button', {
    backgroundColor: 'transparent',
    color: 'black',
    boreder: 'none',
    fontSize: '25px',
    cursor: 'pointer'
})

export const ContentContainer = styled('div', {
    paddingTop: '12px',
    paddingLeft: '5px',
    maxHeight: '100%',
    maxWidth: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center'
})

export const LeftContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '28%',
    maxHeight: '100%'
})

export const IconContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '5px'
})

export const Description = styled('p', {
    color: 'Black',
    fontFamily: "Inter, Arial",
    fontSize: "15px",
    alignItems: "left"
})

export const GraphContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '100%',
    paddingLeft: '7px'
})