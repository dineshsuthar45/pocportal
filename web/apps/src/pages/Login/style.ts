import bgImage from "../../assets/images/bg-image.png";

const bgImageStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
};

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: 2,
};

const textFieldStyle = {
  display: "flex",
  flexDirection: "column",
  p: "5px",
};

const imgTextStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  height: "95vh",
  maxWidth: "700px",
  pl: 5,
  gap: 1.5,
};

const textStyle = {
  alignSelf: "flex-start",
  color: "white",
  fontWeight: 500,
};

const logoStyle = {
  width: "100%",
  maxWidth: "200px",
};

const forgotStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export {
  bgImageStyle,
  imgTextStyle,
  textStyle,
  boxStyle,
  logoStyle,
  textFieldStyle,
  forgotStyle,
};
