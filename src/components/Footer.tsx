import { Box, Container, Grid, Typography } from "@mui/material";
import ContactInfo from "./ContactInfo";
import HelpfulLinks from "./HelpfulLinks";
import Hours from "./Hours";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        position: "sticky",
        background: theme.palette.grey[900],
        color: theme.palette.getContrastText(theme.palette.grey[900]),
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      })}
    >
      <Container maxWidth="md">
        <Grid container>
          <Grid size={{ md: 4, sm: 12 }}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography variant="overline" color="primary">
                Everything Is Pawsible Kennel
              </Typography>
              <ContactInfo />
            </Box>
          </Grid>
          <Grid size={{ md: 4, sm: 12 }}>
            <Box display="flex" flexDirection="column">
              <Typography variant="overline" color="primary">
                Hours
              </Typography>
              <Hours />
            </Box>
          </Grid>
          <Grid size={{ md: 4, sm: 12 }}>
            <Box display="flex" flexDirection="column">
              <Typography variant="overline" color="primary">
                Helpful Links
              </Typography>
              <HelpfulLinks />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <SocialMedia />
    </Box>
  );
};

export default Footer;
