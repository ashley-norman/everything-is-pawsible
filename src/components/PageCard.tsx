import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router";

interface Props {
  title: string;
  text: string;
  pic: string;
  to: string;
  hideButton?: boolean;
}

const PageCard = ({ title, text, pic, to, hideButton = false }: Props) => {
  const content = (
    <>
      <CardMedia src={pic} title="pic" component="img" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
    </>
  );

  if (hideButton) {
    return (
      <Card>
        <CardActionArea component={RouterLink} to={to}>
          {content}
        </CardActionArea>
      </Card>
    );
  }

  return (
    <Card>
      {content}
      <CardActions>
        <Button size="small" color="primary" component={RouterLink} to={to}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default PageCard;
