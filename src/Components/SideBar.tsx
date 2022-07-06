import { List, ListItem, ListItemButton, ListSubheader } from "@mui/material"
import React from "react"
import SideBarMock from "../Mock/SideBarMock"

function SideBar({setContent} : {setContent : React.Dispatch<React.SetStateAction<string>>}){
    return(
        <List sx={{paddingTop:5, minWidth: 250, position:'relative', overflowY:"scroll"}} subheader={<li/>}>
            {
                SideBarMock.map((x,index) => {
                    return(
                        <List>
                            <ListSubheader key={index}>{x.heading}</ListSubheader>
                            {
                                SideBarMock[index].content.map((y,index) => {
                                    return(
                                        <ListItemButton key={index} onClick={()=>setContent(y)} sx={{paddingLeft:3}}>
                                            {y}
                                        </ListItemButton>
                                    )
                                })
                            }
                        </List>
                    )
                })
            }
        </List>
    )
}

export default SideBar