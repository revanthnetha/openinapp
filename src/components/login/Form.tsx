import { Box, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { useLogin } from "@refinedev/core";
import { useEffect, useRef } from "react";
import { CredentialResponse } from "../../interfaces/google";

const GOOGLE_CLIENT_ID =
  "506056746201-lnkfldgu8n7nksdrnr2krprdea2drpml.apps.googleusercontent.com";

export const Form: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.log(error);
      }
    }, []);

    return <div ref={divRef} />;
  };

  return (
    <Box bgcolor={"#F8FAFF"} width={{ xs: "100%", md: "70%" }} p={{xs:"50px",md : "0px"}}>
      <Box
        display={"flex"}
        gap={3}
        flexDirection={"column"}
        marginTop={{ base: "30px", md: "150px" }}
        pl={{ base: "10px", md: "50px" }}
      >
        <Typography
          fontFamily={"Montserrat"}
          fontWeight={{ sm: 300, md: 400, lg: 600 }}
          fontSize={{ sm: "28px", md: "36px" }}
          lineHeight={{ sm: "32px", md: "43.88px" }}
          color={"#000000"}
        >
          Sign In
        </Typography>
        <Typography
          fontFamily={"Lato"}
          fontWeight={{ sm: 200, md: 300, lg: 400 }}
          fontSize={{ sm: "14px", md: "16px" }}
          lineHeight={{ sm: "16px", md: "19.2px" }}
          color={"#000000"}
        >
          Sign in to your account
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={4}>
          <Box
            display={"flex"}
            flexDirection={{ xs: "column", md: "row" }}
            gap={{ xs: 1, md: 4 }}
          >
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <img
                src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1706183321/Openinapp/google-icon_1_lwmykt.svg"
                alt="google"
              />
              <Link
                fontFamily={"Montserrat"}
                fontWeight={{ sm: 200, md: 300, lg: 400 }}
                fontSize={{ sm: "10px", md: "12px" }}
                lineHeight={{ sm: "12px", md: "14.63px" }}
                color={"#858585"}
                underline="none"
                style={{
                  cursor: "pointer",
                }}
              >
                Sign in with Google
              </Link>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <img
                src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1706183318/Openinapp/apple_1_gqomjg.svg"
                alt="apple"
              />
              <Link
                fontFamily={"Montserrat"}
                fontWeight={{ sm: 200, md: 300, lg: 400 }}
                fontSize={{ sm: "10px", md: "12px" }}
                lineHeight={{ sm: "12px", md: "14.63px" }}
                color={"#858585"}
                underline="none"
                style={{
                  cursor: "pointer",
                }}
              >
                Sign in with Apple
              </Link>
            </Box>
          </Box>

          <Box>
            <Box>
              <Typography
                color={"#000000"}
                fontFamily={"Lato"}
                fontWeight={{ sm: 200, md: 300, lg: 400 }}
                fontSize={{ sm: "14px", md: "16px" }}
                lineHeight={{ sm: "12px", md: "14.63px" }}
                py={"18px"}
              >
                Email Address
              </Typography>
              <Box width={{ xs: "100%", md: "50%" }}>
                <TextField
                  fullWidth
                  placeholder="xyz@gmail.com"
                  sx={{ input: { color: "black" } }}
                  id="outlined-basic"
                  label="Enter Your Email"
                  variant="outlined"
                  style={{
                    borderColor: "black",
                    backgroundColor: "#EAEAEA",
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Typography
                color={"#000000"}
                fontFamily={"Lato"}
                fontWeight={{ sm: 200, md: 300, lg: 400 }}
                fontSize={{ sm: "14px", md: "16px" }}
                lineHeight={{ sm: "12px", md: "14.63px" }}
                py={"18px"}
              >
                {" "}
                Password
              </Typography>
              <Box width={{ xs: "100%", md: "50%" }} pb={"18px"}>
                <TextField
                  sx={{ input: { color: "black" } }}
                  type="password"
                  variant="outlined"
                  label="Password"
                  placeholder="must contain digits, letters, special characters"
                  fullWidth
                  style={{
                    borderColor: "black",
                    backgroundColor: "#EAEAEA",
                  }}
                ></TextField>
              </Box>
            </Box>
            <Box>
              <Link
                color={"#346BD4"}
                fontFamily={"Lato"}
                fontWeight={{ sm: 200, md: 300, lg: 400 }}
                fontSize={{ sm: "14px", md: "16px" }}
                lineHeight={{ sm: "12px", md: "15.63px" }}
                underline="none"
                style={{
                  cursor: "pointer",
                }}
                pt={"12px"}
              >
                Forgot password?
              </Link>
            </Box>
          </Box>
          <Box>
            <GoogleButton />
          </Box>
          <Box
            display={"flex"}
            flexDirection={{xs:"column", md:"row"}}
            
            gap={1}
            fontFamily={"Lato"}
            fontWeight={{ sm: 200, md: 300, lg: 400 }}
            fontSize={{ sm: "14px", md: "16px" }}
            lineHeight={{ sm: "12px", md: "12.63px" }}
          >
            <Typography color={"#858585"}>Don’t have an account?</Typography>
            <Link
              color={"#346BD4"}
              underline="none"
              style={{
                cursor: "pointer",
              }}
              alignSelf={"center"}
            >
              Register here
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
