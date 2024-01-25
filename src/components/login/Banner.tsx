import { BottomNavigation, Box, Button, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';



const Banner = () => {
  return (
    <Box sx={{
        backgroundColor: "#605BFF"
      }} 
      height={"100vh"}
      width={"45%"}
      >
    <Box 
    display={"flex"}
    flexDirection={"column"}
    
    >
        <Box height={"100px"}>
    <img height={"40px"} src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1706174390/Openinapp/Ellipse_111_rdyxgf.jpg" alt="logo" />
    </Box>
    <Box py={{base : "100px", md : "200px"}} 
    display={"flex"}
    alignSelf={"center"}
    >
    <Typography
    fontFamily={"Montserrat"}
    fontWeight={{sm : 400, md : 500, lg : 700}}
    fontSize={{sm : "60px", md : "70px"}}
    lineHeight={{sm : "70px", md : "87px"}}
    >
        BASE
    </Typography>
    </Box>
    <Box 
    display={"flex"}
    flexDirection={"row"}
    gap={{base : 2,md : 4}}
    alignSelf={"center"}
    py={{base : "10px", md : "20px"}}
    pb={"5px"}
    px={{base : "50px",md:"50px"}}
    >
        <Button> <InstagramIcon /> </Button>
        <Button><GitHubIcon/></Button>
        <Button><LinkedInIcon/></Button>
        <Button><TwitterIcon/></Button>
    </Box>
    </Box>
    </Box>
  )
}

export default Banner
