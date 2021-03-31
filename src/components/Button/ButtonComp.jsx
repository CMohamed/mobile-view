import React from "react";
import Button from '@material-ui/core/Button';
import {ButtonCompContainer} from "./ButtonComp.style";

export const ButtonComp = ({label, onClick, color, backgroundColor}) => {
    return (
        <ButtonCompContainer>
            <Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={onClick}
            >
                {label}
            </Button>
        </ButtonCompContainer>
    )
}