import ImageComp from "../../components/Image";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { OutlinedTextField } from "../../components/TextField";
import { logoStyle } from "./style";
import { formInputFilleds } from "./utils";
import logo from "../../assets/Image/junto_logo.png";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { useLogin } from "./Login.hooks";
import bgImage from "../../assets/Image/Base.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { MButton } from "@jp/material-core-master";

const Login = () => {
  const {
    isLoading,
    showPassword,
    loginDetails,
    loginDetailsErr,
    handleChangeLoginDetails,
    handleShowPassword,
    handleSubmit,
  } = useLogin();

  return (
    <Grid
      container
      spacing={2}
      height={"100vh"}
      alignItems={"center"}
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Grid
        item
        xs={10}
        sm={8}
        md={4}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"fit-content"}
        minHeight={"80%"}
        width={"30%"}
        p={"2rem"}
        marginLeft={"10%"}
        sx={{ background: "white", borderRadius: "10px" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={3}
          mt={"auto"}
          mb={"auto"}
          width={"90%"}
        >
          <ImageComp
            img={logo}
            alt={"logo"}
            style={{ ...logoStyle, marginBottom: "3rem" }}
          />

          <Typography variant={"h1"} color={"grey.main"}>
            Sign in
          </Typography>
          <form
            style={{ width: "100%" }}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={3}
              width={"100%"}
            >
              {formInputFilleds.map((input) => (
                <OutlinedTextField
                  key={input.id}
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
                                  <VisibilityOffIcon />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }
                      : undefined
                  }
                />
              ))}

              <MButton
                type="submit"
                variant="contained"
                label={isLoading ? "Loading..." : "Sign In"}
                color="primary"
                sx={{
                  marginLeft: "auto",
                  minWidth: "150px",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </form>
        </Box>
        <Typography
          variant={"body1"}
          sx={{ fontWeight: 600, color: "primary.main" }}
          style={{ textAlign: "center", width: "90%" }}
        >
          <span style={{ color: "#898989", marginRight: "3px" }}>
            Protected by reCAPTCHA and subject to the
          </span>
          Junto Privacy Policy and Terms of Service.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
