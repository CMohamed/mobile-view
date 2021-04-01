import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { ButtonComp } from '../Button/ButtonComp';
import { colors } from "../../styleSheet";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        '& .MuiTypography-h6': {
            fontWeight: 600,
            textAlign: 'center'
        }
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
});


const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});


const DialogContent = withStyles((theme) => ({
    root: {
        '& .MuiDialogContent-dividers': {
            borderTop: 'none'
        }
    }
}))(MuiDialogContent);


const Dialog = withStyles((theme) => ({
    root: {
        '& .MuiDialog-paper': {
            margin: 0,
            position: 'absolute',
            bottom: 0
        },
        '& .MuiPaper-rounded': {
            borderRadius: '15px 15px 0 0',
        }
    },
}))(MuiDialog);

export default function CustomizedDialogs(props) {
    const { children, title, open, setOpen } = props;

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open dialog
            </Button> */}

            <ButtonComp
                label="Open Pay modal"
                color={colors.white}
                backgroundColor={colors.green}
                onClick={handleClickOpen}
            />
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {title}
                </DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
            </Dialog>
        </>
    );
}
