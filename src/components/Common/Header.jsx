import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar className="bg-primary" variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            LOGO
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <h1>Hello</h1>
    </>
  );
};
export default Header;
