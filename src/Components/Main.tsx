import { CopyAll } from "@mui/icons-material";
import { Stack, Typography, Button, Divider, IconButton } from "@mui/material";
import MockData from "../Mock/MockData";
import React from "react";

function Main({content} : {content : string}){

    return(
        <Stack gap={4} m={10} sx={{width:"60%"}}>
            <Typography variant="h4" textAlign="left">{MockData[0].title}</Typography>
            <Typography variant="h6" textAlign="left">{MockData[0].description}</Typography>
            <Stack height="250px" width="400px" direction="row" alignItems="center" justifyContent="center" gap={7} border="1px solid gray" p={4} sx={{position:"relative"}}>
                <Button sx={{position:"absolute", top:"2%", left:".5%"}} variant="text">
                    <img src="" alt="image" loading="lazy" />
                </Button>
                <Typography variant="body2">{ MockData[0].code }</Typography>
                <IconButton sx={{position:"absolute", top:"2%", right:".5%"}} 
                    color="primary" aria-label="upload picture" component="span" 
                    onClick={()=>navigator.clipboard.writeText(MockData[0].code)}>
                    <CopyAll/>
                </IconButton>
            </Stack>
        </Stack>
    )
}

export default Main;
