import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// TODO: This should take in all the details that need to be fixed
type CourseCardProps = {
  img: string;
};

// UGLY: make it look better, add the star ratings feature
const CourseCard: FC<CourseCardProps> = (props) => {
  return (
    <Card
      sx={{ maxWidth: 250, maxHeight: 300, margin: 0 }}
      className="shadow-none border-solid border-1 border-slate-200 text-base"
    >
      <CardActionArea>
        <CardMedia
          height="150"
          component="img"
          className="object-fill"
          image={props.img}
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
