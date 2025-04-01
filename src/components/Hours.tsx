import { Typography } from "@mui/material";

const Hours = () => {
  return (
    <>
      <Typography variant="overline" component="div">
        Monday - Friday
      </Typography>
      <Typography variant="caption">Daycare & Boarding</Typography>
      <Typography>7:00 am - 7:00 pm</Typography>

      <Typography variant="overline" component="div">
        Saturday
      </Typography>
      <Typography variant="caption">Boarding Only</Typography>
      <Typography>7:00 am - 12:00 pm</Typography>
      <Typography gutterBottom>3:00 pm - 6:00 pm</Typography>

      <Typography variant="overline" component="div">
        Sunday
      </Typography>
      <Typography variant="caption">Boarding Only</Typography>
      <Typography>7:00 am - 12:00 pm</Typography>
      <Typography gutterBottom>3:00 pm - 7:00 pm</Typography>
    </>
  );
};

export default Hours;
