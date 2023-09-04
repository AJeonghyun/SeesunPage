// Home.js
import React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

import "../App.css";


function Home() {

const fadeInTitle = true;

  return (
    <div>
<Box 
      sx={{
        display : 'flex',
        fontSize : '50px',
        fontWeight : 'bolder',
        mt : 10,
        justifyContent : 'center',
      }}
    >
      <Fade in={fadeInTitle} timeout ={3000}>
        <p>안녕하세요 우리는 시선입니다!</p>
      </Fade>
      </Box>
    </div>
  );
}

export default Home;
