import { useLogin } from "@refinedev/core";
import { useEffect, useRef } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ThemedTitleV2 } from "@refinedev/mui";

import { CredentialResponse } from "../interfaces/google";
import Banner from "../components/login/Banner";
import Form from "../components/login/Form";


export const Login = () => {
  return (
    <>  
    <Box 
    style={{
      display:"flex"
    }}
    flexDirection={"row"}
    p={0}
    m={0}
    width={"100%"}
    >
      <Banner/>
      <Form/>
      </Box>
    </>
  );
};
