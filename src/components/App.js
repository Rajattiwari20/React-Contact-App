import  React, {useState, useEffect} from 'react';
import { Grid, Paper,TextField, Box} from '@mui/material'
import AddContact from './AddContact'
import Contact from './Contact'
import NoContact from './NoContact'
import data from '../dummyData'
import SearchIcon from '@mui/icons-material/Search';

function App() {

  const [contacts , setContacts] = useState([])
  const [filterContact, setFilterContact] = useState([])

  //fillering array to show search result 
  const filterArray = (value) =>{
    const newValue = value.toLowerCase().trim()
    if(!newValue){
      setFilterContact(data);
    }
    else{
      const newFilteredArray = contacts.filter(item=>{
        //user can serach contacts from all keys 
        return Object.keys(item).some(key => {
          return item[key].toString().toLowerCase().includes(newValue)
        })
      });
      //set the filteredArray
      setFilterContact(newFilteredArray)
    }
  }

  //set the data 
  useEffect(()=>{
    setContacts(data)
    setFilterContact(data);
  }, [])

// when user will search handleChnage is called
  const handelChange = (e) => {
    const search = e.target.value;
    filterArray(search)
}

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
                  <AddContact setFilterContact = {setFilterContact} filterContact ={filterContact} />
                </Grid>
                {/* Maping the filtered Array */}
                { 
                    filterContact.length > 0 ?
                    filterContact.map((contact) =>{
                    return (
                        <Grid item md = {12} sm = {12} xs = {12}>
                            <Contact  contact = {contact} setFilterContact = {setFilterContact} filterContact ={filterContact}/>
                        </Grid>
                    )
                    })
                    :
                      <Grid item md = {12} sm = {12} xs = {12}>
                              <NoContact/>
                      </Grid>
                  }
              </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;


