import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Business, Email, Phone } from "@mui/icons-material";
import { emailAddress, phoneNumber } from "../../constants";
import PageTitle from "../PageTitle";

const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <PageTitle title="Contact" />
      <Grid container spacing={5}>
        <Grid size={{ xs: 12 }}>
          <Card>
            <CardMedia
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.4972951289365!2d-81.39982864842789!3d30.279901481707935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e449a529d3eaa1%3A0x94473cb82958efdd!2s925%208th%20Ave%20S%2C%20Jacksonville%20Beach%2C%20FL%2032250!5e0!3m2!1sen!2sus!4v1611433897992!5m2!1sen!2sus"
              width="100%"
              height="445"
              title="Google Map"
              component="iframe"
              sx={{ border: 0 }}
            />
          </Card>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid
              size={{ xs: 12, md: 4 }}
              container
              spacing={3}
              direction="column"
              alignItems="center"
              alignContent="center"
            >
              <Grid>
                <Business
                  color="primary"
                  sx={{ width: "2em", height: "2em" }}
                />
              </Grid>
              <Grid>
                <Typography variant="h6" color="textSecondary" align="center">
                  925 8th Ave S
                </Typography>
                <Typography variant="h6" color="textSecondary" align="center">
                  Jacksonville Beach, FL 32250
                </Typography>
              </Grid>
            </Grid>
            <Grid
              size={{ xs: 12, md: 4 }}
              container
              spacing={3}
              direction="column"
              alignItems="center"
            >
              <Grid>
                <Phone color="primary" sx={{ width: "2em", height: "2em" }} />
              </Grid>
              <Grid>
                <Typography variant="h6" color="textSecondary" align="center">
                  {phoneNumber}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              size={{ xs: 12, md: 4 }}
              container
              spacing={3}
              direction="column"
              alignItems="center"
            >
              <Grid>
                <Email color="primary" sx={{ width: "2em", height: "2em" }} />
              </Grid>
              <Grid>
                <Typography variant="h6" color="textSecondary" align="center">
                  {emailAddress}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box textAlign="center">
            <Button
              color="primary"
              size="large"
              variant="contained"
              href="https://everythingpaws.gingrapp.com/front_end/facility"
              target="_blank"
            >
              Contact Us
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
