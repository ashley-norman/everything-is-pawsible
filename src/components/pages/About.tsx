import {
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PageTitle from "../PageTitle";
import missyBioPic from "../../img/missy-bio.jpg";
import dadBioPic from "../../img/dad-bio.jpg";
import daveBioPic from "../../img/dave-bio.jpg";

const About = () => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <PageTitle title="About Us" />
      <Stack divider={<Divider />} gap={4}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardMedia component="img" src={missyBioPic} />
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" color="primary">
              Owner and Operator
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Missy Ansell
            </Typography>
            <Typography variant="body1">
              Melissa’s dream has always been to open up her own kennel where
              she can spend time with furry friends while treating them like her
              own! Melissa has worked at many different kennels in New York,
              California and Florida. She started her own business in 2016 doing
              pet sitting and dog walking after graduating from Niagara
              University with a Bachelor of Science degree in Biology, and then
              from Bergin University of Canine Sciences. With the help of her
              loving family, she was finally able to achieve her dream and open
              up a kennel! With both indoor and outdoor play areas, your dog
              will always be able to have fun! The knowledgeable staff will
              treat your dogs like family while they are here!
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={6}
          direction={small ? "column-reverse" : "row"}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              color="primary"
              align={small ? "left" : "right"}
              component="div"
            >
              Administration and Support
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              align={small ? "left" : "right"}
            >
              Craig Ansell
            </Typography>
            <Typography variant="body1" align={small ? "left" : "right"}>
              Craig is Missy's Dad. He has been a CPA for over 40 years, and has
              his own accounting business in Ponte Vedra Beach. Craig has owned
              dogs his entire life, and each one has been a poodle. Craig now
              has two standard poodles, one miniature poodle, and the newest, a
              mini teacup poodle. All the dogs gravitate to Craig as he wanders
              through the dog play area checking that all the dogs are having
              fun. It is with great pride that both Craig and his wife, Angela,
              assist Missy in her venture as owner of her own dog kennel! She is
              dedicated to the safety and general well being of all the dogs
              that visit and stay at Everything is Pawsible.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardMedia component="img" src={dadBioPic} />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardMedia component="img" src={daveBioPic} />
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" color="primary">
              Kennel Coordinator
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Dave Bolling
            </Typography>
            <Typography variant="body1">
              Dave has always been passionate about animals since he was young.
              He had many different kinds of dogs, but Vizsla's were always his
              favorite. He's been friends with Craig and the Ansell family for
              over 20 years, and is excited to help out with the kennel in any
              way he can!
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default About;
