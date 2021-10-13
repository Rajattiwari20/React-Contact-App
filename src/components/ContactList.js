import  React, {useState, useEffect} from 'react';
import { Grid} from '@mui/material'
import Contact from './Contact'
import NoContact from './NoContact'

function ContactList(props) {
  const {contacts, deleteContact} = props
  return (
    <>
    <Grid container justifyContent = "center"  >
    { 
        contacts.length > 0 ?
        contacts.map((contact) =>{
        return (
            <Grid item md = {12} sm = {12} xs = {12}>
                <Contact 
                contact = {contact} 
                deleteContact = {deleteContact} 
                />
            </Grid>
        )
        })
        :
        <Grid item md = {12} sm = {12} xs = {12}>
                <NoContact/>
        </Grid>
    }
      </Grid>
    </>
  );
}

export default ContactList;







