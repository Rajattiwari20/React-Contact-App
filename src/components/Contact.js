import  React, {useState} from 'react';
import {Grid, Paper, Button, TextField} from '@mui/material';
import DetailsIcon from '@mui/icons-material/Details';
import ContactDetail from './ContactDetail'
function Contact(props) {

    const {name , email , address , contactNo } = props.contact;
    
    const [open , setOpen] = useState(false);
    const [showDetail , setShowDetail] = useState(false);
    // const [updatedList , setUpdatedList] = useState(props.filterContact);


    //filltering data on the basics of contact number
    const handelDelete = (contactNo) =>{
        // console.log("name : ", contactNo )
        const newArray = props.filterContact.filter((item) => item.contactNo !== contactNo);
        // console.log("updatedList ==>" , newArray)
        props.setFilterContact(newArray)   
    }

    const handelClick = () =>{
        setOpen(true);
        setShowDetail(true)
    } 

  return (
    <>
        <Grid container  justifyContent = "center" style = {{marginTop : "25px" , marginBottom : "25px" }}>
           <Grid item md = {4} sm = {6}Update xs = {10} >
                <Paper elevation={3} style = {{width : "100%" , height : "100%", padding : "5px" , backgroundColor : "#F6F8FA" }} >
                    <Grid container style = {{marginLeft : " 5%" }} spacing ={1}>
                        <Grid item >
                        <h1 className = "heading">Name : </h1>
                        </Grid>
                        <Grid item  md = {3} sm = {2} > 
                        <h1 className = "status">{name} </h1>
                        </Grid>
                        <Grid item onClick = {handelClick} md = {7} sm = {7}  xs = {5}  style = {{color : "#0A66C2" , cursor : "pointer"}}> 
                            <DetailsIcon/>
                        </Grid>

                    </Grid>
                    <Grid container style = {{marginLeft : " 5%" }} spacing ={1}>
                        <Grid item>
                        <h1 className = "heading">Contact No : </h1>
                        </Grid>
                        <Grid item md ={3} >
                        <h1 className = "status">{contactNo} </h1>
                        </Grid>
                        <Grid item > 
                            <Button variant="contained" color="error"  onClick = {() => handelDelete(props.contact.contactNo)} > Delete Contact</Button>
                        </Grid>
                    </Grid>
                </Paper>
           </Grid>
           {/* showing contact details separately for better UI experence */}
            {    
            showDetail &&
            <ContactDetail open = {open}
                setOpen = {setOpen} 
                name = {name}
                email = {email}
                address ={address} 
                contactNo = {contactNo}
             />
            }     
        </Grid>
    </>
  );
}


export default Contact;


