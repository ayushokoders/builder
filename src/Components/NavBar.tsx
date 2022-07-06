import { AppBar, Toolbar, Typography } from "@mui/material";

function NavBar(){
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" textTransform="uppercase" letterSpacing={2} fontWeight="bold" >Builder</Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;