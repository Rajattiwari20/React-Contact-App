import  React, {useState, useEffect} from 'react';
import { Grid, Paper} from '@mui/material'
import AddContact from './AddContact'
import Contact from './Contact'
import data from '../dummyData'


function App() {

  const [contacts , setContacts] = useState([])
  useEffect(()=>{
    setContacts(data)
  }, [])

  
  // console.log("Contact ==>" , contacts)
  return (
    <>
    <Grid container justifyContent = "center"  >
        <Grid item md = {11} sm = {11} xs = {10} style = {{minHeight : "90vh", marginTop : "15px"}} textAlign = "center" >
          <Paper elevation={3} style = {{width : "100%" , height : "100%", padding : "10px",  backgroundColor:  "#383838" }} >
              <h1 style ={{color : "white"}} >Contact List App</h1>
              <Grid container justifyContent = "center" spacing = {3}>
                <Grid item md = {12}>
                  <AddContact setContacts = {setContacts} contacts ={contacts} />
                </Grid>
                { 
                  contacts.length > 0 &&
                  contacts.map((contact) =>{
                    return (
                        <Grid item md = {12}>
                          <Contact contact = {contact} setContacts = {setContacts} contacts ={contacts}/>
                        </Grid>
                    )
                  })
                  
                }
              </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;


