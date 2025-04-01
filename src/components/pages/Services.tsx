import { Container, Grid } from "@mui/material";
import PageTitle from "../PageTitle";
import PageCard from "../PageCard";
import boardingPic from "../../img/medium1.jpg";
import daycarePic from "../../img/outdoor-large1.jpg";

const Services = () => {
  return (
    <Container maxWidth="md">
      <PageTitle title="Services" />
      <Grid container spacing={2}>
        <Grid size={{ sm: 12, md: 6 }}>
          <PageCard
            title="Boarding"
            text="Facilities are available for dogs and cats of all sizes"
            pic={boardingPic}
            to="/boarding"
            hideButton
          />
        </Grid>
        <Grid size={{ sm: 12, md: 6 }}>
          <PageCard
            title="Daycare"
            text="Bring your pets for a day full of play time and fun"
            pic={daycarePic}
            to="/daycare"
            hideButton
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
