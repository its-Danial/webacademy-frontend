import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type CourseCardProps = {};

const CourseCard: FC<CourseCardProps> = (props) => {
  return (
    <Card
      sx={{ maxWidth: 250, maxHeight: 300 }}
      className="shadow-none text-base"
    >
      <CardActionArea>
        <CardMedia
          height="150"
          component="img"
          className="object-fill"
          image="https://www.singaporecodingclub.com/wp-content/uploads/2022/05/Unofficial_JavaScript_logo_2.svg_.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CourseCard;
