import ImageComp from "../../components/Image";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { ColoredTypo, Footer, Typo } from "../../components/Typography";
import { TextButton, ContainedButton } from "../../components/Button";
import { OutlinedTextField } from "../../components/TextField";
import { boxStyle, logoStyle, forgotStyle } from "./style";
import { formInputFilleds } from "./utils";
import logo from "../../assets/Image/login-logo.png";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { EyeIcon } from "../../assets/Svg";
import { useLogin } from "./Login.hooks";

import SettingsIcon from "@mui/icons-material/Settings";

const Login = () => {
  const {
    showPassword,
    loginDetails,
    loginDetailsErr,
    handleChangeLoginDetails,
    handleNavigate,
    handleShowPassword,
    handleSubmit,
  } = useLogin();
  return (
    <Grid container spacing={2} height={"100vh"}>
      <Grid
        item
        xs={8}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={4}
        >
          <Typo
            variant={"h3"}
            label={"Hi, Welcome back"}
            style={{ textAlign: "center", fontWeight: 600 }}
          />
          <SettingsIcon />

          {/* <ImageComp
            img={bgImage}
            alt={"logo"}
            style={{
              width: "100%",
              maxWidth: "200px",
              height: "100%",
              maxHeight: "200px",
              alignSelf: "center",
            }}
          /> */}
        </Box>
      </Grid>
      <Grid
        item
        xs={4}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        p={"0 4rem"}
      >
        <Box sx={boxStyle} mt={"auto"} mb={"auto"}>
          <ImageComp img={logo} alt={"logo"} style={logoStyle} />

          <Typo
            variant={"h4"}
            label={"Sign in to Junto"}
            style={{ textAlign: "center", fontWeight: 600 }}
          />

          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {formInputFilleds.map((input, index) => (
              <Box key={index} display={"flex"} flexDirection={"column"}>
                <OutlinedTextField
                  value={loginDetails[input.value] ?? ""}
                  type={
                    input.type === "password"
                      ? showPassword
                        ? "text"
                        : "password"
                      : input.type
                  }
                  label={input.lable ?? "---"}
                  placeholder={input.placeholder}
                  name={input.value}
                  errmsg={loginDetailsErr[input.errValue] ?? ""}
                  onChange={handleChangeLoginDetails}
                  disabled={input.disable}
                  InputProps={
                    input.type === "password"
                      ? {
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  handleShowPassword(!showPassword)
                                }
                              >
                                {showPassword ? (
                                  <VisibilityRoundedIcon />
                                ) : (
                                  <EyeIcon />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }
                      : undefined
                  }
                />
              </Box>
            ))}

            <Box sx={forgotStyle}>
              <FormControlLabel
                control={<Checkbox sx={{ color: "primary.main" }} />}
                label={
                  <ColoredTypo
                    variant={"subtitle1"}
                    label={"Keep me signed in"}
                  />
                }
              />

              <TextButton
                label="Reset password?"
                onClick={() => handleNavigate("/forgot")}
                style={{
                  fontSize: "13px",
                }}
              />
            </Box>

            <ContainedButton
              label="Login"
              type="submit"
              style={{ width: "100%", borderRadius: "8px", height: "48px" }}
            />
          </form>
        </Box>
        <Footer style={{ textAlign: "center" }} />
      </Grid>
    </Grid>
  );
};

export default Login;
