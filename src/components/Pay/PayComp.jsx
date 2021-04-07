import React, {useState} from 'react';

import TextField from '@material-ui/core/TextField';


import {fade, makeStyles, withStyles} from '@material-ui/core/styles';
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import ModalDialog from '../ModalDialog/ModalDialogComp';
import {ButtonComp} from '../Button/ButtonComp';
import {colors} from "../../styleSheet";


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


// validate: is a list of function that take a value then return a error message if the rule broken

export const PayPopUp = ({onCancel, onPay, merchant, validate}) => {

    const classes = useStyles();

    const [errors, setErrors] = useState([]);

    const onChangeHandler = (event) => {
        const {target: {value}} = event;
        const newErrors = validate && validate.map(rule => rule(value));
        setErrors(newErrors);
    }

    console.log(errors);

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div className="container">
                <div className="cercle"></div>
                <TextField
                    id="merchant"
                    label="Merchant"
                    defaultValue={merchant}
                    InputProps={{classes, readOnly: true}}
                />
                <FormControl>
                    <InputLabel shrink htmlFor="pay-input">
                        Enter Amount
                    </InputLabel>
                    <PayInput defaultValue="5600" id="pay-input" onChange={onChangeHandler}/>
                    {
                        errors && errors.map(error => (
                            <div style={{color: 'red', fontSize: 'small'}}>
                                {error}
                            </div>
                        ))
                    }
                </FormControl>
                <ButtonComp
                    disabled={errors && errors.some(elem => elem)}
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

    const required = (value) => {
        if (!value) return 'this field is required';
    }

    const isNumber = (value) => {
        if (isNaN(value)) return 'you must add only number';
    }

    const isPositiveNumber = (value) => {
        const number = parseFloat(value);
        if (number < 0) {
            return 'you must add only positive number';
        }
    }

    const min = (minValue) => (value) => {
        const number = parseFloat(value);
        if (number < minValue) {
            return `you must add only number greater than ${minValue}`;
        }
    }

    const max = (maxValue) => (value) => {
        const number = parseFloat(value);
        if (number > maxValue) {
            return `you must add only number less than ${maxValue}`;
        }
    }

    return (
        <div>
            <div className="logo">
            </div>
            <ModalDialog title="Pay" open={open} setOpen={setOpen}>
                <PayPopUp
                    merchant="Yalelo Buseko"
                    onCancel={onCancel}
                    onPay={onPay}
                    validate={[required, isNumber, isPositiveNumber, min(1), max(1000000)]}/>
            </ModalDialog>
        </div>
    )
}

export default Pay;