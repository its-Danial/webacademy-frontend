import { FC, useState, useRef } from "react";
import { Box, Typography, Modal, IconButton, TextField, Checkbox, Button, Divider } from "@mui/material";
import { Close } from "@mui/icons-material";

type TeacherAuthModalProps = {
  authModalOpenState: boolean;
  authModalHandleClose: () => void;
};

const TeacherAuthModal: FC<TeacherAuthModalProps> = (props) => {
  const [authFormType, setAuthFormType] = useState("sign-up");

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSignUpFormSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newTeacherAccountDetails = {
      username: usernameRef.current?.value,
      fullName: fullNameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    console.log(newTeacherAccountDetails);
  };

  const onLogInFormSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const teacherAccountDetails = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    console.log(teacherAccountDetails);
  };

  //   NOTE: = Sign up Form
  const signUpForm = (
    <Box component="form" onSubmit={onSignUpFormSubmitHandler} sx={modalSignUpContainer}>
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          paddingLeft: "24px",
          paddingRight: "24px",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ margin: 0, fontSize: "1em", fontWeight: 700 }}>Become a WebAcademy instructor</Typography>
        </Box>
        <IconButton onClick={props.authModalHandleClose} aria-label="close" size="small">
          <Close />
        </IconButton>
      </Box>
      <Box sx={modalContent}>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Discover a supportive community of online instructors. Get instant access to all course creation resources.
        </Typography>
        <TextField inputRef={fullNameRef} required sx={textFiledStyle} label="Full Name" variant="outlined" />
        <TextField inputRef={emailRef} required sx={textFiledStyle} label="Email" variant="outlined" />
        <TextField inputRef={usernameRef} required sx={textFiledStyle} label="Username" variant="outlined" />
        <TextField
          inputRef={passwordRef}
          required
          type="password"
          sx={textFiledStyle}
          label="Password"
          variant="outlined"
        />
      </Box>
      <Box
        sx={{
          mt: 2,
          paddingLeft: "23px",
          paddingRight: "25px",
          display: "flex",
        }}
      >
        <Box>
          <Checkbox
            defaultChecked
            sx={{
              p: 0,
              color: "black",
              "&.Mui-checked": {
                color: "black",
              },
            }}
          />
        </Box>
        <Box sx={{ ml: 1 }}>
          <Typography variant="caption">
            I want to get the most out of my experience, by receiving emails with insider tips, motivation, special
            updates and promotions reserved for instructors.
          </Typography>
        </Box>
      </Box>
      <Box sx={modalContent}>
        <Button sx={button} type="submit" variant="contained" disableElevation>
          Sign up
        </Button>
        <Typography sx={{ mt: 2, mb: 2 }} component="p" variant="caption">
          By signing up, you agree to our Terms of Use and Privacy Policy.
        </Typography>
        <Divider />
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Typography component="p" variant="caption" sx={{ mt: 2, mb: 2 }}>
            Already have an account?
          </Typography>
          <Button onClick={() => setAuthFormType("log-in")} size="small" sx={{ color: "#a435f0" }} variant="text">
            Log in
          </Button>
        </Box>
      </Box>
    </Box>
  );

  //   NOTE: Login Form
  const loginForm = (
    <Box component="form" onSubmit={onLogInFormSubmitHandler} sx={modalLogInContainer}>
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          paddingLeft: "24px",
          paddingRight: "24px",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ margin: 0, fontSize: "1em", fontWeight: 700 }}>
            Log In to Your WebAcademy Account!
          </Typography>
        </Box>
        <IconButton onClick={props.authModalHandleClose} aria-label="close" size="small">
          <Close />
        </IconButton>
      </Box>
      <Divider sx={{ mt: 1 }} />
      <Box sx={modalContent}>
        <TextField inputRef={emailRef} required sx={textFiledStyle} label="Email" variant="outlined" />
        <TextField
          inputRef={passwordRef}
          required
          type="password"
          sx={textFiledStyle}
          label="Password"
          variant="outlined"
        />
      </Box>

      <Box sx={modalContent}>
        <Button type="submit" sx={button} variant="contained" disableElevation>
          Log in
        </Button>
        <Divider />
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Typography component="p" variant="caption" sx={{ mt: 2, mb: 2 }}>
            Don't have an account?
          </Typography>
          <Button onClick={() => setAuthFormType("sign-up")} size="small" sx={{ color: "#a435f0" }} variant="text">
            Sign up
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Modal
      open={props.authModalOpenState}
      onClose={props.authModalHandleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {authFormType === "sign-up" ? signUpForm : loginForm}
    </Modal>
  );
};
export default TeacherAuthModal;

const modalSignUpContainer = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 415,
  height: 650,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 0,
};
const modalLogInContainer = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 415,
  height: 320,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 0,
};

const modalContent = {
  paddingLeft: "25px",
  paddingRight: "25px",
};

const textFiledStyle = {
  width: "100%",
  mt: 2,
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
};

const button = {
  width: "100%",
  borderRadius: 0,
  mt: 2,
  backgroundColor: "#a435f0",
  height: "3rem",
  "&:hover": {
    backgroundColor: "#B546FF",
  },
};
