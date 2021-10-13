import  React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function AddContact(props) {

  const [open, setOpen] = useState(false);
  const [newContact , setNewContact] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handelName = (e) => {
    const newValue = e.target.value
    setNewContact({
        ...newContact,
        name : newValue
      })
  };
  const handelEmail = (e) => {
    const newValue = e.target.value
    setNewContact({
        ...newContact,
        email : newValue
      })
  };
  const handelContact = (e) => {
    const newValue = e.target.value
    setNewContact({
        ...newContact,
        contactNo : newValue
      })
  };
  const handleAddress = (e) => {
    const newValue = e.target.value
    setNewContact({
        ...newContact,
        address : newValue
      })
  };

  const handelAdd = () =>{
      props.setContacts([
        newContact,
        ...props.contacts
      ])
      setOpen(false);
    //   console.log("newContact" , newContact)
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen} style ={{minWidth : "300px" , color : "white", borderColor : "white"}}>
        ADD Contact
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style ={{minWidth : "500px", overflow: "hidden"}}>Add New Contact</DialogTitle>
        <DialogContent style ={{ overflow: "hidden"}} >
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="input"
            fullWidth
            variant="standard"
            label = "Name"
            onChange = {(e) => handelName(e)}
            
          />
        </DialogContent>
        <DialogContent style ={{ overflow: "hidden"}} >
          <TextField
            autoFocus
            margin="dense"
            id="contact no"
            type="input"
            fullWidth
            variant="standard"
            label = "Contact No"
            onChange = {(e) => handelContact(e)}
           
          />
        </DialogContent>
        <DialogContent style ={{overflow: "hidden"}}>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email "
            type="email"
            fullWidth
            variant="standard" 
            onChange = {(e) => handelEmail(e)}
          />
        </DialogContent>
        <DialogContent style ={{overflow: "hidden"}}>
          <TextField
            autoFocus
            margin="dense"
            id="Address"
            label="Address "
            type="input"
            fullWidth
            variant="standard" 
            onChange = {(e) => handleAddress(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handelAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}


export default AddContact;


