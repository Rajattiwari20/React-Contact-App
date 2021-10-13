import  React, {useState} from 'react';
import {Grid, Paper, Button, TextField} from '@mui/material';
function Contact(props) {

    const {name , email , address , contactNo } = props.contact;
    

    const handelDelete = (contactNo) =>{
        console.log("name : ", contactNo )
        const newArray = props.contacts.filter((item) => item.contactNo !== contactNo);
        console.log("newArray ==>" , newArray)
        props.setFilterContact(newArray)   
    }

  return (
    <>
        <Grid container  justifyContent = "center" style = {{marginTop : "25px" , marginBottom : "50px" }}>
           <Grid item md = {4} sm = {6}Update xs = {10} className = "todo-container" >
                <Paper elevation={3} style = {{width : "100%" , height : "100%", padding : "10px" }} >
                    <Grid container style = {{marginLeft : " 5%" }} spacing ={1}>
                        <Grid item >
                        <h1 className = "heading">Name : </h1>
                        </Grid>
                        <Grid item > 
                        <h1 className = "status">{name} </h1>
                        </Grid>
                    </Grid>
                    <Grid container style = {{marginLeft : " 5%" }} spacing ={1}>
                        <Grid item>
                        <h1 className = "heading">Email : </h1>
                        </Grid>
                        <Grid item>
                        <h1 className = "status">{email} </h1>
                        </Grid>
                    </Grid>
                    <Grid container style = {{marginLeft : " 5%" }} spacing ={1}>
                        <Grid item>
                        <h1 className = "heading">Contact No : </h1>
                        </Grid>
                        <Grid item>
                        <h1 className = "status">{contactNo} </h1>
                        </Grid>
                    </Grid>
                    <Grid container style = {{marginLeft : " 5%" }} spacing ={1}>
                        <Grid item>
                        <h1 className = "heading">Address : </h1>
                        </Grid>
                        <Grid item>
                        <h1 className = "status">{address} </h1>
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="error"  onClick = {() => handelDelete(props.contact.contactNo)} > Delete Contact</Button>
                    
                            
                </Paper>
           </Grid>
        </Grid>
    </>
  );
}


export default Contact;


