import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import ContactInfo from "./ContactInfo";
import HelpfulLinks from "./HelpfulLinks";
import Hours from "./Hours";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <Box
      component="footer"
      paddingY={6}
      position="sticky"
      sx={(theme) => ({
        background: theme.palette.grey[900],
        color: theme.palette.getContrastText(theme.palette.grey[900]),
      })}
    >
      <Container maxWidth="md">
        <Grid container>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack>
              <Typography variant="overline" color="primary">
                Everything Is Pawsible Kennel
              </Typography>
              <ContactInfo />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack>
              <Typography variant="overline" color="primary">
                Hours
              </Typography>
              <Hours />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack>
              <Typography variant="overline" color="primary">
                Helpful Links
              </Typography>
              <HelpfulLinks />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <SocialMedia />
    </Box>
  );
};

export default Footer;
