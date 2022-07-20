import { display } from "@mui/system";
import { styled } from "./stitches.config";

export const RotateButton = styled('span', {
    transitionDuration: '200ms',
    
    '&:hover': {
        transform: 'rotate(90deg)'
      },
})

export const RotateArrow = styled('button ', {
    transitionDuration: '200ms',
    
    '&:hover': {
        transform: 'rotate(180deg)'
      },
})

export const EnlargeButton = styled('span', {
    transitionDuration: '100ms',
    
    '&:hover': {
        transform: 'scale(1.2)'
      },
})