import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardContent, CardMedia, CardActionArea, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import notfoundSVG from "../../../../assets/not-found-svg.svg";

// Note: it will take in course information
type MyCoursesProgressItemProps = {
  img: string;
  title: string;
  progress: number;
  showDivider: boolean;
  courseId: number;
};

const MyCoursesProgressItem: FC<MyCoursesProgressItemProps> = (props) => {
  const navigate = useNavigate();

  const onMyCourseCardClickHandler = () => {
    navigate(`/course/${props.courseId}/learn/lecture`);
  };

  return (
    <CardActionArea onClick={onMyCourseCardClickHandler}>
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
          image={props.img}
          onError={(e: any) => (e.currentTarget.src = notfoundSVG)}
          alt={props.title}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ padding: 1 }}>
            <Typography component="p" variant="body2">
              {props.title}
            </Typography>
            {/* Note: Course progress here */}
            <BorderLinearProgress variant="determinate" value={props.progress} />
          </CardContent>
        </Box>
      </Card>
      {props.showDivider && <Divider />}
    </CardActionArea>
  );
};

export default MyCoursesProgressItem;

// Note: styling for the progress bar
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
