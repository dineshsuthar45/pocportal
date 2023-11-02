import { Box, Grid } from "@mui/material";
import { Typo } from "../../components/Typography";
import { OutlinedTextField } from "../../components/TextField";
import { ContainedButton, TextButton } from "../../components/Button";
import LeftArrow from "@mui/icons-material/ArrowBackIos";
import { LockIcon } from "../../assets/Svg";
import { useForgotPass } from "./Forgotpass.hooks";

export const ForgotPassword = () => {
  const {
    emailId,
    emailErr,
    isLoading,
    handleEmailChange,
    handelVerifyEmail,
    returnToRegister,
  } = useForgotPass();
  return (
    <Grid container spacing={2} height={"100vh"}>
      <Grid item xs={4} />

      <Grid
        item
        xs={4}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"24px"}
      >
        <LockIcon style={{ width: "80px", height: "80px" }} />

        <Typo
          variant="h4"
          label={"Forgot your password?"}
          style={{ textAlign: "center", fontWeight: 700 }}
        />

        <Typo
          variant="subtitle1"
          label="Please enter the email address associated with your account and We will email you a link to reset your password."
          style={{ textAlign: "center" }}
        />

        <form
          onSubmit={handelVerifyEmail}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <OutlinedTextField
            value={emailId}
            type="email"
            label="Email address"
            placeholder="&#x2709;"
            name="emailId"
            errmsg={emailErr}
            onChange={handleEmailChange}
            style={{ width: "100%" }}
          />
          <ContainedButton
            label={isLoading ? "loading..." : "Send Request"}
            disabled={isLoading}
            type="submit"
            style={{ width: "100%", borderRadius: "8px", height: "48px" }}
          />

          <TextButton
            label={
              <Box display="flex" alignItems="center">
                <LeftArrow sx={{ fontSize: "14px" }} /> Return to sign in
              </Box>
            }
            onClick={returnToRegister}
            style={{
              fontSize: "14px",
              alignSelf: "center",
            }}
          />
        </form>
      </Grid>

      <Grid item xs={4} />
    </Grid>
  );
};
