import {Switch,Route,useHistory,} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import Login from "./components/login/index"
import Signup from "./components/pendingrequest/index"
import Dashboard from "./components/accept/index"
import Manager from "./components/setManagercrediantial/index"

function App() {

  let history = useHistory();

  return (
    <>
      

   <Box sx={{ flexGrow: 1 }} >
      <AppBar textalign="center" position="static" > 
        <Toolbar textAlign="center"
        >
      
          <Button style={{textAlign:"center"}} variant="h1" color="inherit"onClick={() => { history.push("/") }}>Accepte</Button>
          <Button style={{textAlign:"center"}}variant="h6"color="inherit"onClick={() => { history.push("/login") }}>Login</Button>
          <Button  style={{textAlign:"center"}}variant="h6"color="inherit"onClick={() => { history.push("/signup") }}>Request</Button>
          <Button  style={{textAlign:"center"}}variant="h6"color="inherit"onClick={() => { history.push("/manager") }}>Manager</Button>

        </Toolbar>
      </AppBar>
    </Box>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/manager">
          <Manager />
        </Route>

      </Switch>

    </>
  );
}

export default App;