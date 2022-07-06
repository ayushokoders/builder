import { AppBar, Stack } from '@mui/material';
import React, { useState } from 'react';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';

function App() {

  const[content,setContent] = useState<string>("");

  return (
    <>
      <NavBar></NavBar>
      <Stack direction="row" justifyContent="center">
        <SideBar setContent={setContent}></SideBar>
        <Main content={content}></Main>
      </Stack>
    </>
  );
}

export default App;
