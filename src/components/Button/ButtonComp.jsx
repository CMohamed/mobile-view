import React from "react";
import Button from '@material-ui/core/Button';
import {ButtonCompContainer} from "./ButtonComp.style";
import {withStyles} from "@material-ui/core/styles";

const CostumeButton = (props) => {
    const { backgroundColor, color, children, ...rest } = props;
    const Tmp = withStyles({
        root: {
            boxShadow: "none",
            textTransform: "none",
            fontSize: 16,
            lineHeight: 1.5,
            width: '100%',
            color: color,
            backgroundColor: backgroundColor,
            "&:hover": {
                boxShadow: "none",
                backgroundColor: backgroundColor
            },
            "&:active": {
                boxShadow: "none",
                backgroundColor: backgroundColor,
            },
            "&:focus": {
                boxShadow: "0 0 0 0.2rem rgba(79,238,176,.5)"
            }
        }
    })(Button);

    return <Tmp {...rest}> {children} </Tmp>
}

export const ButtonComp = ({label, onClick, color, backgroundColor}) => {



    return (
        <ButtonCompContainer>
            <CostumeButton
                color={color}
                backgroundColor={backgroundColor}
                variant="contained"
                disableElevation
                onClick={onClick}
            >
                {label}
            </CostumeButton>
        </ButtonCompContainer>
    )
}