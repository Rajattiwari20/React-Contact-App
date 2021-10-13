import  React, {useState, useEffect} from 'react';
import { Grid, Paper} from '@mui/material'
import AddContact from './AddContact'

function App() {
  return (
    <>
    <Grid container justifyContent = "center"  >
        <Grid item md = {11} sm = {11} xs = {10} style = {{minHeight : "90vh", marginTop : "15px"}} textAlign = "center" >
          <Paper elevation={3} style = {{width : "100%" , height : "100%", padding : "10px",  backgroundColor:  "#383838" }} >
              <h1 style ={{color : "white"}} >Contact List App</h1>
              <AddContact/>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
