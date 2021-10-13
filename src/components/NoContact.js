import  React, { useState } from 'react';
import { Typography , Grid} from '@mui/material'

// if there is no contacts  show NoContact component
function NewConversation() {

    return (
      <>
        <Grid container>
            <Grid item md = {12} xs = {12} sm = {12} style = {{color : "#6d6d6d" , marginTop : "100px"}}>
                <h1>No contacts to show</h1>
            </Grid>
        </Grid>
      </>
    );
  }
  
  export default NewConversation;
  