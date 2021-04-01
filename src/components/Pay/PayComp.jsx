import React from 'react';

import TextField from '@material-ui/core/TextField';


import { makeStyles, withStyles, fade } from '@material-ui/core/styles';
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import ModalDialog from '../ModalDialog/ModalDialogComp';
import { ButtonComp } from '../Button/ButtonComp';
import { colors } from "../../styleSheet";

import {fade, makeStyles, withStyles} from '@material-ui/core/styles';
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {ButtonComp} from "../Button/ButtonComp";


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
            backgroundColor: 'white',
            padding: '20px'
        },
        '& .cercle': {
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            boxShadow: `0 0 0 0.65rem ${colors.lightGreen}`,
            backgroundColor: colors.green,
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
        '& .MuiButtonBase-root': {
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

export const PayPopUp = ({ onCancel, onPay, merchant }) => {

    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div className="container">
                <div className="cercle"></div>
                <TextField
                    id="merchant"
                    label="Merchant"
                    defaultValue={merchant}
                    InputProps={{ classes, readOnly: true }}
                />
                <FormControl>
                    <InputLabel shrink htmlFor="pay-input">
                        Enter Amount
                    </InputLabel>
                    <PayInput type="number" defaultValue="5600" id="pay-input" />
                </FormControl>
                <ButtonComp
                    label="Pay now"
                    color={colors.textGreen}
                    backgroundColor={colors.green}
                    onClick={onPay}
                />
                <ButtonComp
                    label="Cancel"
                    color={colors.textLightGreen}
                    backgroundColor={colors.lightGreen}
                    onClick={onCancel}
                />
            </div>
        </form>
    )
}

const Pay = () => {
    const [open, setOpen] = React.useState(false);

    const onCancel = () => {
        setOpen(false);
    }

    const onPay = () => {
        setOpen(false);
    }

    return (
        <div>
            <div className="logo">
            </div>
            <ModalDialog title="Pay" open={open} setOpen={setOpen}>
                <PayPopUp merchant="Yalelo Buseko" onCancel={onCancel} onPay={onPay} />
            </ModalDialog>
        </div>
    )
}

export default Pay;