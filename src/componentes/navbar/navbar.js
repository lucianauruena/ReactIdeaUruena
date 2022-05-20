import './navbar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


//UpperCamelCase
const NavBar = () => {
    return (
        
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
       
       
    )
}
// const dateFormat = () => console.log("formate de fechas")
export default NavBar
// export {dateFormat} // solo se permite un default