import  React, {useState, useEffect} from 'react';
import { Grid, Paper,TextField, Box} from '@mui/material'
import AddContact from './AddContact'
import ContactList from './ContactList'
import {uuid} from 'uuidv4'
import SearchIcon from '@mui/icons-material/Search';

function App() {

  const [contacts , setContacts] = useState([])
  const [searchString , setSearchString] = useState("")
  const [filter , setFilter] = useState([])

  const addContact =(newContact) =>{
    // console.log("newContact ==>" , newContact)
    setContacts([...contacts, {id : uuid(), ...newContact}])
  }

  const deleteContact =(id) =>{
    const updatedList = contacts.filter((contact) =>{
      return contact.id !== id;
    })
    setContacts(updatedList)
  }
 

// when user will search handleChnage is called
  const handelChange = (e) => {
    const search = e.target.value;
    setSearchString(search)
    if(searchString !== ""){
      const filterContacts = contacts.filter((contact) =>{
      return Object.values(contact).
        join(" ").toLocaleLowerCase().
        includes(searchString.toLocaleLowerCase())
      })
      setFilter(filterContacts)
    }else{
      setFilter(contacts)
    }
}

//get the data from localStorage
useEffect(() =>{
  let contactsList = JSON.parse(localStorage.getItem('contactsList')) 
  if(contactsList){
    setContacts(contactsList)
  }

}, [])

//add data to localStorage
  useEffect(() =>{
    localStorage.setItem('contactsList' , JSON.stringify(contacts))
  }, [contacts])
  
  return (
    <>
    <Grid container justifyContent = "center"  >
        <Grid item md = {11} sm = {11} xs = {10} style = {{maxHeight : "90vh", marginTop : "15px"}} textAlign = "center" >
          <Paper elevation={3} style = {{width : "100%" , height : "90vh", padding : "10px" , overflow : "auto" }} >
              <h1 style ={{color : "#0A66C2"}} >Contact List App</h1>
              <Grid container justifyContent = "center" spacing = {1}>
              <Grid item md = {2}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
                      <TextField id="input-with-sx"
                      label="Search contact" 
                      variant="standard" 
                      onChange = {(e) => handelChange(e)}
                      />
                  </Box>
                </Grid>
                <Grid item md = {12}>
                  <AddContact addContact = {addContact}  />
                </Grid>
                
                <Grid item md = {12} sm = {12} xs = {12}>
                    <ContactList
                      contacts = {searchString.length < 1 ? contacts : filter}
                      deleteContact = {deleteContact} 
                    />
                </Grid>
              </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;


