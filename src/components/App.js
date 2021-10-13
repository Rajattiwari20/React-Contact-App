import  React, {useState, useEffect} from 'react';
import { Grid, Paper,TextField, Box} from '@mui/material'
import AddContact from './AddContact'
import Contact from './Contact'
import data from '../dummyData'
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({

  historyBtn: {
      color : "white",
      borderColor : "white !important",
      '&:focus' : {
          color : "white"
      }
  }
}))


function App() {

  const classes = useStyles();
  const [contacts , setContacts] = useState([])
  const [filterContact, setFilterContact] = useState([])

  const filterArray = (value) =>{
    const newValue = value.toLowerCase().trim()
    if(!newValue){
      setFilterContact(data);
    }
    else{
      const newFilteredArray = contacts.filter(item=>{
        return Object.keys(item).some(key => {
          return item[key].toString().toLowerCase().includes(newValue)
        })
      });
      setFilterContact(newFilteredArray)
    }
  }

  useEffect( ()=>{
    setContacts(data)
    setFilterContact(data);
  }, [])


  const handelChange = (e) => {
    const search = e.target.value;
    filterArray(search)
}

  return (
    <>
    <Grid container justifyContent = "center"  >
        <Grid item md = {11} sm = {11} xs = {10} style = {{minHeight : "90vh", marginTop : "15px"}} textAlign = "center" >
          <Paper elevation={3} style = {{width : "100%" , height : "100%", padding : "10px",  backgroundColor:  "#383838" }} >
              <h1 style ={{color : "white"}} >Contact List App</h1>
              <Grid container justifyContent = "center" spacing = {3}>
              <Grid item md = {12}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} style ={{color : "white"}} />
                      <TextField id="input-with-sx"
                      label="Search contact" 
                      variant="standard" 
                      InputLabelProps = {{
                          className: classes.historyBtn
                      }}
                      InputProps={{className: classes.historyBtn}}
                      onChange = {(e) => handelChange(e)}
                      />
                  </Box>
                </Grid>
                <Grid item md = {12}>
                  <AddContact setFilterContact = {setFilterContact} filterContact ={filterContact} />
                </Grid>
                { 
                    filterContact.length > 0 &&
                    filterContact.map((contact) =>{
                    return (
                        <Grid item md = {12}>
                            <Contact contact = {contact} setFilterContact = {setFilterContact} contacts ={contacts}/>
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


