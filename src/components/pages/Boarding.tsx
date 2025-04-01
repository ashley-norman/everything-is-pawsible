import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import PageTitle from "../PageTitle";
import Section from "../Section";
import { Pets } from "@mui/icons-material";
import detailsPic from "../../img/large1.jpg";
import spacePic from "../../img/indoor1.jpg";
import mediumPic from "../../img/medium4.jpg";
import largePic from "../../img/large3.jpg";

const Boarding = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <PageTitle title="Boarding" />
      <Box display="flex" flexDirection="column">
        <Section
          pic={spacePic}
          header="The Space"
          text="Our spacious kennels are cleaned once a day and have epoxy flooring to help keep them clean longer. The entire facility is air conditioned, so if it is raining or too hot to be out for long, they have an indoor area to play in."
        />
        <Section
          reverse
          pic={detailsPic}
          header="The Details"
          text="We have a stereo system so your pet will have music to listen to at night to keep them relaxed. Security cameras will show you how your pup is doing throughout the day. All pets will have fresh water available at all times and meals can be given three times a day along with any medication needed."
        />
        <Grid container>
          <Grid size={{ sm: 12, md: 6 }}>
            <Typography
              variant="h4"
              component="h2"
              color="primary"
              gutterBottom
              align="center"
            >
              Vaccinations Required
            </Typography>
            <Typography variant="body1" align="center">
              Without these vaccinations, we will be unable to accept your pet
              for any service. Proof of vaccination is required during check-in.
            </Typography>
            <List aria-label="list of required vaccinations">
              <ListItem>
                <ListItemIcon>
                  <Pets color="primary" />
                </ListItemIcon>
                <ListItemText primary="Rabies" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Pets color="primary" />
                </ListItemIcon>
                <ListItemText primary="Distemper/parvo" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Pets color="primary" />
                </ListItemIcon>
                <ListItemText primary="Bordetella" />
              </ListItem>
            </List>
            <Typography
              variant="h4"
              component="h2"
              color="primary"
              gutterBottom
              align="center"
            >
              Additional Considerations
            </Typography>
            <Typography variant="body1" align="center">
              All dogs 1 year and older <b>must</b> be spayed or neutered before
              their boarding appointment.
            </Typography>
          </Grid>
          <Grid size={{ sm: 12, md: 6 }}>
            <Typography
              variant="h4"
              component="h2"
              color="primary"
              gutterBottom
              align="center"
            >
              Pricing
            </Typography>
            <List aria-label="pricing list">
              <ListItem>
                <ListItemIcon>
                  <Pets color="primary" />
                </ListItemIcon>
                <ListItemText primary="1 dog - $50 per day" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Pets color="primary" />
                </ListItemIcon>
                <ListItemText primary="2 dogs - $80 per day" />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Divider />
        <Typography
          variant="h4"
          component="h2"
          color="primary"
          align="center"
          gutterBottom
        >
          We offer a variety of kennel sizes to meet the needs of every dog
        </Typography>
        <Typography variant="h5" component="h3" align="center" gutterBottom>
          All kennels contain a raised bed for your dog to relax upon
        </Typography>
        <Grid container spacing={8}>
          {/* <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <CardMedia src={pic} title="pic" component="img" />
              <CardContent>
                <Typography variant="caption" color="textSecondary">
                  Small, perfect for the smallest of our furry friends
                </Typography>
              </CardContent>
            </Card>
          </Grid> */}
          <Grid size={{ sm: 12, md: 6 }}>
            <Card sx={{ height: "100%" }}>
              <CardMedia src={mediumPic} title="pic" component="img" />
              <CardContent>
                <Typography variant="caption" color="textSecondary">
                  Medium, 3 feet by 5 feet kennel, great for smaller to standard
                  sized dogs
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ sm: 12, md: 6 }}>
            <Card sx={{ height: "100%" }}>
              <CardMedia src={largePic} title="pic" component="img" />
              <CardContent>
                <Typography variant="caption" color="textSecondary">
                  Large, 4 feet by 6 feet kennel, excellent for many fully grown
                  dogs
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* <Divider />
        <Section
          reverse
          pic={pic}
          header="Cat Boarding"
          text="We also offer Cat boarding! We have a room specifically for cats right by the lobby so they can relax away from all the noise of the dogs. Each cat will get their own suite with litter box changed every day, food and water up to three times a day, and any medication they may need."
        /> */}
      </Box>
    </Container>
  );
};

export default Boarding;
