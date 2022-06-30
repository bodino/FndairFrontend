import { styled } from "./stitches.config";

export const PopupBackground = styled('div', {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgb(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'centre',
    alignItems: 'centre'
})

export const PopupContainer = styled('div', {
    width: '50vw',
    height: '30vh',
    borderRadius: '12px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    padding: '10px'
})

export const CloseButton = styled('button', {
    backgroundColor: 'transparent',
    boreder: 'none',
    fontSize: '25px',
    cursor: 'pointer'
})