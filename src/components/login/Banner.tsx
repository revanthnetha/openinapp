import { Box, Button, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#605BFF",
        height: {sm : "50vh",md : "100vh"},
        width: { xs: "100%", md: "45%" },
        clipPath: {md :"polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)"}
      }}
    >
      
      <Box display="flex" flexDirection="column">
        <Box height={{ xs: "60px", md: "100px" }} p={{xs :"10px",md:"20px"}}>
          <img
            height="40px"
            src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1706174390/Openinapp/Ellipse_111_rdyxgf.jpg"
            alt="logo"
          />
        </Box>
        <Box
          py={{ xs: "100px", md: "200px" }}
          px={{ xs: "20px", md: "50px" }}
          display="flex"
          alignSelf="center"
        >
          <Typography
            fontFamily="Montserrat"
            fontWeight={{ xs: 400, md: 500, lg: 700 }}
            fontSize={{ xs: "40px", md: "70px" }}
            lineHeight={{ xs: "50px", md: "87px" }}
            color="#FFFFFF"
          >
            BASE
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems={{ xs: "center", md: "flex-start" }}
          justifyContent="center"
          pt={{ xs: "40%",sm : "30%", md: "10%",lg : "5%" }}
          
          px={{ xs: "20px", md: "50px" }}
          color="#FFFFFF"
        >
          <Button style={{ color: "#FFFFFF" }}>
            {" "}
            <InstagramIcon />
          </Button>
          <Button style={{ color: "#FFFFFF" }}>
            <GitHubIcon />
          </Button>
          <Button style={{ color: "#FFFFFF" }}>
            <LinkedInIcon />
          </Button>
          <Button style={{ color: "#FFFFFF" }}>
            <TwitterIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
