import React from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles, fade } from '@material-ui/core/styles';
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from '@material-ui/core/Button';


const PAY_BTN_COLOR = '#00e88f';
const CALNCEL_BTN_COLOR = '#e5fcf3'

const PAY_TEXT_COLOR = '#e9fdf4';
const CANCEL_TEXT_COLOR = '#3aeda8';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            marginBottom: theme.spacing(1),
            width: '100%'
        },
        '& .container': {
            padding: '20px'
        },
        '& .cercle': {
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            boxShadow: `0 0 0 0.65rem ${CALNCEL_BTN_COLOR}`,
            backgroundColor: PAY_BTN_COLOR,
            margin: '1.5rem 5px'
        },
        '& .MuiFormControl-root': {
            marginBottom: theme.spacing(1),
            width: '100%',
            '& #pay-input': {
                width: '100%'
            },
            '& #merchant': {
                color: '#0a0a0a',
                fontWeight: 600
            },
            '& .MuiFormLabel-root': {
                color: '#bbbbbb',
                fontWeight: 600
            }
        },
        '& .pay-btn': {
            marginBottom: theme.spacing(1)
        }
    },
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    }
}));


const PayInput = withStyles((theme) => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3)
        }
    },
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.common.white,
        border: "1px solid #bababa",
        fontSize: 15,
        fontWeight: 600,
        color: '#6c6c6c',
        width: "auto",
        padding: "10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        "&:focus": {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main
        }
    }
}))(InputBase);

const PayButton = (props) => {
    const { backgroundColor, textColor, children, ...rest } = props;
    
    const Tmp = withStyles({
        root: {
            boxShadow: "none",
            textTransform: "capitalize",
            fontSize: 16,
            lineHeight: 1.5,
            width: '100%',
            color: textColor,
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
};


export const Pay = () => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
        {/* <div className={classes.root}> */}
            <div className="container">
                <div className="cercle"> </div>
                <TextField
                    id="merchant"
                    label="Merchant"
                    defaultValue="Yalelo Buseko"
                    InputProps={{ classes, readOnly: true }}
                />
                <FormControl>
                    <InputLabel shrink htmlFor="pay-input">
                        Enter Amount
                    </InputLabel>
                    <PayInput defaultValue="5600" id="pay-input" />
                </FormControl>
                <PayButton
                    variant="contained"
                    color="primary"
                    className="pay-btn"
                    backgroundColor={PAY_BTN_COLOR}
                    textColor={PAY_TEXT_COLOR}
                    disableRipple
                    disableElevation
                >
                    pay now
                </PayButton>
                <PayButton
                    variant="contained"
                    color="primary"
                    className="cancel-btn"
                    backgroundColor={CALNCEL_BTN_COLOR}
                    textColor={CANCEL_TEXT_COLOR}
                    disableRipple
                    disableElevation
                >
                    cancel
                </PayButton>
            </div>
        {/* </div> */}
        </form>
    )
}

export default Pay;