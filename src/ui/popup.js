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

export const PopupContainer = styled('div', {
    width: '55vw',
    height: '45vh',
    borderRadius: '12px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
})

export const ButtonContainer = styled('div', {
    display: 'flex',
    justifyContent: "flex-end"
})

export const CloseButton = styled('button', {
    backgroundColor: 'transparent',
    color: 'black',
    boreder: 'none',
    fontSize: '25px',
    cursor: 'pointer'
})

export const ContentContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center'
})

export const LeftContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    height: '100%'
})

export const IconContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center'
})

export const Description = styled('p', {
    color: 'Black',
    fontFamily: "Inter, Arial",
    fontSize: "15px",
    alignItems: "left"
})

export const GraphContainer = styled('div', {
    width: '70%',
    height: '100%',
    paddingLeft: '7px'
})