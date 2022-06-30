import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { FC } from "react";

// Note: it will take in course information
type MyCoursesProgressItemProps = {};

const MyCoursesProgressItem: FC<MyCoursesProgressItemProps> = (props) => {
  return (
    <CardActionArea onClick={() => console.log("hello")}>
      <Card elevation={0} sx={{ display: "flex", maxWidth: 300 }}>
        <CardMedia
          component="img"
          sx={{
            width: 100,
            height: 60,
            marginTop: "auto",
            marginBottom: "auto",
            padding: 1,
          }}
          image="https://i3.ytimg.com/vi/VPBsE4ul_uw/maxresdefault.jpg"
          alt="Live from space album cover"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ padding: 1 }}>
            <Typography component="p" variant="body2">
              {/* Note: Course topic title here */}
              Live From Space basdad asd dasdas adss
            </Typography>
            {/* Note: Course progress here */}
            <BorderLinearProgress variant="determinate" value={50} />
          </CardContent>
        </Box>
      </Card>
    </CardActionArea>
  );
};

export default MyCoursesProgressItem;

// Note: styling for the progress bar
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
