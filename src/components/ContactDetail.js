import * as React from 'react';
import PropTypes from 'prop-types';
import {Button , Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ContactDetail(props) {
  const {open, setOpen, name , email , address , contactNo} = props
  

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {name} Detail
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container spacing ={1}>
            <Grid item >
            <h1 className = "heading">Name : </h1>
            </Grid>
            <Grid item  md = {3} sm = {2} > 
            <h1 className = "status">{name} </h1>
            </Grid>
            </Grid>
            <Grid container spacing ={1}>
                <Grid item>
                <h1 className = "heading">Email : </h1>
                </Grid>
                <Grid item>
                <h1 className = "status">{email} </h1>
                </Grid>
            </Grid>
            <Grid container spacing ={1}>
                <Grid item>
                <h1 className = "heading">Contact No : </h1>
                </Grid>
                <Grid item md ={3} >
                <h1 className = "status">{contactNo} </h1>
                </Grid>
            </Grid>
            <Grid container spacing ={1}>
                <Grid item>
                <h1 className = "heading">Address : </h1>
                </Grid>
                <Grid item>
                <h1 className = "status">{address} </h1>
                </Grid>
            </Grid>
            
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
